
import InternalPageHero from "@/components/ui/InternalPageHero";
import ContactDetails from "@/components/sections/contact/ContactDetails";
import ContactForm from "@/components/forms/ContactForm";
import FAQSection from "@/components/sections/FAQSection";

export default function KontaktPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <InternalPageHero
                badge="Get in Touch"
                title="Sprechen wir"
                highlight="über Erfolg."
                description="Sie haben eine Vision? Wir haben die Expertise. Lassen Sie uns gemeinsam etwas Besonderes schaffen."
                marqueeText={["CONTACT", "SUPPORT", "START", "NOW"]}
            />

            <section className="section-padding -mt-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <ContactDetails />
                    <ContactForm />
                </div>
            </section>

            <FAQSection />
        </div>
    );
}
