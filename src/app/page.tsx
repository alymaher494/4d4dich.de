import { getPortfolioProjects, getTestimonials, getClients, getTeamMembers, getPageBySlug, constructMetadata } from "@/lib/wordpress";
import { Metadata } from "next";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeAbout from "@/components/sections/home/HomeAbout";
import dynamic from "next/dynamic";
import { getGlobalOptions, getGoogleReviews } from "@/lib/wordpress";

// Lazy-load sections below the fold
const HomeServices = dynamic(() => import("@/components/sections/home/HomeServices"));
const HomePlatforms = dynamic(() => import("@/components/sections/home/HomePlatforms"));
const HomePortfolio = dynamic(() => import("@/components/sections/home/HomePortfolio"));
const HomeSectors = dynamic(() => import("@/components/sections/home/HomeSectors"));
const HomeTeam = dynamic(() => import("@/components/sections/home/HomeTeam"));
const ServicesMarquee = dynamic(() => import("@/components/sections/ServicesMarquee"));
const ClientsMarquee = dynamic(() => import("@/components/sections/ClientsMarquee"));
const ContactCTA = dynamic(() => import("@/components/sections/ContactCTA"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPageBySlug('home');
  return constructMetadata(
    pageData,
    "4D Marketing & Design | Premium Agency & Druckerei Rodgau",
    "Wir transformieren Marken durch exzellentes Design und datengetriebenes Marketing. Ihre Full-Service Agentur in Rodgau.",
    "/"
  );
}

export default async function Home() {
  // 1. Fetch basic WP data
  const [projects, testimonials, clients, team, pageData, global] = await Promise.all([
    getPortfolioProjects(3),
    getTestimonials(10),
    getClients(50),
    getTeamMembers(10),
    getPageBySlug('home'),
    getGlobalOptions(),
  ]);

  // 2. Fetch Google Reviews if Place ID & API Key are available
  const googleReviews = (global?.google_place_id && global?.google_api_key)
    ? await getGoogleReviews(global.google_place_id, global.google_api_key)
    : [];

  const acf = pageData?.acf || {};

  // Define potential sections with their visibility and order
  const sectionMapping = [
    {
      id: 'hero',
      show: acf.home_hero_show !== false,
      order: Number(acf.home_hero_order) || 10,
      component: <HomeHero key="hero" slides={acf.hero_slides} />
    },
    {
      id: 'about',
      show: acf.home_about_show !== false,
      order: Number(acf.home_about_order) || 20,
      component: (
        <HomeAbout
          key="about"
          badge={acf.about_badge}
          title={acf.about_title}
          description={acf.about_description}
          metrics={acf.about_metrics}
          image1={acf.about_image_1}
          image2={acf.about_image_2}
        />
      )
    },
    {
      id: 'services',
      show: acf.home_services_show !== false,
      order: Number(acf.home_services_order) || 30,
      component: (
        <div key="serv-stack">
          <HomeServices title={acf.services_title} description={acf.services_desc} />
          <HomePlatforms />
        </div>
      )
    },
    {
      id: 'sectors',
      show: acf.home_sectors_show !== false,
      order: Number(acf.home_sectors_order) || 40,
      component: <HomeSectors key="sectors" title={acf.sectors_title} />
    },
    {
      id: 'portfolio',
      show: acf.home_portfolio_show !== false,
      order: Number(acf.home_portfolio_order) || 50,
      component: (
        <div key="port-stack">
          <HomePortfolio initialProjects={projects} title={acf.portfolio_title} />
          <ClientsMarquee initialClients={clients} />
        </div>
      )
    },
    {
      id: 'testimonials',
      show: acf.home_testimonials_show !== false,
      order: Number(acf.home_testimonials_order) || 70,
      component: (
        <div key="test-stack">
          <HomeTeam initialTeam={team} />
          <Testimonials
            initialTestimonials={testimonials}
            googleReviews={googleReviews}
            title={acf.testimonials_title}
          />
        </div>
      )
    },
    {
      id: 'cta',
      show: acf.home_cta_show !== false,
      order: Number(acf.home_cta_order) || 90,
      component: (
        <div key="cta-stack">
          <ServicesMarquee />
          <ContactCTA />
        </div>
      )
    }
  ];

  // Filter by shown and Sort by order
  const activeSections = sectionMapping
    .filter(s => s.show)
    .sort((a, b) => a.order - b.order);

  return (
    <>
      <div className="flex flex-col">
        {activeSections.map(s => s.component)}
      </div>

      {/* Fallback for components not in mapping if needed, or keeping it clean */}
      {sectionMapping.every(s => !s.show) && (
        <div className="py-20 text-center text-slate-400">
          No sections enabled in WordPress.
        </div>
      )}
    </>
  );
}
