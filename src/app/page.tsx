import HomeHero from "@/components/sections/home/HomeHero";
import HomeAbout from "@/components/sections/home/HomeAbout";
import ServicesGrid from "@/components/sections/ServicesGrid";
import HomePlatforms from "@/components/sections/home/HomePlatforms";
import HomePortfolio from "@/components/sections/home/HomePortfolio";
import HomeSectors from "@/components/sections/home/HomeSectors";
import HomeTeam from "@/components/sections/home/HomeTeam";
import ServicesMarquee from "@/components/sections/ServicesMarquee";

import ClientsMarquee from "@/components/sections/ClientsMarquee";
import ContactCTA from "@/components/sections/ContactCTA";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <ServicesGrid />
      <HomePlatforms />
      <HomePortfolio />
      <ClientsMarquee />
      <HomeSectors />
      <HomeTeam />
      <Testimonials />
      <ServicesMarquee />
      <ContactCTA />
    </>
  );
}
