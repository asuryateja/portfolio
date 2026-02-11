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
    position: "Python Developer",
    company: "First Citizens Bank",
    period: "Oct 2021 - Feb 2024",
    location: "Los Angeles, USA",
    description: "Worked on enterprise-scale digital banking platforms, designing cloud-native, microservices-based backend systems to support secure, real-time financial transactions with high availability, scalability, and regulatory compliance.",
    responsibilities: [
        "Led backend architecture and development using Python and FastAPI, building high-performance asynchronous services for real-time, high-concurrency financial workloads",
        "Designed and implemented secure, versioned RESTful APIs with strong validation, centralized logging, and structured error handling for enterprise integrations",
        "Engineered and optimized PostgreSQL database schemas to ensure ACID-compliant transactions and high-performance processing for financial systems",
        "Designed event-driven microservices architectures using Apache Kafka to support transaction notifications, fraud detection, and reconciliation workflows",
        "Built and managed scalable AWS cloud infrastructure using EC2, RDS, S3, API Gateway, IAM, and CloudWatch to ensure reliability and fault tolerance",
        "Containerized services with Docker and orchestrated deployments using Kubernetes and GitLab CI/CD to enable automated, zero-downtime releases"
    ],
    technologies: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Apache Kafka",
        "AWS",
        "Docker",
        "Kubernetes",
        "GitLab CI/CD",
        "OAuth2",
        "JWT",
        "RBAC",
        "REST APIs",
        "OpenAPI / Swagger",
        "Microservices Architecture"
    ]
},
        {
    position: "Python Developer",
    company: "HomeGoods",
    period: "Jan 2020 - Sep 2021",
    location: "Framingham, MA, USA",
    description: "Designed and enhanced retail and inventory management platforms supporting order tracking and store-level operations, focusing on scalability, performance, and high availability during peak retail traffic.",
    responsibilities: [
        "Designed and developed responsive, user-friendly interfaces using HTML5, CSS3, and Bootstrap for internal retail and inventory management workflows",
        "Enhanced backend reliability by implementing structured error handling, request validation, and logging to stabilize high-traffic order and inventory workflows",
        "Developed backend services using Flask to support order tracking, inventory synchronization, and store-level operations",
        "Designed and implemented scalable RESTful APIs to integrate store systems, warehouses, and external logistics providers",
        "Modeled and optimized MongoDB data schemas to improve data consistency, performance, and availability across retail locations",
        "Deployed and containerized applications on AWS using Docker and Nginx to ensure scalable, reliable, and production-ready deployments"
    ],
    technologies: [
        "Python",
        "Flask",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "MongoDB",
        "AWS",
        "Docker",
        "Nginx",
        "REST APIs",
        "Postman",
        "Microservices Architecture"
    ]
},
        {
    position: "Python Developer",
    company: "Pramati Technology Pvt Ltd",
    period: "Jul 2018 - Dec 2019",
    location: "Hyderabad, India",
    description: "Designed and developed scalable backend services for customer onboarding and profile management systems, focusing on secure RESTful APIs, data-driven workflows, and cloud-integrated solutions while following enterprise engineering standards.",
    responsibilities: [
        "Designed, developed, and optimized backend services using Python, Django, and Django REST Framework for customer onboarding and profile management workflows",
        "Built and maintained secure RESTful APIs with robust input validation and documentation using Swagger and Postman",
        "Implemented JWT-based authentication and role-based access control (RBAC) to protect sensitive customer data",
        "Designed and optimized MySQL database schemas to improve query performance, data integrity, and transactional consistency",
        "Integrated AWS S3 for secure document storage and retrieval in onboarding workflows",
        "Supported machine learning–based validation workflows using TensorFlow and Scikit-Learn to improve data quality",
        "Collaborated with senior engineers, QA teams, and business stakeholders to deliver secure, production-ready features"
    ],
    technologies: [
        "Python",
        "Django",
        "Django REST Framework",
        "MySQL",
        "AWS S3",
        "Docker",
        "Jenkins",
        "GitLab CI/CD",
        "JWT",
        "RBAC",
        "REST APIs",
        "Swagger",
        "TensorFlow",
        "Scikit-Learn"
    ]
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
