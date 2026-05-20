import { getPortfolioBySlug, getPortfolioProjects, getFeaturedImageUrl, stripHtml } from "@/lib/wordpress";
import { portfolioContent } from "@/data/website-text";
import ProjectClient from "./ProjectClient";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getPortfolioBySlug(slug);

    if (!project) return { title: "Project Not Found" };

    const rankMath = project.rank_math;
    if (rankMath) {
        return {
            title: rankMath.title || project.title.rendered,
            description: rankMath.description || stripHtml(project.excerpt.rendered),
            alternates: {
                canonical: rankMath.canonical || `/portfolio/${slug}`,
            }
        };
    }

    return {
        title: `${project.title.rendered} | 4D Für Dich`,
        description: stripHtml(project.excerpt.rendered),
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Fetch from WordPress
    const wpProject = await getPortfolioBySlug(slug);
    const allProjects = await getPortfolioProjects(100);

    if (wpProject) {
        const acf = wpProject.acf as any;

        // Navigation (Prev/Next)
        const currentIndex = allProjects.findIndex(p => p.slug === slug);
        const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
        const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

        // Collect Gallery Images from individual ACF fields
        const featuredImg = getFeaturedImageUrl(wpProject) || "/images/portfolio/fallback.jpg";
        const galleryImages = [featuredImg];

        for (let i = 1; i <= 6; i++) {
            const img = acf?.[`project_image_${i}`];
            if (img) {
                // ACF Free might return object or URL string
                const url = typeof img === 'string' ? img : (img.url || img.source_url);
                if (url && !galleryImages.includes(url)) {
                    galleryImages.push(url);
                }
            }
        }

        // Extract category
        let mainCategory = (acf?.project_category as string) || "Website Design";
        const terms = wpProject._embedded?.['wp:term'] || [];
        if (!acf?.project_category && terms[0] && terms[0][0]) {
            mainCategory = terms[0][0].name;
        }

        // Split services
        const rawServices = (acf?.project_services as string) || "";
        const services = rawServices ? rawServices.split('\n').map(s => s.trim()).filter(Boolean) : [];

        // Project Results (Stats)
        let stats: Array<{ value: string, label: string }> = [];
        const statsStr = acf?.project_stats as string;
        if (statsStr) {
            stats = statsStr.split(',').map(s => {
                const parts = s.split(':');
                if (parts.length === 2) return { value: parts[0].trim(), label: parts[1].trim() };
                return null;
            }).filter(Boolean) as any;
        }

        const projectData = {
            id: wpProject.slug,
            title: wpProject.title.rendered,
            subtitle: stripHtml(wpProject.excerpt.rendered),
            description: (acf?.project_description as string) || "", // DEDICATED Overview
            category: mainCategory,
            client: (acf?.project_client as string) || "",
            year: (acf?.project_year as string) || new Date(wpProject.date).getFullYear().toString(),
            services: services,
            challenge: (acf?.project_challenge as string) || "",
            solution: (acf?.project_solution as string) || wpProject.content.rendered,
            results: stats,
            images: galleryImages,
            // Navigation
            navigation: {
                prev: prevProject ? { slug: prevProject.slug, title: prevProject.title.rendered } : null,
                next: nextProject ? { slug: nextProject.slug, title: nextProject.title.rendered } : null,
            }
        };

        return <ProjectClient project={projectData} />;
    }

    // Fallback to static data if not found in WP
    const staticProjectData = portfolioContent.projects.find(p => p.id === slug) || portfolioContent.projects[0];
    return <ProjectClient project={staticProjectData} />;
}
