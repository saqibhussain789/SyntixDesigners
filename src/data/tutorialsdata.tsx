import HTMLTutorial from "../tutorials/HTML";
import CSSTutorial from "../tutorials/CSS";
import JavaScriptTutorial from "../tutorials/JS";
import HTMLImage from "../assets/HTML.jpg";
import CSSImage from "../assets/CSS.jpg";
import JSImage from "../assets/JS.jpg";

export const tutorialsData = [
  {
    id: 1,
    title: "HTML",
    description: "Learn how to structure web pages with HTML.",
    image: HTMLImage,
    details: <HTMLTutorial />,
  },
  {
    id: 2,
    title: "CSS",
    description: "Master CSS for designing stunning websites.",
    image: CSSImage,
    details: <CSSTutorial />,
  },
  {
    id: 3,
    title: "JavaScript",
    description: "Build interactive web pages with JavaScript.",
    image: JSImage,
    details: <JavaScriptTutorial />,
  },
  {
    id: 4,
    title: "React",
    description: "Create dynamic UIs with React.",
    image: HTMLImage,
    link: "#react",
    details:
      "React is a JavaScript library for building user interfaces. Learn how to create reusable components, manage state, and handle events to build powerful web applications.",
  },
  {
    id: 5,
    title: "Node.js",
    description: "Learn backend development with Node.js.",
    image: CSSImage,
    link: "#nodejs",
    details:
      "Node.js is a JavaScript runtime that allows you to build scalable server-side applications. In this tutorial, you'll learn how to create server-side APIs, manage databases, and handle HTTP requests.",
  },
  {
    id: 6,
    title: "TypeScript",
    description: "Enhance JavaScript with TypeScript.",
    image: JSImage,
    link: "#typescript",
    details:
      "TypeScript is a typed superset of JavaScript that enhances code quality and scalability. You'll learn about types, interfaces, and advanced features to write robust applications.",
  },
  {
    id: 7,
    title: "Next.js",
    description: "Build server-rendered apps with Next.js.",
    image: HTMLImage,
    link: "#nextjs",
    details:
      "Next.js is a React framework for building server-rendered and static web applications. Learn about features like file-based routing, API routes, and server-side rendering.",
  },
  {
    id: 8,
    title: "Tailwind CSS",
    description: "Style effortlessly with Tailwind CSS.",
    image: CSSImage,
    link: "#tailwind",
    details:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs. Learn how to use its classes to style components directly in your HTML or JSX.",
  },
  {
    id: 9,
    title: "Git & GitHub",
    description: "Manage code and collaborate using Git & GitHub.",
    image: HTMLImage,
    link: "#git",
    details:
      "Git is a version control system for tracking code changes, and GitHub is a platform for collaborative development. Learn the basics of version control, branching, and collaboration workflows.",
  },
];
