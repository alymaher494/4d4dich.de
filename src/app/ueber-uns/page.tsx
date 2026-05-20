import { getPageBySlug, constructMetadata, getTestimonials } from "@/lib/wordpress";
import { Metadata } from "next";
import Hero from "./_components/Hero";
import Values from "./_components/Values";
import Difference from "./_components/Difference";
import ClientsMarquee from "@/components/sections/ClientsMarquee";
import TechStack from "@/components/sections/TechStack";
import ContactCTA from "@/components/sections/ContactCTA";
import Testimonials from "@/components/sections/Testimonials";

export async function generateMetadata(): Promise<Metadata> {
    const pageData = await getPageBySlug('ueber-uns');
    return constructMetadata(
        pageData,
        "Über uns | 4D Marketing & Design",
        "Erfahren Sie mehr über unsere Vision und unser Team.",
        "/ueber-uns"
    );
}

export default async function AboutPage() {
    const [pageData, testimonials] = await Promise.all([
        getPageBySlug('ueber-uns'),
        getTestimonials(10)
    ]);

    const acf = pageData?.acf || {};

    return (
        <main className="min-h-screen bg-white">
            <Hero initialData={pageData} />
            <Values acf={acf} title={acf.values_title} />
            <ClientsMarquee />
            <Difference acf={acf} />
            <TechStack />
            <Testimonials initialTestimonials={testimonials} title={acf.testimonials_title} />
            <ContactCTA />
        </main>
    );
}
