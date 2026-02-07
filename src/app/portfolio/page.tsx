
import PortfolioHero from "@/components/sections/portfolio/PortfolioHero";
import PortfolioGrid from "@/components/sections/portfolio/PortfolioGrid";
import ContactCTA from "@/components/sections/ContactCTA";

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white">
            <PortfolioHero />
            <PortfolioGrid />
            <ContactCTA />
        </main>
    );
}
