/**
 * WordPress REST API Client
 * 
 * This module handles all communication with the WordPress backend
 * running on the subdomain (e.g., cms.4d4dich.de).
 * 
 * Data is fetched via the WP REST API and cached with ISR.
 */

import { Metadata } from "next";

// WordPress API base URL - set in .env.local
const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.4d4dich.de/wp-json';

// Revalidation interval in seconds (60s = 1 minute cache)
const REVALIDATE_INTERVAL = 60;

// ============================================================
// Types
// ============================================================

export interface WPPost {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    modified: string;
    featured_media: number;
    categories: number[];
    tags: number[];
    acf?: Record<string, unknown>; // Advanced Custom Fields
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
            media_details: {
                sizes: Record<string, { source_url: string; width: number; height: number }>;
            };
        }>;
        'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
        author?: Array<{ name: string; avatar_urls: Record<string, string> }>;
    };
    rank_math?: {
        title?: string;
        description?: string;
        focus_keyword?: string;
        robots?: string[];
    };
}

export interface WPPage {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    excerpt?: { rendered: string };
    acf?: {
        hero_title?: string;
        hero_description?: string;
        seo_title?: string;
        seo_description?: string;
        og_image?: string;
        [key: string]: any;
    };
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
    };
    rank_math?: {
        title?: string;
        description?: string;
        focus_keyword?: string;
        robots?: string[];
    };
}

export interface WPMedia {
    id: number;
    source_url: string;
    alt_text: string;
    media_details: {
        sizes: Record<string, { source_url: string; width: number; height: number }>;
    };
}

export interface WPCategory {
    id: number;
    name: string;
    slug: string;
    count: number;
}

export interface WPPortfolio {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    excerpt: { rendered: string };
    date: string;
    featured_media: number;
    acf?: Record<string, unknown>;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
        'wp:term'?: Array<Array<{ id: number; name: string; slug: string; taxonomy: string }>>;
    };
    rank_math?: {
        title?: string;
        description?: string;
        focus_keyword?: string;
        robots?: string[];
        canonical?: string;
    };
}

export interface WPTestimonial {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    acf?: Record<string, unknown>;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
    };
}

export interface WPClient {
    id: number;
    title: { rendered: string };
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
    };
}

export interface WPSiteSettings {
    name: string;
    description: string;
    url: string;
}

// ============================================================
// Helper: Generic Fetch with Error Handling
// ============================================================

async function wpFetch<T>(
    endpoint: string,
    params: Record<string, string | number> = {},
    revalidate: number = REVALIDATE_INTERVAL
): Promise<T> {
    const url = new URL(`${WP_API_URL}${endpoint}`);

    // Add _embed to get featured images and terms inline
    url.searchParams.set('_embed', '1');

    // Add additional query params
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, String(value));
    });

    // Generate tags based on the endpoint for revalidation
    const tag = endpoint.split('/').filter(Boolean).pop() || 'general';

    const res = await fetch(url.toString(), {
        next: {
            revalidate,
            tags: [tag]
        },
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
        if (res.status === 404) {
            console.warn(`[WordPress] ⚠️ Endpoint not found (404): ${url.toString()}. Falling back to static data.`);
            return [] as unknown as T;
        }
        console.error(`WordPress API Error: ${res.status} ${res.statusText} for ${url.toString()}`);
        throw new Error(`WordPress API Error: ${res.status} ${res.statusText}`);
    }

    return res.json();
}

// ============================================================
// Posts
// ============================================================

/**
 * Get all blog posts with pagination
 */
