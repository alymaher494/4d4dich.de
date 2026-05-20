import { getPortfolioProjects, getPortfolioCategories } from "@/lib/wordpress";
import Hero from "./_components/Hero";
import Grid from "./_components/Grid";
import ContactCTA from "@/components/sections/ContactCTA";

export default async function PortfolioPage() {
    const [projects, categories] = await Promise.all([
        getPortfolioProjects(50),
        getPortfolioCategories()
    ]);

    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Grid initialProjects={projects} initialCategories={categories} />
            <ContactCTA />
        </main>
    );
}
