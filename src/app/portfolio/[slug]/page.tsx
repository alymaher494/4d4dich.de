import { getPortfolioBySlug, getFeaturedImageUrl, stripHtml } from "@/lib/wordpress";
import { portfolioContent } from "@/data/website-text";
import ProjectClient from "./ProjectClient";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // First try fetching from WordPress
    const wpProject = await getPortfolioBySlug(slug);

    if (wpProject) {
        // Map the WP data format to what the component expects
        const rawServices = (wpProject.acf?.project_services as string) || "";
        const services = rawServices ? rawServices.split('\n').map(s => s.trim()).filter(Boolean) : [];

        let stats = [];
        const statsStr = wpProject.acf?.project_stats as string;
        if (statsStr) {
            stats = statsStr.split(',').map(s => {
                const parts = s.split(':');
                if (parts.length === 2 && parts[0].trim() && parts[1].trim()) {
                    return { value: parts[0].trim(), label: parts[1].trim() };
                }
                return null;
            }).filter(Boolean) as { value: string, label: string }[];
        }

        const featuredImg = getFeaturedImageUrl(wpProject) || "/images/portfolio/fallback.jpg";
        const descriptionField = wpProject.acf?.project_description as string;
        const solutionText = wpProject.content.rendered || wpProject.excerpt.rendered;

        const projectData = {
            id: wpProject.slug,
            title: wpProject.title.rendered,
            subtitle: descriptionField || stripHtml(wpProject.excerpt.rendered),
            category: (wpProject.acf?.project_platform as string) || "Digital Strategy",
            client: (wpProject.acf?.project_client as string) || (wpProject.acf?.['wpcf-client'] as string) || "",
            year: (wpProject.acf?.project_year as string) || new Date(wpProject.date).getFullYear().toString(),
            services: services.length > 0 ? services : [],
            challenge: descriptionField || stripHtml(wpProject.excerpt.rendered),
            solution: solutionText,
            results: stats,
            images: [featuredImg]
        };

        return <ProjectClient project={projectData} />;
    }

    // Fallback to static data if not found in WP
    const staticProjectData = portfolioContent.projects.find(p => p.id === slug) || portfolioContent.projects[0];
    return <ProjectClient project={staticProjectData} />;
}
