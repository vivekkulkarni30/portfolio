window.portfolioData = {
  profile: {
    name: "Vivek Kulkarni",
    handle: "vivek.dev",
    role: "Software Engineer, Educator, Builder",
    location: "India",
    availability: "Open to select consulting, product, and education collaborations",
    email: "hello@vivek.dev",
    intro:
      "I build reliable software, teach engineering through practical examples, and turn product ideas into clean, useful systems.",
    currentFocus: [
      "AI-assisted developer tools",
      "Full-stack products with strong UX",
      "Technical education and content systems"
    ],
    stats: [
      { label: "Years shipping", value: "8+" },
      { label: "Projects built", value: "42" },
      { label: "Learners reached", value: "120K+" },
      { label: "Products launched", value: "6" }
    ],
    socials: [
      { label: "GitHub", url: "https://github.com/" },
      { label: "LinkedIn", url: "https://linkedin.com/" },
      { label: "YouTube", url: "https://youtube.com/" },
      { label: "X", url: "https://x.com/" }
    ]
  },
  sections: [
    { id: "about", label: "About", file: "about.tsx", icon: "profile" },
    { id: "projects", label: "Projects", file: "projects.tsx", icon: "projects" },
    { id: "platforms", label: "Platforms", file: "platforms.ts", icon: "platforms" },
    { id: "products", label: "Products", file: "products.json", icon: "products" },
    { id: "courses", label: "Courses", file: "courses.md", icon: "courses" },
    { id: "blogs", label: "Blogs", file: "blogs.mdx", icon: "blogs" },
    { id: "contact", label: "Contact", file: "contact.md", icon: "contact" }
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "OpenAI APIs",
    "LangChain",
    "Prisma",
    "Tailwind CSS",
    "Framer Motion",
    "Figma"
  ],
  projects: [
    {
      title: "DevFlow Studio",
      status: "Production",
      description: "A collaborative workspace for shipping product documentation, changelogs, and internal engineering playbooks.",
      stack: ["Next.js", "PostgreSQL", "OpenAI", "Stripe"],
      repo: "https://github.com/",
      live: "https://example.com"
    },
    {
      title: "Atlas AI Console",
      status: "Beta",
      description: "A control plane for evaluating prompts, model outputs, datasets, and team review workflows.",
      stack: ["React", "Node.js", "Redis", "Workers"],
      repo: "https://github.com/",
      live: "https://example.com"
    },
    {
      title: "Learning OS",
      status: "Open Source",
      description: "A modular education platform with cohorts, assignments, video chapters, progress analytics, and community events.",
      stack: ["TypeScript", "Prisma", "Mux", "GraphQL"],
      repo: "https://github.com/",
      live: "https://example.com"
    }
  ],
  platforms: [
    {
      title: "Vivek Labs",
      url: "labs.vivek.dev",
      category: "Learning platform",
      description: "Structured cohorts, engineering labs, and hands-on product challenges for builders."
    },
    {
      title: "Build Notes",
      url: "notes.vivek.dev",
      category: "Technical writing",
      description: "Deep dives on architecture, product engineering, AI workflows, and career growth."
    },
    {
      title: "Open Classroom",
      url: "classroom.vivek.dev",
      category: "Community",
      description: "Live workshops, code reviews, office hours, and project-based mentoring."
    }
  ],
  products: [
    {
      name: "PromptDock",
      type: "AI Tool",
      description: "Version, test, and share production prompts with model-aware review history.",
      platforms: ["Web", "API"],
      tags: ["AI", "Teams", "Observability"]
    },
    {
      name: "ShipList",
      type: "SaaS",
      description: "A focused launch checklist and release tracker for small engineering teams.",
      platforms: ["Web"],
      tags: ["Productivity", "DevTools"]
    },
    {
      name: "ClipForge",
      type: "Creator Tool",
      description: "Turn long technical videos into searchable clips, notes, and social snippets.",
      platforms: ["Web", "Desktop"],
      tags: ["Video", "Automation"]
    }
  ],
  courses: [
    {
      title: "Full Stack Systems with TypeScript",
      platform: "Cohort",
      students: "18K",
      rating: "4.9",
      duration: "10 weeks",
      featured: true
    },
    {
      title: "AI Engineering for Product Builders",
      platform: "Workshop",
      students: "7.4K",
      rating: "4.8",
      duration: "6 weeks",
      featured: true
    },
    {
      title: "Backend Architecture in Practice",
      platform: "Self-paced",
      students: "21K",
      rating: "4.7",
      duration: "14 hours",
      featured: false
    }
  ],
  blogs: [
    {
      title: "Designing AI Products That Engineers Can Trust",
      date: "Jul 2026",
      read: "9 min",
      summary: "A practical framework for evals, fallbacks, user feedback, and confidence-building UI.",
      tags: ["AI", "Product", "Architecture"]
    },
    {
      title: "The Portfolio as a Developer Workspace",
      date: "Jun 2026",
      read: "6 min",
      summary: "How interface metaphors can make personal sites more memorable without becoming gimmicks.",
      tags: ["Design", "Frontend"]
    },
    {
      title: "What I Learned Shipping Six Small SaaS Products",
      date: "May 2026",
      read: "11 min",
      summary: "Notes on scope, distribution, pricing, onboarding, and sustainable maintenance.",
      tags: ["SaaS", "Founder"]
    }
  ],
  timeline: [
    {
      year: "2026",
      title: "Independent product studio",
      detail: "Building developer tooling and education products with a focus on practical AI workflows."
    },
    {
      year: "2024",
      title: "Technical educator",
      detail: "Launched cohort-based learning experiences and helped learners ship portfolio-grade projects."
    },
    {
      year: "2021",
      title: "Senior software engineer",
      detail: "Led full-stack product development across SaaS platforms, analytics systems, and automation tools."
    }
  ],
  terminal: [
    "git checkout -b portfolio/vscode-workspace",
    "pnpm create section about.tsx projects.tsx products.json",
    "running accessibility checks... passed",
    "opening contact.md for collaboration"
  ]
};
