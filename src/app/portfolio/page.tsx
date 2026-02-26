import { getPortfolioProjects } from "@/lib/wordpress";
import Hero from "./_components/Hero";
import Grid from "./_components/Grid";
import ContactCTA from "@/components/sections/ContactCTA";

export default async function PortfolioPage() {
    const projects = await getPortfolioProjects(50); // Fetch up to 50 projects

    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Grid initialProjects={projects} />
            <ContactCTA />
        </main>
    );
}
