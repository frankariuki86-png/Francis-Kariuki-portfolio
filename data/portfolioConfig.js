export const profileImage = "/images/portrait_photo_compatible-1.svg"

export const projectImages = {
  bluepeak: "/images/projects/bluepeak.png",
  wynes: "/images/projects/wynes.png",
  bulkSms: "/images/projects/bulk-sms.png",
  employeePerformance: "/images/projects/employee-performance.png",
  erpPos: "/images/projects/erp-pos.png",
  finance: "/images/projects/finance.png"
}

export const portfolioConfig = {
  identity: {
    name: "Francis Kariuki",
    shortTitle: "Software Engineer",
    fullTitle: "Software Engineer & Technology Solutions Specialist",
    founderOf: "BluePeak Tech Solutions",
    role: "Software Engineer - PrimeSoft Solutions",
    education: "Bachelor of Science in Software Engineering - University of Eastern Africa, Baraton",
    brandLine: "Software Engineer | Full-Stack Developer | Technology Solutions Specialist | Founder | Digital Creative"
  },
  contact: {
    email: "frankariuki86@gmail.com",
    phone: "+254711768878",
    phoneDisplay: "+254 711 768 878",
    whatsappNumber: "254711768878",
    whatsappMessage: "Hello Francis, I found your portfolio and would like to discuss a project or technology solution with you."
  },
  social: {
    github: "",
    linkedin: "",
    facebook: "",
    instagram: ""
  },
  seo: {
    title: "Francis Kariuki | Software Engineer & Technology Solutions Specialist",
    description:
      "Francis Kariuki is a Software Engineer, Full-Stack Developer and Founder of BluePeak Tech Solutions, building modern software, web applications and technology solutions.",
    image: "/images/portrait_photo_compatible-1.svg"
  },
  images: {
    profileImage,
    aboutImage: profileImage,
    technologyWorkspace: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85",
    technologyWorkspaceLocal: "/images/technology-workspace.jpg",
    contactImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
    contactImageLocal: "/images/contact-workspace.jpg",
    projects: {
      ...projectImages
    },
    graphicDesign: [
      { src: "/images/art1.svg", category: "Branding", title: "Brand Identity Concept" },
      { src: "/images/art2.svg", category: "Posters", title: "Event Poster" },
      { src: "/images/art3.svg", category: "Campaign Designs", title: "Campaign Creative" },
      { src: "/images/art4.svg", category: "Certificates", title: "Certificate Layout" },
      { src: "/images/art5.svg", category: "Branding", title: "Corporate Branding" },
      { src: "/images/art6.svg", category: "Posters", title: "Promotion Poster" },
      { src: "/images/art7.svg", category: "Social Media", title: "Social Graphics" },
      { src: "/images/art8.svg", category: "Certificates", title: "Recognition Certificate" }
    ]
  },
  stats: [
    { value: 5, suffix: "+", label: "Facebook Pages Managed" },
    { value: 4, suffix: "+", label: "Major Projects" },
    { value: 1, suffix: "", label: "Technology Company Founded" },
    { value: "∞", suffix: "", label: "Ideas Being Built" }
  ],
  projects: [
    {
      key: "bluepeak",
      title: "BluePeak Tech Solutions",
      category: "Technology Company / Web Platform",
      description:
        "My technology company's digital platform showcasing software development, IT solutions, digital services and creative work.",
      tech: ["React", "JavaScript", "Tailwind CSS"],
      ctaLabel: "Visit Website",
      href: "https://bluepeak-tech.vercel.app/",
      previewUrl: "https://bluepeak-tech.vercel.app/",
      featured: true
    },
    {
      key: "wynes",
      title: "Wynes Technical Training Institute",
      category: "Institutional Website",
      description:
        "A professional institutional website developed to provide Wynes Technical Training Institute with a modern digital presence.",
      tech: ["React", "HTML", "CSS", "JavaScript"],
      ctaLabel: "Visit Website",
      href: "https://www.wynestti.co.ke/",
      previewUrl: "https://www.wynestti.co.ke/"
    },
    {
      key: "bulkSms",
      title: "Bulk SMS System",
      category: "Web Application",
      description:
        "A web-based platform for managing contacts and bulk SMS communication.",
      tech: ["Node.js", "Express.js", "Database", "REST APIs"],
      ctaLabel: "Open Application",
      href: "https://bulk-sms-system1.vercel.app/login",
      previewUrl: "https://bulk-sms-system1.vercel.app/login",
      previewType: "dashboard",
      image: projectImages.bulkSms
    },
    {
      key: "employeeEvaluation",
      title: "Employee Performance & Evaluation System",
      category: "Web Application",
      description:
        "A web-based employee performance management platform for evaluation, analytics, tracking and reporting.",
      tech: ["React", "Node.js", "PostgreSQL"],
      ctaLabel: "View Project",
      href: "#contact",
      previewType: "dashboard",
      image: projectImages.employeePerformance
    },
    {
      key: "erpPos",
      title: "ERP / POS",
      category: "Business Management Platform",
      description:
        "A business management platform planned around sales, inventory, purchases, payments and operational reporting.",
      tech: ["ERP", "POS", "Inventory", "Reports"],
      ctaLabel: "Coming Soon",
      href: "#contact",
      previewType: "dashboard",
      image: projectImages.erpPos,
      comingSoon: true
    },
    {
      key: "finance",
      title: "Expense & Finance Platform",
      category: "Finance Platform",
      description:
        "A modern finance platform planned to bring income, expenses, transactions and financial analytics into one clear overview.",
      tech: ["Finance", "Analytics", "Transactions"],
      ctaLabel: "Coming Soon",
      href: "#contact",
      previewType: "dashboard",
      image: projectImages.finance,
      comingSoon: true
    }
  ]
}

export function buildWhatsAppLink(number, message) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}
