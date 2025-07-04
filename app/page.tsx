import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";

export default function Home() {
  return (
    <main>
      <Hero content={HeroContent} />
      <About content={AboutContent} />
      <Services content={ServiceContent} />
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

const ServiceContent = {
  mark: "Services",
  title: "Driving Growth Through Expert Solutions",
  image: { url: "/service.jpg", alt: "Service Image", width: 887, height: 797 },
  services: [
    {
      id: 1,
      title: "Strategic Advisory",
      paragraph:
        "We develop customized strategies that align with your business goals, enabling sustainable growth and market leadership.",
    },
    {
      id: 2,
      title: "Financial Optimization",
      paragraph:
        "Enhancing financial structures and investment strategies to maximize profitability and minimize risk exposure.",
    },
    {
      id: 3,
      title: "Technological Innovation",
      paragraph:
        "Implementing forward-thinking digital solutions to streamline operations, boost efficiency, and future-proof your business.",
    },
    {
      id: 4,
      title: "Comprehensive Risk Solutions",
      paragraph:
        "Proactively identifying and mitigating risks to protect your assets and maintain operational stability in an evolving market.",
    },
  ],
};
