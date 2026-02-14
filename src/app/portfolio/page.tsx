
import Hero from "./_components/Hero";
import Grid from "./_components/Grid";
import ContactCTA from "@/components/sections/ContactCTA";

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Grid />
            <ContactCTA />
        </main>
    );
}
