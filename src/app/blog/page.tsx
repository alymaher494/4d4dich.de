import { getPosts } from "@/lib/wordpress";
import Hero from "./_components/Hero";
import BlogGrid from "./_components/BlogGrid";
import ContactCTA from "@/components/sections/ContactCTA";

export default async function BlogPage() {
    const { posts } = await getPosts(1, 10); // Fetch first 10 posts

    return (
        <main className="bg-white min-h-screen">
            <Hero />
            <BlogGrid initialPosts={posts} />
            <ContactCTA />
        </main>
    );
}
