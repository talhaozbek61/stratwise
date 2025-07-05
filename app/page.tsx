import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Blog from "./components/blog";

export default function Home() {
  return (
    <main>
      <Hero content={HeroContent} />
      <About content={AboutContent} />
      <Services content={ServiceContent} />
      <Portfolio content={PortfolioContent} />
      <Blog content={BlogContent} />
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

const PortfolioContent = {
  mark: "Portfolio",
  title: "Real Outcomes, Strategic Impact",
  caseStudies: [
    {
      id: 1,
      title: "Process Optimization",
      image: {
        url: "/case-1.jpg",
        alt: "About Image",
        width: 1024,
        height: 683,
      },
      description:
        "Optimized core business processes, resulting in a 30% increase in overall operational performance.",
    },
    {
      id: 2,
      title: "Cost Reduction Strategy",
      image: {
        url: "/case-2.jpg",
        alt: "About Image",
        width: 1024,
        height: 683,
      },
      description:
        "Executed a financial restructuring plan that reduced annual costs by over $1M for a leading construction firm.",
    },
    {
      id: 3,
      title: "CRM Implementation",
      image: {
        url: "/case-3.jpg",
        alt: "About Image",
        width: 1024,
        height: 683,
      },
      description:
        "Integrated a custom CRM system that significantly improved client engagement and loyalty.",
    },
    {
      id: 4,
      title: "Response Acceleration",
      image: {
        url: "/case-4.jpg",
        alt: "About Image",
        width: 1024,
        height: 683,
      },
      description:
        "Developed a rapid response communication protocol, cutting emergency response times by 40%.",
    },
  ],
};

const BlogContent = {
  mark: "Blog and articles",
  title: "Thought Leadership & Industry Perspectives",
  blogPosts: [
    {
      id: 1,
      type: "Insight",
      title: "Adapting Strategy in a Shifting Market",
      description:
        "Explore how businesses can pivot their strategy to stay competitive in rapidly changing market conditions.",
      image: {
        url: "/blog-1.jpg",
        alt: "About Image",
        width: 1024,
        height: 683,
      },
    },
    {
      id: 2,
      type: "News",
      title: "Maximizing Your Marketing ROI",
      description:
        "Discover actionable methods to improve the return on your marketing investments with data-driven tactics.",
      image: {
        url: "/blog-2.jpg",
        alt: "About Image",
        width: 1024,
        height: 683,
      },
    },
    {
      id: 3,
      type: "Guide",
      title: "Building Financial Resilience",
      description:
        "Learn practical steps to strengthen your financial foundation and navigate economic uncertainty.",
      image: {
        url: "/blog-3.jpg",
        alt: "About Image",
        width: 1024,
        height: 683,
      },
    },
    {
      id: 4,
      type: "Insight",
      title: "Technology Trends That Drive Business Growth",
      description:
        "Stay ahead with emerging technologies that streamline operations and create competitive advantages.",
      image: {
        url: "/blog-4.jpg",
        alt: "About Image",
        width: 1024,
        height: 683,
      },
    },
    {
      id: 5,
      type: "Report",
      title: "Improving Client Retention Rates",
      description:
        "Understand key drivers of customer loyalty and how to build long-term, profitable relationships.",
      image: {
        url: "/blog-5.jpg",
        alt: "About Image",
        width: 1024,
        height: 683,
      },
    },
    {
      id: 6,
      type: "News",
      title: "Leadership in Times of Change",
      description:
        "Explore how adaptive leadership can empower teams and sustain performance during transitional periods.",
      image: {
        url: "/blog-6.jpg",
        alt: "About Image",
        width: 1024,
        height: 683,
      },
    },
  ],
};
