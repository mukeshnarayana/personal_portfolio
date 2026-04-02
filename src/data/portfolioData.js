export const portfolioData = {
  personal: {
    name: "Mukesh Narayana",
    lastName: "Pabolu",
    title: "Backend Developer",
    roles: [
      "Backend Developer",
      "Node.js Specialist",
      "API Architect",
      "Full Stack Enthusiast"
    ],
    tagline: "Scalable APIs, AI Integrations, and Production-Ready Cloud Architecture.",
    bio: "Backend Developer with 1 year of experience building scalable RESTful APIs and production-ready server-side applications using Node.js and MongoDB. Experienced in authentication systems (JWT, OAuth 2.0), multi-role access control, payment gateway integration, AI API integration, and AWS-based deployment. Hands-on exposure to production monitoring, performance optimization, and secure backend architecture. I love solving complex problems with modern technology and crafting architectures that scale.",
    photo: "https://ui-avatars.com/api/?name=Mukesh+Narayana&background=0A0F1E&color=00D4FF&size=256&font-size=0.33&bold=true",
    resume: "/resume.pdf",
    social: {
      github: "https://github.com/mukeshnarayana",
      linkedin: "#", // Add LinkedIn URL if required
      twitter: "#",
      email: "mailto:mukeshnarayanapabolu@gmail.com"
    }
  },
  education: [
    {
      institution: "R.M.D Engineering College, Chennai",
      degree: "B. Tech",
      field: "Computer Science And Engineering",
      from: "2020",
      to: "2024",
      cgpa: "8.8/10.0",
      location: "Chennai, India",
      logo: "" // Placeholder
    }
  ],
  experience: [
    {
      company: "TechPixe India",
      role: "Associate Developer",
      type: "Full-time",
      from: "Feb 2025",
      to: "Present",
      location: "Hyderabad / Remote",
      points: [
        "Architected and developed 50+ RESTful APIs using Node.js and Express.js across three production platforms covering vendor onboarding, property listings, product catalog, cart, order lifecycle, and end-to-end booking workflows.",
        "Engineered a concurrency-safe date-based booking engine with inventory tracking, booking state transitions (pending → confirmed → cancelled), and dynamic search filters supporting location-based and availability-driven property discovery.",
        "Implemented JWT-based authentication with Role-Based Access Control (RBAC) and OAuth 2.0 (Google Sign-In) to enforce access control across Admin, Vendor, and User roles with moderated content and vendor verification pipelines.",
        "Integrated Razorpay payment gateway with server-side transaction verification and booking synchronization, and automated transactional emails using Nodemailer.",
        "Optimized MongoDB schema design with targeted indexing strategies and aggregation pipelines for properties, inventory, orders, and bookings, significantly reducing query execution time.",
        "Integrated OpenAI APIs with advanced prompt engineering for plant identification and disease detection, built a real-time AI-powered chatbot, and managed cloud media storage via AWS S3."
      ],
      tech: ["Node.js", "Express.js", "MongoDB", "AWS S3", "Razorpay", "OpenAI", "JWT"]
    }
  ],
  projects: [
    {
      name: "Property Booking Engine",
      description: "A concurrency-safe date-based booking engine with inventory tracking and complex booking state workflows for properties.",
      category: "Backend",
      tech: ["Node.js", "MongoDB", "Express"],
      live: "#",
      github: "https://github.com/mukeshnarayana",
      image: "" // Placeholder
    },
    {
      name: "AI-Powered Plant Detector",
      description: "Integrated OpenAI APIs to scan, identify, and detect diseases in plants, wrapped in an easy-to-use API.",
      category: "AI",
      tech: ["Node.js", "OpenAI API", "AWS S3"],
      live: "#",
      github: "https://github.com/mukeshnarayana",
      image: "" // Placeholder
    },
    {
      name: "E-Commerce Gateway",
      description: "Multi-role vendor platform with carts, custom checkout, and tight Razorpay payment verification lifecycle.",
      category: "Full Stack",
      tech: ["Express", "MongoDB", "Razorpay"],
      live: "#",
      github: "https://github.com/mukeshnarayana",
      image: "" // Placeholder
    }
  ],
  achievements: [
    {
      title: "Oracle Cloud Infrastructure (OCI) AI Foundations Associate (1Z0-1122-25)",
      org: "Oracle",
      date: "Expected April 2026",
      category: "Certifications",
      description: "Candidate for Certification in OCI AI Foundations.",
      rank: "Candidate",
      cert: "#"
    },
    {
      title: "Certified in Google Cloud Career Readiness Associate Cloud Engineer",
      org: "Google Cloud Learning Services",
      date: "2024",
      category: "Certifications",
      description: "Showcasing proficiency in cloud technologies.",
      rank: "Certified",
      cert: "#"
    }
  ],
  skills: {
    frontend: ["React (Basics)", "HTML", "CSS", "TailwindCSS"],
    backend: ["Node.js", "Express.js", "GraphQL", "RESTful APIs", "JWT", "OAuth 2.0"],
    database: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Redis"],
    devops: ["AWS S3", "Docker (Basics)", "VPS Deployment", "Linux", "CI/CD Basics"],
    tools: ["Git", "GitHub", "Jest", "Supertest", "Postman", "Swagger"],
    languages: ["JavaScript", "SQL", "YAML"]
  },
  contact: {
    email: "mukeshpabolu123@gmail.com",
    phone: "+91 8374831031",
    location: "Hyderabad, India",
    availability: true
  }
};
``