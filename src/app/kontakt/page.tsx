
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactDetails from "@/components/sections/contact/ContactDetails";
import ContactForm from "@/components/forms/ContactForm";
import FAQSection from "@/components/sections/FAQSection";

export default function KontaktPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            <ContactHero />

            <section className="section-padding -mt-20 relative z-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <ContactDetails />
                        <ContactForm />
                    </div>
                </div>
            </section>

            <FAQSection />
        </div>
    );
}
