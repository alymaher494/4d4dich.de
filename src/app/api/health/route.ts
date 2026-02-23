import { NextResponse } from 'next/server';

/**
 * Health Check API Route
 * 
 * Used to verify the Next.js app is running correctly on Hostinger.
 * Also checks if WordPress API is reachable.
 */
export async function GET() {
    const wpApiUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.4d4dich.de/wp-json';

    let wpStatus = 'unknown';

    try {
        const res = await fetch(`${wpApiUrl}/wp/v2/posts?per_page=1`, {
            next: { revalidate: 0 }, // Always fresh
        });
        wpStatus = res.ok ? 'connected' : `error: ${res.status}`;
    } catch (err) {
        wpStatus = `unreachable: ${err instanceof Error ? err.message : 'unknown error'}`;
    }

    return NextResponse.json({
        status: 'ok',
        app: '4D Für Dich - Next.js Frontend',
        wordpress: {
            api_url: wpApiUrl,
            status: wpStatus,
        },
        environment: process.env.NODE_ENV,
        timestamp: new Date().toISOString(),
    });
}
