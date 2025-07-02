import Hero from "./components/hero";
import About from "./components/about";

export default function Home() {
  return (
    <main>
      <Hero content={HeroContent} />
      <About content={AboutContent} />
    </main>
  );
}

// Contents
const HeroContent = {
  title: "Your Trusted Partner for Strategic Growth",
  paragraph:
    "Every business is unique—your growth journey should be too. We provide tailored analyses, strategic insights, and actionable solutions to build sustainable success together.",
  image: {
    url: "/hero.jpg",
    alt: "Your Trusted Partner for Strategic Growth Image",
    width: 1280,
    height: 1920,
  },
};

const AboutContent = {
  title:
    "Empowering Businesses with Strategic Vision, Tailored Solutions, and a Decade of Proven Expertise.",
  image: { url: "/about.jpg", alt: "About Image", width: 1280, height: 853 },
  stats: [
    {
      id: 1,
      name: "Client Satisfaction Rate",
      value: "95%",
    },
    {
      id: 2,
      name: "Years of Innovation and Insight",
      value: "10+",
    },
    {
      id: 3,
      name: "Users Empowered Worldwide",
      value: "50M+",
    },
    {
      id: 4,
      name: "Evolved with Our Solutions",
      value: "120+",
    },
  ],
};
