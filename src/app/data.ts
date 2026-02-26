export type Section =
  | "About"
  | "Skills"
  | "Experience"
  | "Education"
  | "Publication";

export const NAV_SECTIONS: Section[] = [
  "About",
  "Skills",
  "Experience",
  "Education",
  "Publication",
];

export type Skill = string;
export type Experience = {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  tags: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
};

export type Publication = {
  title: string;
  venue: string;
  description: string;
  doi?: string;
};

export type ResumeData = {
  name: string;
  title: string;
  email: string;
  linkedin: string;
  location: string;
  summary: string;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  publications: Publication[];
  courses: string[];
};

export const resumeData: ResumeData = {
  name: "Konrad Wisowski",
  title: "Full-Stack Developer",
  email: "konrad.wisowski@gmail.com",
  linkedin: "linkedin.com/in/konrad-wisowski",
  location: "Kraków, Poland",
  summary:
    "Full-stack developer with 3+ years of professional experience delivering Angular and Node.js web applications in hybrid enterprise environments. Hands-on with TypeScript across the full stack, REST API design, asynchronous programming patterns, and NoSQL databases. Comfortable working with existing codebases — diagnosing issues, refactoring components, and improving maintainability. Dedicated advocate for web accessibility (WCAG 2.1/2.2) — spending significant time ensuring applications meet accessibility standards from the ground up. In my free time, I conduct accessibility audits of websites, helping organizations improve their digital inclusivity. PhD candidate combining analytical research skills with practical engineering.",
  skills: [
    "Angular",
    "TypeScript",
    "JavaScript",
    "Node.js / Express",
    "MongoDB (NoSQL)",
    "SCSS / CSS",
    "REST APIs & Async",
    "WCAG 2.1/2.2",
    "React",
    "HTML5",
  ],
  experience: [
    {
      title: "Frontend Developer",
      company: "Mednow",
      period: "Dec 2025 – Present",
      location: "Kraków (Hybrid)",
      description:
        "Building and maintaining Angular/TypeScript frontend features for a healthcare web platform. Implementing scalable component architecture and ensuring compliance with accessibility standards (WCAG 2.1/2.2).",
      tags: ["Angular", "TypeScript", "SCSS", "WCAG 2.1/2.2"],
    },
    {
      title: "Frontend Web Developer",
      company: "Comarch",
      period: "Mar 2025 – Dec 2025",
      location: "Kraków (Hybrid)",
      description:
        "Developed and maintained full-stack features using Angular on the frontend and Node.js on the backend. Participated in code reviews and contributed to architectural improvements within an enterprise-scale product.",
      tags: ["Angular", "TypeScript", "Node.js", "REST APIs"],
    },
    {
      title: "Junior Web Developer",
      company: "Comarch",
      period: "Oct 2022 – Mar 2025",
      location: "Kraków",
      description:
        "Full-stack web application development. Built Angular frontends and Node.js/Express backends, consumed and designed REST APIs, and worked with MongoDB for data persistence. Introduced and consistently applied WCAG accessibility standards across projects.",
      tags: ["Angular", "Node.js", "Express", "MongoDB", "WCAG"],
    },
    {
      title: "Web Development Intern",
      company: "Comarch",
      period: "Jul – Oct 2022",
      location: "Kraków",
      description:
        "Foundational experience in Angular, TypeScript, Node.js and MongoDB within a professional development environment.",
      tags: ["Angular", "TypeScript", "MongoDB"],
    },
    {
      title: "Lecturer Assistant",
      company: "Cracow University of Technology",
      period: "Oct 2024 – Sep 2025",
      location: "Kraków (Hybrid)",
      description:
        "Delivered lectures and practical classes in web development. Guided students through JavaScript, TypeScript, React, and MongoDB.",
      tags: ["JavaScript", "TypeScript", "React", "MongoDB", "Java"],
    },
    {
      title: "Automation Engineer",
      company: "Revolmatic sp. z o.o.",
      period: "Mar – Oct 2022",
      location: "Kraków",
      description:
        "Industrial automation engineering role prior to transitioning to web development.",
      tags: [],
    },
  ],
  education: [
    {
      degree: "PhD in Mechanical Engineering",
      school: "Cracow University of Technology",
      period: "2024 – 2028 (ongoing)",
    },
    {
      degree: "MSc in Automation & Robotics",
      school: "Cracow University of Technology",
      period: "2023 – 2024",
    },
    {
      degree: "BEng in Automation & Robotics",
      school: "Cracow University of Technology",
      period: "2019 – 2023",
    },
    {
      degree: "BEng in Safety Engineering",
      school: "Cracow University of Technology",
      period: "2018 – 2022",
    },
  ],
  publications: [
    {
      title:
        "WCAG 2.1/2.2: An Optimisation Technology for Digital Asset Lifecycle Management",
      venue: "Peer-reviewed research paper · Cracow University of Technology",
      description:
        "Demonstrates the application of accessibility standards as an engineering optimisation tool within digital asset lifecycle processes.",
    },
    {
      title:
        "Review of Deterministic and AI-Based Methods for Fluid Motion Modelling and Sloshing Analysis",
      venue: "Energies 2025, 18(5), 1263",
      description:
        "Comprehensive review of modern computational methods for analyzing fluid dynamics and sloshing phenomena in industrial applications.",
      doi: "10.3390/en18051263",
    },
    {
      title:
        "Modelling a fuzzy logic-based multiple-actuator hydraulic lifting and positioning system",
      venue: "Applied Sciences-Basel, 2025, vol. 15, nr 19",
      description:
        "Development of fuzzy logic control system for coordinated operation of multiple hydraulic actuators in precision positioning applications.",
      doi: "10.3390/app151910747",
    },
    {
      title:
        "Operational safety of pneumatic transport cushion in terms of substrate surface disturbances",
      venue:
        "Terotechnology XIII: 13th International Conference on Terotechnology, 2024",
      description:
        "Analysis of pneumatic transport cushion systems focusing on operational safety under various substrate surface conditions.",
      doi: "10.21741/9781644903315-32",
    },
  ],
  courses: [
    "Angular – Advanced Course. SPA Web Application Framework",
    "Applying WCAG (Web Content Accessibility Guidelines) in web development and adaptation",
  ],
};
