import HomeHero from "@/components/sections/home/HomeHero";
import HomeAbout from "@/components/sections/home/HomeAbout";
import HomeServices from "@/components/sections/home/HomeServices";
import HomePlatforms from "@/components/sections/home/HomePlatforms";
import HomePortfolio from "@/components/sections/home/HomePortfolio";
import HomeSectors from "@/components/sections/home/HomeSectors";
import HomeTeam from "@/components/sections/home/HomeTeam";
import ServicesMarquee from "@/components/sections/ServicesMarquee";

import ClientsMarquee from "@/components/sections/ClientsMarquee";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomePlatforms />
      <HomePortfolio />
      <ClientsMarquee />
      <HomeSectors />
      <HomeTeam />
      <ServicesMarquee />
      <ContactCTA />
    </>
  );
}
