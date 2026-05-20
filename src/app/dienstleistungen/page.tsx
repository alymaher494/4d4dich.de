import { getPageBySlug, getChildPages } from "@/lib/wordpress";
import Hero from "./_components/Hero";
import List from "./_components/List";
import ClientsMarquee from "@/components/sections/ClientsMarquee";
import ContactCTA from "@/components/sections/ContactCTA";

export default async function ServicesPage() {
    const parentPage = await getPageBySlug('dienstleistungen');
    const childServices = parentPage ? await getChildPages(parentPage.id) : [];

    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <List dynamicServices={childServices} />
            <ClientsMarquee />
            <ContactCTA />
        </main>
    );
}
