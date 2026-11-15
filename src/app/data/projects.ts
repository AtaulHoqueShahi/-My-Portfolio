export type Project = {
  slug: string;
  name: string;
  status: string;
  image: string;
  summary: string;
  description: string;
  stack: string[];
  live: string;
  github: string;
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "bazardor",
    name: "BazarDor",
    status: "Completed project",
    image: "/projects/bazardor.svg",
    summary: "A Bangla-focused product price browsing experience for exploring everyday market prices.",
    description:
      "BazarDor is a market-price browsing website that helps visitors explore everyday products and their price information through a Bangla-friendly interface. The project includes product categories and API-powered product information.",
    stack: ["Next.js", "React", "TypeScript", "REST API", "Tailwind CSS"],
    live: "https://assignment-7in-ph.vercel.app/",
    github: "https://github.com/AtaulHoqueShahi/B14-A7-Bazar-Dor",
    challenges: [
      "Integrating product and category API responses into the interface.",
      "Organizing product categories and presenting Bangla content clearly.",
      "Building responsive layouts and handling loading and data states.",
    ],
    improvements: [
      "Improve product filtering and search.",
      "Refine accessibility and small-screen interactions.",
      "Add more useful product and market information.",
    ],
  },
  {
    slug: "fit-log",
    name: "Fit Log",
    status: "Completed project",
    image: "/projects/fit-log.svg",
    summary: "A workout-focused web application for presenting fitness activities in a clear interface.",
    description:
      "Fit Log is a workout-focused web application designed to present fitness activities and workout information in a clear, organized interface. The project focuses on reusable UI sections and responsive presentation.",
    stack: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    live: "https://my-assignment-6-in-ph.vercel.app/",
    github: "https://github.com/AtaulHoqueShahi/-my-assignment-6-in-PH",
    challenges: [
      "Building reusable interface sections.",
      "Maintaining consistent responsive layouts.",
      "Organizing the application structure and page components.",
    ],
    improvements: [
      "Add richer workout tracking features.",
      "Improve user personalization.",
      "Refine the dashboard experience.",
    ],
  },
  {
    slug: "dev-stack-builder",
    name: "Dev Stack Builder",
    status: "Completed project",
    image: "/projects/dev-stack-builder.svg",
    summary: "A technology discovery experience for exploring tools and building a development stack.",
    description:
      "Dev Stack Builder is a web application that presents development technologies in an organized way, helping users explore tools and shape a technology stack that fits their interests.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Toastify"],
    live: "https://heroic-lamington-c53031.netlify.app/",
    github: "https://github.com/AtaulHoqueShahi/assignment-5--PH",
    challenges: [
      "Structuring technology information from JSON data.",
      "Creating a clear and responsive technology browsing experience.",
      "Providing useful feedback for user interactions with toast notifications.",
    ],
    improvements: [
      "Add more technology categories and richer descriptions.",
      "Improve stack customization and sharing.",
      "Continue refining accessibility and responsive behavior.",
    ],
  },
];