export async function getPosts(
    page: number = 1,
    perPage: number = 10,
    categoryId?: number
): Promise<{ posts: WPPost[]; totalPages: number; total: number }> {
    const params: Record<string, string | number> = {
        page,
        per_page: perPage,
        orderby: 'date',
        order: 'desc',
    };

    if (categoryId) {
        params.categories = categoryId;
    }

    const url = new URL(`${WP_API_URL}/wp/v2/posts`);
    url.searchParams.set('_embed', '1');
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, String(value));
    });

    const res = await fetch(url.toString(), {
        next: { revalidate: REVALIDATE_INTERVAL },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch posts: ${res.statusText}`);
    }

    const posts: WPPost[] = await res.json();
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1', 10);
    const total = parseInt(res.headers.get('X-WP-Total') || '0', 10);

    return { posts, totalPages, total };
}

/**
 * Get a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<WPPost | null> {
    const posts = await wpFetch<WPPost[]>('/wp/v2/posts', { slug, per_page: 1 });
    return posts.length > 0 ? posts[0] : null;
}

/**
 * Get all post slugs (for generateStaticParams)
 */
export async function getAllPostSlugs(): Promise<string[]> {
    const posts = await wpFetch<WPPost[]>('/wp/v2/posts', { per_page: 100, _fields: 'slug' });
    return posts.map((post) => post.slug);
}

/**
 * Get Global Settings (ACF Options via custom endpoint)
 */
export async function getGlobalSettings(): Promise<any> {
    try {
        const url = `${WP_API_URL}/custom/v1/global-settings`;
        const res = await fetch(url, { next: { revalidate: REVALIDATE_INTERVAL } });
        if (!res.ok) return {};
        return await res.json();
    } catch (e) {
        console.error("Error fetching global settings:", e);
        return {};
    }
}

// ============================================================
// Pages
// ============================================================

/**
 * Get pages by parent ID
 */
export async function getChildPages(parentId: number): Promise<WPPage[]> {
    return wpFetch<WPPage[]>('/wp/v2/pages', { parent: parentId, per_page: 100, orderby: 'menu_order', order: 'asc' });
}

/**
 * Get a single page by ID
 */
export async function getPageById(id: number): Promise<WPPage | null> {
    return wpFetch<WPPage>(`/wp/v2/pages/${id}`);
}

/**
 * Get a page by slug
 */
export async function getPageBySlug(slug: string): Promise<WPPage | null> {
    const pages = await wpFetch<WPPage[]>('/wp/v2/pages', { slug, per_page: 1 });
    return pages.length > 0 ? pages[0] : null;
}

// ============================================================
// Categories
// ============================================================

/**
 * Get all categories
 */
export async function getCategories(): Promise<WPCategory[]> {
    return wpFetch<WPCategory[]>('/wp/v2/categories', { per_page: 100, hide_empty: 1 });
}

// ============================================================
// Custom Post Types: Portfolio
// ============================================================

/**
 * Get all portfolio projects
 */
export async function getPortfolioProjects(perPage: number = 20): Promise<WPPortfolio[]> {
    return wpFetch<WPPortfolio[]>('/wp/v2/portfolio', { per_page: perPage, orderby: 'date', order: 'desc' });
}

/**
 * Get a single portfolio project by slug
 */
export async function getPortfolioBySlug(slug: string): Promise<WPPortfolio | null> {
    const projects = await wpFetch<WPPortfolio[]>('/wp/v2/portfolio', { slug, per_page: 1 });
    return projects.length > 0 ? projects[0] : null;
}

/**
 * Get all portfolio categories
 */
export async function getPortfolioCategories(): Promise<WPCategory[]> {
    return wpFetch<WPCategory[]>('/wp/v2/portfolio_category', { per_page: 100, hide_empty: 1 });
}

// ============================================================
// Custom Post Types: Testimonials
// ============================================================

/**
 * Get all testimonials
 */
export async function getTestimonials(perPage: number = 20): Promise<WPTestimonial[]> {
    return wpFetch<WPTestimonial[]>('/wp/v2/testimonial', { per_page: perPage });
}

// ============================================================
// Custom Post Types: Clients
// ============================================================

/**
 * Get all clients (for logo marquee)
 */
export async function getClients(perPage: number = 50): Promise<WPClient[]> {
    return wpFetch<WPClient[]>('/wp/v2/client', { per_page: perPage });
}

// ============================================================
// Media
// ============================================================

/**
 * Get media by ID
 */
export async function getMediaById(id: number): Promise<WPMedia | null> {
    try {
        return await wpFetch<WPMedia>(`/wp/v2/media/${id}`);
    } catch {
        return null;
    }
}

// ============================================================
// Site Settings
// ============================================================

/**
 * Get WordPress site settings
 */
export async function getSiteSettings(): Promise<WPSiteSettings> {
    return wpFetch<WPSiteSettings>('/wp/v2/settings', {}, 3600); // Cache for 1 hour
}

// ============================================================
// ACF Options (if using ACF Pro with options page)
// ============================================================

/**
 * Get ACF options page data (requires ACF to REST API plugin)
 */
export async function getACFOptions(): Promise<Record<string, unknown> | null> {
    try {
        return await wpFetch<Record<string, unknown>>('/acf/v3/options/options');
    } catch {
        console.warn('ACF Options not available - make sure ACF to REST API plugin is installed');
        return null;
    }
}

// ============================================================
// Menus (requires WP REST API Menus plugin)
// ============================================================

export interface WPMenuItem {
    ID: number;
    title: string;
    url: string;
    slug: string;
    children?: WPMenuItem[];
}

/**
 * Get navigation menu by location
 */
export async function getMenuByLocation(location: string): Promise<WPMenuItem[]> {
    try {
        return await wpFetch<WPMenuItem[]>(`/menus/v1/locations/${location}`, {}, 3600);
    } catch {
        console.warn(`Menu location "${location}" not available`);
        return [];
    }
}

// ============================================================
// Utility: Extract Featured Image
// ============================================================

export const FALLBACK_IMAGE = "/images/assets/3af880f446fb18896cb7aba519276f73.webp";

export function normalizeUrl(url: string | null | undefined): string {
    if (!url) return "";
    
    let normalized = url;
    
    // If the URL is http but we are on https, upgrade it
    if (normalized.startsWith('http://')) {
        normalized = normalized.replace('http://', 'https://');
    }
    
    return normalized;
}

/**
 * Robust helper to get a URL from an ACF image field
 * ACF can return a URL string, an image object, or an ID
 */
export function getImageUrl(image: any): string {
    if (!image) return FALLBACK_IMAGE;
    if (typeof image === 'string') return normalizeUrl(image);
    if (typeof image === 'object' && image.url) return normalizeUrl(image.url);
    if (typeof image === 'number') return FALLBACK_IMAGE; // We would need another call to fetch by ID
    return FALLBACK_IMAGE;
}

/**
 * Extract the featured image URL from an embedded post/page
 */
export function getFeaturedImageUrl(
    item: { _embedded?: { 'wp:featuredmedia'?: Array<{ source_url: string; media_details?: any }> } },
    size?: string
): string {
    const media = item._embedded?.['wp:featuredmedia']?.[0];
    if (!media) return FALLBACK_IMAGE;

    if (size && media.media_details?.sizes?.[size]) {
        return normalizeUrl(media.media_details.sizes[size].source_url);
    }

    return normalizeUrl(media.source_url);
}

/**
 * Strip HTML tags from rendered content
 */
export function stripHtml(html: string): string {
    return html
        .replace(/<[^>]*>/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .trim();
}

/**
 * Format WordPress date to locale string
 */
export function formatDate(dateString: string, locale: string = 'de-DE'): string {
    return new Date(dateString).toLocaleDateString(locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

// Team Members
export async function getTeamMembers(limit = 10): Promise<WPPost[]> {
    return wpFetch<WPPost[]>(`/wp/v2/team`, { per_page: limit });
}

export interface GlobalSettings {
    whatsapp: string;
    phone: string;
    landline: string;
    email: string;
    google_api_key: string;
    google_place_id: string;
    google_review_url: string;
    footer_description: string;
}

// Global Options (requires ACF Options Page or similar)
export async function getGlobalOptions(): Promise<GlobalSettings | null> {
    try {
        return await wpFetch<GlobalSettings>(`/custom/v1/global-settings`);
    } catch {
        return null;
    }
}

// Google Reviews API Integration
export interface GoogleReview {
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    image: string;
    date: string;
}

/**
 * Fetch real reviews from Google Places API
 */
export async function getGoogleReviews(placeId: string, apiKey: string): Promise<GoogleReview[]> {
    if (!placeId || !apiKey) return [];

    try {
        const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}&language=de`;
        const res = await fetch(url, { next: { revalidate: 86400 } }); // Cache for 24 hours

        if (!res.ok) throw new Error('Google API Error');

        const data = await res.json();
        const reviews = data.result?.reviews || [];

        return reviews.map((r: any, idx: number) => ({
            id: `google-${idx}`,
            name: r.author_name,
            role: "Google Rezension",
            content: r.text,
            rating: r.rating,
            image: r.profile_photo_url,
            date: r.relative_time_description
        }));
    } catch (error) {
        console.error('Error fetching Google Reviews:', error);
        return [];
    }
}

