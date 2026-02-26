import { getPostBySlug, getFeaturedImageUrl, formatDate } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ContactCTA from "@/components/sections/ContactCTA";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return notFound();
    }

    const featuredImg = getFeaturedImageUrl(post);

    return (
        <div className="bg-white min-h-screen">
            <section className="pt-40 pb-20 px-6 md:px-12 bg-slate-50 border-b border-slate-100">
                <div className="max-w-4xl mx-auto">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 font-medium">
                        <ArrowLeft className="w-4 h-4" /> Zurück zum Blog
                    </Link>

                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                        {post.title.rendered}
                    </h1>

                    <div className="flex items-center gap-4 text-slate-500 font-medium">
                        <span>{formatDate(post.date)}</span>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 md:px-12">
                <div className="max-w-4xl mx-auto space-y-12">
                    {featuredImg && (
                        <div className="rounded-[3rem] overflow-hidden shadow-2xl relative aspect-video">
                            <img src={featuredImg} alt={post.title.rendered} className="w-full h-full object-cover" />
                        </div>
                    )}

                    <div
                        className="prose prose-xl max-w-none prose-slate"
                        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                    />
                </div>
            </section>

            <ContactCTA />
        </div>
    );
}
