import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function POST(request: NextRequest) {
    const secret = request.nextUrl.searchParams.get('secret');

    const allowedSecret = process.env.REVALIDATION_SECRET || process.env.NEXTJS_REVALIDATION_SECRET || 'your-secret-key-here-change-this';

    // Verify the secret matches what we put in functions.php
    if (secret !== allowedSecret) {
        return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
    }

    try {
        const body = await request.json();
        const { post_type, post_slug } = body;

        // Smart revalidation based on what changed in WordPress
        if (post_type === 'post') {
            revalidatePath('/blog');
            revalidatePath(`/blog/${post_slug}`);
            revalidateTag('posts');
        } else if (post_type === 'portfolio') {
            revalidatePath('/portfolio');
            revalidatePath(`/portfolio/${post_slug}`);
            revalidateTag('portfolio');
        } else if (post_type === 'client' || post_type === 'testimonial' || post_type === 'team') {
            revalidatePath('/');
            revalidatePath('/ueber-uns');
        } else if (post_type === 'page') {
            if (post_slug === 'home') revalidatePath('/');
            else revalidatePath(`/${post_slug}`);
            revalidateTag('pages');
        } else {
            // Full site revalidation if unsure
            revalidatePath('/', 'layout');
        }

        return NextResponse.json({ revalidated: true, now: Date.now() });
    } catch (err) {
        return NextResponse.json({ message: 'Error revalidating', error: err }, { status: 500 });
    }
}
