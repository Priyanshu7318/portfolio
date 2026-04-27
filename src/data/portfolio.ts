export const portfolioData = {
  about: {
    name: "PRIYANSHU SHAKYA",
    role: "Aspiring Data Scientist",
    bio: "Aspiring Data Scientist with hands-on experience in Python, SQL, machine learning, and data analytics. I've shipped AI & data-driven projects and solved 350+ coding problems. Passionate about turning data into intelligent systems that solve real-world problems.",
    profileImage: "/assets/hero.png",
    location: "Mohali, Punjab, India",
    availability: "Available for Data Science & Analyst",
    focus: "AI • Data • Frontend",
    mission: "I build clean UIs and practical ML systems—designed to ship and scale.",
    links: {
      leetcode: "https://leetcode.com/u/priyanshu",
      github: "https://github.com/priyanshu",
      linkedin: "https://linkedin.com/in/priyanshu",
      whatsapp: "https://wa.me/919651954404"
    },
    stats: {
      leetcode: "400+",
      projects: "25+",
      hackathons: "15+",
      gfgStreak: "165d"
    }
  },
  techStack: [
    {
      category: "Languages & Frameworks",
      items: [
        { name: "Python", detail: "Data Science, ML, DSA", icon: "PY", subItems: ["NumPy", "Pandas", "PyTorch", "Scikit-learn", "Matplotlib", "Seaborn"] },
        { name: "JavaScript", detail: "Full-stack Node & React", icon: "JA", subItems: ["Node.js", "React.js", "REST APIs", "TypeScript"] },
        { name: "Machine Learning", detail: "Deep Learning & NLP", icon: "MA", subItems: ["TensorFlow", "HuggingFace", "spaCy"] },
        { name: "LLMs", detail: "OpenAI, GPT, Ollama", icon: "LL", subItems: ["LangChain", "RAG", "Vector DB"] },
        { name: "C / C++", detail: "DSA & problem solving", icon: "C", subItems: ["STL", "Algorithms"] },
        { name: "MySQL", detail: "Relational databases", icon: "MY", subItems: ["Queries", "Joins", "Schema Design"] },
        { name: "HTML5 / CSS3", detail: "Responsive web design", icon: "HT", subItems: ["Tailwind", "Flex", "Grid"] }
      ]
    }
  ],
  services: [
    {
      id: "01",
      name: "Data Science",
      description: "Predictive modeling, EDA and ML pipelines",
      icon: "Database"
    },
    {
      id: "02",
      name: "Web Development",
      description: "Full-stack websites with React, Node & FastAPI",
      icon: "Code"
    },
    {
      id: "03",
      name: "AI / LLM Apps",
      description: "RAG, agents and fine-tuned LLM solutions",
      icon: "Cpu"
    },
    {
      id: "04",
      name: "Graphic Design",
      description: "Brand identity, posters and social creatives",
      icon: "Palette"
    },
    {
      id: "05",
      name: "Video Editing",
      description: "DaVinci, Premiere Pro and After Effects",
      icon: "Video"
    },
    {
      id: "06",
      name: "Responsive UI",
      description: "Pixel-perfect, accessible interfaces",
      icon: "Layout"
    }
  ],
  skills: {
    technicalSoftware: ["DaVinci Resolve", "Premiere Pro", "After Effects", "Illustrator", "MS Office", "Advanced Excel"],
    technicalTools: ["Figma", "Git & GitHub", "Jupyter Notebook", "Google Colab", "Firebase", "Canva","AWS"],
    professionalSoftSkills: ["Team Collaboration", "Leadership", "Problem-Solving", "Time Management", "Event Management"]
  },
  journey: {
    experience: [
      {
        company: "Codveda Technologies",
        role: "Data Science Intern",
        duration: "Jul 2025",
        location: "Remote",
        type: "Professional"
      },
      {
        company: "Liberty Shoes Ltd",
        role: "Junior Video Editor",
        duration: "Jun 2023 – Jun 2024",
        location: "In-office",
        type: "Professional"
      },
      {
        company: "Freelancer",
        role: "Video Editor & Graphic Designer",
        duration: "Jan 2023 – Present",
        location: "Remote",
        type: "Professional"
      }
    ],
    education: [
      {
        degree: "BCA",
        field: "Bachelor of Computer Applications",
        institution: "Chandigarh Group of Colleges, Jhanjeri",
        duration: "2024 – 2027",
        score: "SGPA: 8.0 / 10.0"
      },
      {
        degree: "Secondary",
        field: "Super Science",
        institution: "PNSNIC Kayampur",
        duration: "2022",
        score: "79%"
      }
    ],
    certifications: [
      "Web Development — Aptech IT & Aviation Academy",
      "DSA with C++ Bootcamp — LetsUpgrade",
      "Problem Solving — LeetCode"
    ]
  },
  projects: [
    {
      id: "01",
      title: "DeepRecall",
      subtitle: "AI-Powered Second Brain",
      description: "DeepRecall is an intelligent AI companion that remembers your conversations, understands them, and can recall them whenever you ask—just like human memory",
      category: "AI / NLP",
      techStack: ["Python", "Whisper", "HuggingFace", "FastAPI", "MongoDB"],
      githubLink: "https://github.com/priyanshu/deeprecall",
      images: ["/assets/projects/deeprecall-1.png", "/assets/projects/deeprecall-2.png", "/assets/projects/deeprecall-3.png"],
      imageCount: "03 / 03"
    },
    {
      id: "02",
      title: "GROIT",
      subtitle: "Personal AI Assistant",
      description: "Modular AI assistant for task automation, scheduling, smart reminders and content generation using intent detection and memory recall. Features a clean, futuristic dashboard and voice integration.",
      category: "AI / Automation",
      techStack: ["React", "Node.js", "Python", "MongoDB", "JWT"],
      githubLink: "https://github.com/priyanshu/groit",
      images: ["/assets/projects/groit-1.png", "/assets/projects/groit-2.png", "/assets/projects/groit-3.png"],
      imageCount: "03 / 03"
    },
    {
      id: "03",
      title: "SHIELD",
      subtitle: "Deepfake & Cyber Fraud Detection",
      description: "AI platform detecting deepfake videos, AI voices, images and scam texts. Includes risk-scoring, a real-time React dashboard, and instant alerts for suspicious activity.",
      category: "Deep Learning",
      techStack: ["FastAPI", "TensorFlow", "OpenCV", "Scikit-learn", "MongoDB"],
      githubLink: "https://github.com/priyanshu/shield",
      images: ["/assets/projects/shield-1.png", "/assets/projects/shield-2.png", "/assets/projects/shield-3.png"],
      imageCount: "03/ 03"
    },
    {
      id: "04",
      title: "NMAK",
      subtitle: "Legal Assistance Portal",
      description: "Connects users to verified lawyers with authentication, emergency support, legal blog and multilingual FAQs.",
      category: "Full-stack",
      techStack: ["React", "Node.js", "MongoDB", "Express"],
      githubLink: "https://github.com/priyanshu/nmak",
      images: ["/assets/projects/nmak-1.png", "/assets/projects/nmak-2.png","/assets/projects/nmak-3.png"],
      imageCount: "03 / 03"
    },
    {
      id: "05",
      title: "Playvoo",
      subtitle: "YouTube Clone",
      description: "Video platform with upload, streaming, likes, comments, subscriptions and a recommendation engine.",
      category: "Streaming",
      techStack: ["React", "Node", "MongoDB", "AWS S3"],
      githubLink: "https://github.com/priyanshu/playvoo",
      images: ["/assets/projects/playvoo-1.png","/assets/projects/playvoo-2.png","/assets/projects/playvoo-3.png"],
      imageCount: "03 / 03"
    },
    {
      id: "06",
      title: "Air King",
      subtitle: "Air India Clone",
      description: "Airline portal with flight reservations, status tracking, payment integration and customer support.",
      category: "Web App",
      techStack: ["React", "Node", "Stripe", "REST"],
      githubLink: "https://github.com/priyanshu/air-king",
      images: ["/assets/projects/airking-1.png","/assets/projects/airking-2.png","/assets/projects/airking-3.png"],
      imageCount: "03 / 03"
    },
    {
      id: "07",
      title: "KKV",
      subtitle: "Online Mandi Platform",
      description: "Digital mandi for farmers — trade produce, crop-disease detection, equipment rentals, live prices and a multilingual chatbot.",
      category: "AgriTech",
      techStack: ["React", "FastAPI", "TensorFlow", "MongoDB"],
      githubLink: "https://github.com/priyanshu/kkv",
      images: ["/assets/projects/kkv-1.png", "/assets/projects/kkv-2.png", "/assets/projects/kkv-3.png"],
      imageCount: "03 / 03"
    },
    {
      id: "08",
      title: "Portfolio",
      subtitle: "Personal Portfolio",
      description: "This modern, responsive portfolio — showcasing projects, skills and experience with smooth motion design. Built with React and Tailwind.",
      category: "Frontend",
      techStack: ["React", "Tailwind", "shadcn/ui", "Framer Motion"],
      githubLink: "https://github.com/priyanshu/portfolio",
      images: ["/assets/projects/portfolio-1.png", "/assets/projects/portfolio-2.png","/assets/projects/portfolio-3.png"],
      imageCount: "03 / 03" 
    }
  ],
  hackathons: [
    {
      name: "Smart India Hackathon 2023",
      rank: "Grand Finalist",
      duration: "24h",
      project: "Air India booking clone",
      date: "19–23 Dec 2023",
      location: "Manav Rachna University, Faridabad",
      role: "Frontend Developer",
      prize: "₹50,000",
      images: ["/assets/hackathons/sih-1.png", "/assets/hackathons/sih-2.png", "/assets/hackathons/sih-3.png"]
    },
    {
      name: "Goldman Sachs India Hackathon 2024",
      rank: "2nd / 100+",
      duration: "24h",
      project: "YouTube clone",
      date: "15–16 Feb 2024",
      location: "Cyber City, Gurugram",
      role: "Frontend Developer",
      prize: "₹50,000",
      images: ["/assets/hackathons/gs-1.png", "/assets/hackathons/gs-2.png"],
      imageCount: "02 / 02"
    },
    {
      name: "BharatTech Xperience 2.0",
      rank: "11th / 250+",
      duration: "24h",
      project: "NMAK legal portal",
      date: "8–9 Feb 2025",
      location: "SVIET, Rajpura, Punjab",
      role: "Backend Developer",
      prize: "Best Community Project",
      images: ["/assets/hackathons/bt-1.png", "/assets/hackathons/bt-2.png"],
      imageCount: "02 / 02"
    },
    {
      name: "Endeavour Expo 2025",
      rank: "5th / 100+",
      duration: "12h",
      project: "Innovative software showcase",
      date: "4 Mar 2025",
      location: "CGC Jhanjeri, Mohali",
      role: "Software Management",
      prize: "Community Impact",
      images: ["/assets/hackathons/ee-1.png", "/assets/hackathons/ee-2.png"],
      imageCount: "02 / 02"
    },
    {
      name: "HackMOL 6.0",
      rank: "25th / 3000+",
      duration: "36h",
      project: "KKV — Online Mandi",
      date: "10–11 Apr 2025",
      location: "NIT Jalandhar, Punjab",
      role: "Backend Developer",
      prize: "Network Building",
      images: ["/assets/hackathons/hm-1.png", "/assets/hackathons/hm-2.png"],
      imageCount: "02 / 02"

    },
    {
      name: "Hack the Future 2.0",
      rank: "12th / 200+",
      duration: "30h",
      project: "DeepRecall — Second Brain AI",
      date: "26–27 Sep 2025",
      location: "Tula's Institute, Dehradun",
      role: "AI Developer",
      prize: "AI & Innovation",
      images: ["/assets/hackathons/hf-1.png", "/assets/hackathons/hf-2.png"],
      imageCount: "02 / 02"
    }
  ],
  contact: {
    email: "priyanshushakya373@gmail.com",
    phone: "+91 9651954404",
    location: "Mohali, Punjab, India",
    whatsapp: "9651954404"
  }
};
