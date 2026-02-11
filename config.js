import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import {
  HiCode,
  HiCube,
  HiDatabase,
  HiMail,
  HiBriefcase,
  HiSparkles
} from "react-icons/hi";


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
    description: "APIs, microservices, and high-scale backend systems",
    bgClass: "bg-blue-500/10",
    iconClass: "text-blue-500",
    skills: [
      { name: "Python", level: "Expert", hot: true },
      { name: "FastAPI", level: "Advanced", hot: true },
      { name: "Django & DRF", level: "Advanced" },
      { name: "Flask", level: "Advanced" },
      { name: "REST APIs", level: "Advanced", hot: true },
      { name: "Asynchronous Processing", level: "Advanced" },
      { name: "Microservices Architecture", level: "Advanced", hot: true },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" }
    ]
  },
  {
    title: "AI, ML & Data",
    icon: <HiDatabase />,
    description: "Machine learning, data validation, and analytics workflows",
    bgClass: "bg-emerald-500/10",
    iconClass: "text-emerald-500",
    skills: [
      { name: "TensorFlow", level: "Advanced" },
      { name: "PyTorch", level: "Advanced", hot: true },
      { name: "Scikit-Learn", level: "Advanced" },
      { name: "Pandas & NumPy", level: "Advanced" },
      { name: "Data Validation Pipelines", level: "Advanced" },
      { name: "Event-Driven Processing (Kafka)", level: "Advanced", hot: true }
    ]
  },
  {
    title: "Cloud, DevOps & Security",
    icon: <HiCube />,
    description: "Cloud-native systems, CI/CD, and enterprise security",
    bgClass: "bg-orange-500/10",
    iconClass: "text-orange-500",
    skills: [
      { name: "AWS (EC2, RDS, S3, IAM, CloudWatch)", level: "Advanced", hot: true },
      { name: "Docker", level: "Advanced", hot: true },
      { name: "Kubernetes", level: "Advanced" },
      { name: "CI/CD (GitLab, Jenkins)", level: "Advanced" },
      { name: "OAuth2, JWT, RBAC, MFA", level: "Advanced", hot: true },
      { name: "Nginx", level: "Advanced" },
      { name: "Linux", level: "Advanced" },
      { name: "Monitoring & Production Support", level: "Advanced" }
    ]
  },
  {
    title: "Frontend & UX",
    icon: <HiSparkles />,
    description: "Enterprise UI development and user experience",
    bgClass: "bg-purple-500/10",
    iconClass: "text-purple-500",
    skills: [
      { name: "Angular", level: "Advanced", hot: true },
      { name: "TypeScript", level: "Advanced" },
      { name: "React", level: "Advanced" },
      { name: "HTML5 / CSS3 / Bootstrap", level: "Advanced" },
      { name: "Role-Based UI & Accessibility", level: "Advanced" }
    ]
  }
]
,

    experiences: [
        {
    position: "Senior Python Developer",
    company: "Delta Dental Insurance",
    period: "Mar 2024 - Present",
    location: "Los Angeles, CA, USA",
    description: "Working on enterprise-scale healthcare insurance platforms, leading the development of secure, cloud-native, microservices-based systems to support member management, claims processing, and provider-facing applications with high availability and regulatory compliance.",
    responsibilities: [
        "Designed and developed Angular-based user interfaces with responsive design, role-based behavior, and strong UI/UX consistency for insurance operations platforms",
        "Designed and developed backend services using Python and FastAPI to implement core business logic for eligibility, claims, and member workflows",
        "Built secure, versioned RESTful APIs with request validation, structured error handling, centralized logging, and asynchronous processing for high-concurrency services",
        "Designed and optimized PostgreSQL database schemas to ensure ACID-compliant transactions, data integrity, and performance at scale",
        "Built and managed scalable AWS infrastructure using EC2, RDS, S3, IAM, and CloudWatch to support highly available cloud-native applications",
        "Containerized services using Docker, orchestrated deployments with Kubernetes, and automated CI/CD pipelines to enable reliable, zero-downtime releases"
    ],
    technologies: [
        "Python",
        "FastAPI",
        "Angular",
        "TypeScript",
        "PostgreSQL",
        "Apache Kafka",
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD Pipelines",
        "OAuth2",
        "JWT",
        "RBAC",
        "MFA",
        "REST APIs",
        "OpenAPI / Swagger",
        "Microservices Architecture"
    ]
}
,
        {
    position: "Python Developer",
    company: "First Citizens Bank",
    period: "Oct 2021 - Feb 2024",
    location: "Los Angeles, CA, USA",
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
