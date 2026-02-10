import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Surya Teja",
    },
    social: {
        github: "asuryateja",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: false, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "AI-Powered Code Review Assistant",
            description: "An intelligent code review platform that uses machine learning to analyze pull requests, detect bugs, suggest optimizations, and enforce coding standards. Features real-time collaboration, automated testing integration, and comprehensive security scanning.",
            image: "/projects/project-1.webp",
            technologies: ["Python", "TensorFlow", "React", "FastAPI", "PostgreSQL", "Docker"],
            github: "#",
            demo: "#"
        },
        {
            id: 2,
            title: "Real-time Collaborative Whiteboard",
            description: "A next-generation collaborative whiteboard platform with infinite canvas, real-time synchronization, and advanced drawing tools. Supports video conferencing, screen sharing, and export to multiple formats. Built for remote teams and educators.",
            image: "/projects/project-2.webp",
            technologies: ["TypeScript", "WebRTC", "Socket.io", "Canvas API", "Node.js", "Redis"],
            github: "#",
            demo: "#"
        },
        {
            id: 3,
            title: "Blockchain Voting System",
            description: "A secure, transparent, and decentralized voting platform built on Ethereum. Features smart contract-based voting, anonymous ballots, real-time result tracking, and immutable audit trails. Ensures election integrity through cryptographic verification.",
            image: "/projects/project-3.webp",
            technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS", "MetaMask"],
            github: "#",
            demo: "#"
        },
        {
            id: 4,
            title: "Cloud Infrastructure Dashboard",
            description: "A comprehensive cloud management platform for monitoring, managing, and optimizing multi-cloud infrastructure. Features real-time metrics, cost analysis, automated scaling, and security compliance monitoring across AWS, Azure, and GCP.",
            image: "/projects/project-4.webp",
            technologies: ["Go", "Kubernetes", "Grafana", "Prometheus", "Terraform", "React"],
            github: "#",
            demo: "#"
        },
        {
            id: 5,
            title: "Neural Network Visualizer",
            description: "An interactive web application for visualizing, training, and experimenting with neural networks. Features drag-and-drop architecture builder, real-time training visualization, model comparison tools, and export capabilities for production deployment.",
            image: "/projects/project-5.webp",
            technologies: ["Python", "TensorFlow.js", "D3.js", "Next.js", "WebGL", "TypeScript"],
            github: "#",
            demo: "#"
        }
 
    ],
   skills: [
  {
    title: "Python & Backend",
    icon: <HiCode />,
    description: "APIs, services, and scalable systems",
    bgClass: "bg-blue-500/10",
    iconClass: "text-blue-500",
    skills: [
      { name: "Python", level: "Expert", hot: true },
      { name: "FastAPI", level: "Advanced", hot: true },
      { name: "REST APIs", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" }
    ]
  },
  {
    title: "AI, ML & GenAI",
    icon: <HiDatabase />,
    description: "Machine learning & LLM-powered systems",
    bgClass: "bg-emerald-500/10",
    iconClass: "text-emerald-500",
    skills: [
      { name: "PyTorch", level: "Advanced", hot: true },
      { name: "LLMs / GenAI", level: "Advanced", hot: true },
      { name: "RAG Systems", level: "Advanced" },
      { name: "AI Agents (LangChain, LangGraph)", level: "Advanced", hot: true },
      { name: "Vector Databases (FAISS, ChromaDB)", level: "Intermediate" }
    ]
  },
  {
    title: "MLOps, Cloud & Tools",
    icon: <HiCube />,
    description: "Deployment, experimentation, and productivity",
    bgClass: "bg-orange-500/10",
    iconClass: "text-orange-500",
    skills: [
      { name: "AWS", level: "Advanced", hot: true },
      { name: "Docker", level: "Advanced" },
      { name: "MLflow", level: "Advanced" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Linux", level: "Advanced" }
    ]
  }
],

    experiences: [
        {
            position: "Frontend Developer",
            company: "SelectSkillSet",
            period: "2024 - Present",
            location: "Remote",
            description: "Developing modern, responsive frontend applications with focus on user experience and performance. Working with cutting-edge technologies to build scalable web solutions.",
            responsibilities: [
                "Building responsive and interactive user interfaces using React and Next.js",
                "Implementing modern UI/UX designs with TailwindCSS and Framer Motion",
                "Optimizing application performance and ensuring cross-browser compatibility",
                "Collaborating with design and backend teams to deliver high-quality features"
            ],
            technologies: ["React", "Next.js", "TailwindCSS", "JavaScript", "Framer Motion", "TypeScript"]
        },
        {
            position: "Full Stack Developer",
            company: "Tekisky",
            period: "2023 - 2024",
            location: "Remote",
            description: "Developed and maintained full-stack web applications, working on both frontend and backend systems. Collaborated with cross-functional teams to deliver robust software solutions.",
            responsibilities: [
                "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
                "Implemented RESTful APIs and integrated third-party services",
                "Built responsive user interfaces and optimized application performance",
                "Worked on database design and backend architecture"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "MERN Stack"]
        },
        {
            position: "Frontend Developer",
            company: "SelectSkillSet",
            period: "2024 - Present",
            location: "Remote",
            description: "Developing modern, responsive frontend applications with focus on user experience and performance. Working with cutting-edge technologies to build scalable web solutions.",
            responsibilities: [
                "Building responsive and interactive user interfaces using React and Next.js",
                "Implementing modern UI/UX designs with TailwindCSS and Framer Motion",
                "Optimizing application performance and ensuring cross-browser compatibility",
                "Collaborating with design and backend teams to deliver high-quality features"
            ],
            technologies: ["React", "Next.js", "TailwindCSS", "JavaScript", "Framer Motion", "TypeScript"]
        },
        {
            position: "Full Stack Developer",
            company: "Tekisky",
            period: "2023 - 2024",
            location: "Remote",
            description: "Developed and maintained full-stack web applications, working on both frontend and backend systems. Collaborated with cross-functional teams to deliver robust software solutions.",
            responsibilities: [
                "Developed and maintained full-stack web applications using React, Node.js, and MongoDB",
                "Implemented RESTful APIs and integrated third-party services",
                "Built responsive user interfaces and optimized application performance",
                "Worked on database design and backend architecture"
            ],
            technologies: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "MERN Stack"]
        }
    ],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@asuryateja",
            link: `https://github.com/asuryateja`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "asuryateja14@gmail.com",
            link: "mailto:asuryateja14@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "USA",
            link: null
        }
    ]
}
