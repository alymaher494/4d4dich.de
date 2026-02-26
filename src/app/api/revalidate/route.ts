import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

/**
 * On-Demand Revalidation API Route
 * 
 * WordPress sends a POST request to this endpoint whenever content is
 * created, updated, or deleted. This triggers Next.js to regenerate
 * the affected pages immediately.
 * 
 * Endpoint: POST /api/revalidate?secret=YOUR_SECRET
 * 
 * Body from WordPress:
 * {
 *   "post_id": 123,
 *   "post_type": "post",
 *   "post_slug": "example-post",
 *   "action": "publish" | "update" | "delete"
 * }
 */

export async function POST(request: NextRequest) {
    try {
        // 1. Verify the secret token
        const secret = request.nextUrl.searchParams.get('secret');

        if (secret !== process.env.REVALIDATION_SECRET) {
            return NextResponse.json(
                { message: 'Invalid secret token', revalidated: false },
                { status: 401 }
            );
        }

        // 2. Parse the request body
        const body = await request.json();
        const post_type = body.post_type as string;
        const post_slug = body.post_slug as string;
        const action = body.action as string;

        console.log(`[Revalidation] Received: type=${post_type}, slug=${post_slug}, action=${action}`);

        // 3. Determine which paths to revalidate based on post type
        const pathsToRevalidate: string[] = [];

        switch (post_type) {
            case 'post':
                // Blog post changed - revalidate blog listing and specific post
                pathsToRevalidate.push('/blog');
                if (post_slug) {
                    pathsToRevalidate.push(`/blog/${post_slug}`);
                }
                // Also revalidate homepage (might show latest posts)
                pathsToRevalidate.push('/');
                break;

            case 'page':
                // Page changed - map WordPress page slugs to Next.js routes
                const pageSlugMap: Record<string, string> = {
                    'home': '/',
                    'ueber-uns': '/ueber-uns',
                    'kontakt': '/kontakt',
                    'portfolio': '/portfolio',
                    'service': '/dienstleistungen',
                    'service-druck': '/druck',
                    'service-grafik-design': '/grafik-design',
                    'service-web-app': '/web-app',
                    'service-marketing': '/marketing',
                    'impressum': '/impressum',
                    'datenschutz': '/datenschutz',
                    'agb': '/agb',
                };

                if (post_slug && pageSlugMap[post_slug]) {
                    pathsToRevalidate.push(pageSlugMap[post_slug]);
                } else {
                    // If slug not mapped, revalidate all pages
                    pathsToRevalidate.push('/');
                }
                break;

            case 'portfolio':
                // Portfolio project changed
                pathsToRevalidate.push('/portfolio');
                if (post_slug) {
                    pathsToRevalidate.push(`/portfolio/${post_slug}`);
                }
                pathsToRevalidate.push('/'); // Homepage shows portfolio
                break;

            case 'testimonial':
                // Testimonial changed - revalidate pages that show testimonials
                pathsToRevalidate.push('/');
                pathsToRevalidate.push('/ueber-uns');
                break;

            case 'client':
                // Client changed - revalidate pages that show client logos
                pathsToRevalidate.push('/');
                break;

            default:
                // Unknown post type - revalidate homepage as fallback
                pathsToRevalidate.push('/');
                break;
        }

        // 4. Revalidate all affected paths
        const revalidatedPaths: string[] = [];

        for (const path of pathsToRevalidate) {
            try {
                revalidatePath(path);
                revalidatedPaths.push(path);
                console.log(`[Revalidation] ✅ Revalidated: ${path}`);
            } catch (err) {
                console.error(`[Revalidation] ❌ Failed to revalidate: ${path}`, err);
            }
        }

        // 5. Also revalidate by tag if applicable
        try {
            if (post_type) {
                // Map singular post types to plural tags used in fetch logic
                const tagMap: Record<string, string> = {
                    'post': 'posts',
                    'testimonial': 'testimonials',
                    'client': 'clients',
                    'portfolio': 'portfolio',
                    'team': 'team',
                };

                const tagToRevalidate = tagMap[post_type] || post_type;
                revalidateTag(tagToRevalidate);
                console.log(`[Revalidation] ✅ Revalidated tag: ${tagToRevalidate} (from type: ${post_type})`);
            }
        } catch (err) {
            console.error('[Revalidation] ❌ Tag revalidation failed:', err);
        }

        return NextResponse.json({
            revalidated: true,
            paths: revalidatedPaths,
            timestamp: new Date().toISOString(),
        });

    } catch (error) {
        console.error('[Revalidation] ❌ Global Error:', error);
        return NextResponse.json(
            { message: 'Error revalidating', revalidated: false, error: String(error) },
            { status: 500 }
        );
    }
}

/**
 * GET handler for testing the endpoint
 */
export async function GET() {
    return NextResponse.json({
        status: 'ok',
        message: 'Revalidation endpoint is active. Send a POST request to trigger revalidation.',
        timestamp: new Date().toISOString(),
    });
}
