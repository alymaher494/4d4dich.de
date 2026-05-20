import InternalPageHero from "@/components/ui/InternalPageHero";
import { WPPage } from "@/lib/wordpress";

interface AboutHeroProps {
    initialData?: WPPage | null;
}

export default function AboutHero({ initialData }: AboutHeroProps) {
    const acf = initialData?.acf || {};

    return (
        <InternalPageHero
            badge="Über Uns"
            title={acf.hero_title || "4D Für Dich ist"}
            highlight={acf.hero_highlight || "mehr als eine Agentur."}
            description={acf.hero_description || "Wir sind Ihr Partner für ganzheitliche Lösungen. Von der ersten Idee bis zum fertigen Produkt – Design, Druck und digitales Marketing aus einer Hand."}
            marqueeText={["ABOUT US", "TEAM", "VISION", "VALUES"]}
        />
    );
}
