import { getPortfolioProjects, getTestimonials, getClients, getTeamMembers, getPageBySlug } from "@/lib/wordpress";
import { Metadata } from "next";
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
import Testimonials from "@/components/sections/Testimonials";

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('home');
  return {
    title: pageData?.acf?.seo_title || "4D Marketing & Design | Premium Agency",
    description: pageData?.acf?.seo_description || "Wir transformieren Marken durch exzellentes Design و datengetriebenes Marketing.",
  };
}

export default async function Home() {
  // Fetch dynamic data from WordPress
  const [projects, testimonials, clients, team] = await Promise.all([
    getPortfolioProjects(3),  // Featured projects
    getTestimonials(10),      // All testimonials
    getClients(50),           // All clients
    getTeamMembers(10),       // Team members
  ]);

  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomePlatforms />
      <HomePortfolio initialProjects={projects} />
      <ClientsMarquee initialClients={clients} />
      <HomeSectors />
      <HomeTeam initialTeam={team} />
      <Testimonials initialTestimonials={testimonials} />
      <ServicesMarquee />
      <ContactCTA />
    </>
  );
}
