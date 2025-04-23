import Hero from "./components/hero";

export default function Home() {
  return (
    <main>
      <Hero content={HeroContent} />
    </main>
  );
}

// Contents
const HeroContent = {
  title: "Your Trusted Partner for Strategic Growth",
  paragraph:
    "Every business is unique—your growth journey should be too. We provide tailored analyses, strategic insights, and actionable solutions to build sustainable success together.",
  imageURL: "/hero.jpg",
};