/**
 * Send contact form data to WordPress
 */
export async function sendContactForm(data: {
    name: string;
    email: string;
    message: string;
    subject?: string;
    phone?: string;
    service?: string;
    file?: File | null;
}): Promise<boolean> {
    try {
        const url = `${WP_API_URL}/custom/v1/contact`;

        // If there's a file, we MUST use FormData
        if (data.file) {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('message', data.message);
            if (data.subject) formData.append('subject', data.subject);
            if (data.phone) formData.append('phone', data.phone);
            if (data.service) formData.append('service', data.service);
            formData.append('file', data.file);

            const res = await fetch(url, {
                method: 'POST',
                body: formData,
            });

            if (!res.ok) return false;
            const result = await res.json();
            return result.success === true;
        }

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!res.ok) return false;

        const result = await res.json();
        return result.success === true;
    } catch (error) {
        console.error('Error sending contact form:', error);
        return false;
    }
}

/**
 * Metadata Helper for Next.js
 * Combines Rank Math SEO data with site defaults
 */
export function constructMetadata(pageData: any, defaultTitle: string, defaultDesc: string, path: string): Metadata {
    const rm = pageData?.rank_math;
    const acf = pageData?.acf || {};
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://4d4dich.de';

    // Better defaults for SEO (longer descriptions)
    const fallbackTitle = "4D FÜR DICH | Premium Design & Digital Marketing Agentur Frankfurt/Rodgau";
    const fallbackDesc = "Passionate experts for your brand. We offer premium print, web development, and digital marketing services in Rodgau and Frankfurt. Let's transform your vision today.";

    const title = rm?.title || acf?.seo_title || defaultTitle || fallbackTitle;
    const description = rm?.description || acf?.seo_description || defaultDesc || fallbackDesc;
    const canonical = rm?.canonical || `${siteUrl}${path}`;

    return {
        title: title,
        description: description,
        metadataBase: new URL(siteUrl),
        alternates: {
            canonical: canonical,
        },
        robots: {
            index: rm?.robots ? !rm.robots.includes('noindex') : true,
            follow: rm?.robots ? !rm.robots.includes('nofollow') : true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        openGraph: {
            title: rm?.og_title || title,
            description: rm?.og_description || description,
            url: `${siteUrl}${path}`,
            siteName: '4D Marketing & Design',
            images: rm?.og_image ? [{ url: rm.og_image }] : [{ url: '/images/assets/4bf9d1cd2d37202c1683c052a2acce3e.png' }],
            locale: 'de_DE',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: rm?.og_image ? [rm.og_image] : ['/images/assets/4bf9d1cd2d37202c1683c052a2acce3e.png'],
        },
        other: {
            'format-detection': 'telephone=no',
        },
    };
}
