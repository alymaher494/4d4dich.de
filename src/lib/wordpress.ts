/**
 * WordPress REST API Client
 * 
 * This module handles all communication with the WordPress backend
 * running on the subdomain (e.g., cms.4d4dish.de).
 * 
 * Data is fetched via the WP REST API and cached with ISR.
 */

// WordPress API base URL - set in .env.local
const WP_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.4d4dich.de/wp-json';

// Revalidation interval in seconds (fallback if on-demand revalidation fails)
const REVALIDATE_INTERVAL = 60; // 60 seconds

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
}

export interface WPPage {
    id: number;
    slug: string;
    title: { rendered: string };
    content: { rendered: string };
    acf?: Record<string, unknown>;
    template: string;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
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
    featured_media: number;
    acf?: Record<string, unknown>;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text: string;
        }>;
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

    const res = await fetch(url.toString(), {
        next: { revalidate }, // ISR: revalidate every X seconds
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) {
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

// ============================================================
// Pages
// ============================================================

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

/**
 * Extract the featured image URL from an embedded post/page
 */
export function getFeaturedImageUrl(
    item: { _embedded?: { 'wp:featuredmedia'?: Array<{ source_url: string }> } },
    size?: string
): string | null {
    const media = item._embedded?.['wp:featuredmedia']?.[0];
    if (!media) return null;

    if (size) {
        const mediaWithDetails = media as WPMedia;
        const sizeData = mediaWithDetails.media_details?.sizes?.[size];
        if (sizeData) return sizeData.source_url;
    }

    return media.source_url;
}

/**
 * Strip HTML tags from rendered content
 */
export function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '').trim();
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
