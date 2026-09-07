export interface Track {
  id: string;
  number: string;
  title: string;
  sdgTag: string;
  badge: string;
  iconName: string;
  description: string;
  problemPrompt: string;
  requirements: string[];
  expectedImpact: string;
}

export interface TimelineEvent {
  phase: string;
  date: string;
  time: string;
  title: string;
  description: string;
  status: "upcoming" | "active" | "completed";
}

export interface JudgingCriterion {
  name: string;
  weight: number;
  description: string;
  details: string[];
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const HACKATHON_DATA = {
  name: "SustainX",
  eventCode: "VT26-NEW-10",
  tagline: "SDGs to Startups",
  subTagline: "2 DAYS. BIG IDEAS. REAL IMPACT.",
  callout: "THINK. BUILD. IMPACT.",
  targetAudience: "Open to all students in VIT-AP & external college innovators",

  date: "11 & 12 September 2026",
  time: "11:00 AM – 6:00 PM & Full Day (36-Hour Hackathon)",
  duration: "36-Hour Innovation Hackathon",
  venue: "CB- 316, 317, VIT-AP University",
  entryFee: "₹99 per participant",
  prizePool: "₹25,000",
  teamSize: "Solo to 4 Members",
  accommodation: "Accommodation will be provided for all external participants/applicants",

  organizer: {
    name: "Open Source Community (OSC)",
    club: "Campus Club VIT-AP",
    university: "VIT-AP University",
  },

  links: {
    register: "https://events.vitap.ac.in/e/vtapp-events-d59c5d25-5690-4499-8cd3-3acb80b20c60",
    submit: "https://events.vitap.ac.in/e/vtapp-events-d59c5d25-5690-4499-8cd3-3acb80b20c60",
    exploreTracks: "#tracks",
    instagram: "https://instagram.com/osc_vitap",
    linkedin: "https://linkedin.com/company/osc-vitap",
    youtube: "https://youtube.com/@osc_vitap",
    twitter: "https://x.com/osc_vitap",
    facebook: "https://facebook.com/oscvitap",
    discord: "https://discord.gg/vitap-osc",
    contactEmail: "opensourcecommunity@vitap.ac.in",
  },

  note: "Individual registration is ₹99 per participant. Teams can have a maximum of 4 members. Participants who wish to form or join a team will be able to do so before the hackathon through a registration link or at the venue.",

  about: {
    heading: "About SustainX",
    summary:
      "SustainX is a 36-hour innovation hackathon focused on solving real-world challenges aligned with the United Nations Sustainable Development Goals (UN SDGs). Participants will collaborate, build, and prototype technology-driven solutions that create meaningful social, economic, and environmental impact.",
    themeTitle: "Theme: United Nations Sustainable Development Goals (UN SDGs)",
    themeDescription:
      "From clean water, affordable green energy, and climate action to sustainable cities and responsible consumption, SustainX transforms grassroots college ideas into high-potential startups.",
    lookingFor: [
      {
        title: "SDG Alignment",
        desc: "Solutions that directly address one or more United Nations Sustainable Development Goals with demonstrable relevance.",
        icon: "Globe2",
      },
      {
        title: "Working Prototypes",
        desc: "Functional web/mobile applications, IoT hardware integrations, or algorithmic prototypes created during the 36 hours.",
        icon: "Cpu",
      },
      {
        title: "Startup & Scalability Potential",
        desc: "Real-world commercial viability, clear user personas, and sustainable implementation roadmaps beyond the hackathon.",
        icon: "TrendingUp",
      },
      {
        title: "Interdisciplinary Teams",
        desc: "Collaborations bridging software engineering, hardware prototyping, design thinking, and domain insight.",
        icon: "Users",
      },
    ],
  },

  tracks: [
    {
      id: "track-01",
      number: "01",
      title: "Clean Energy & Climate Action",
      sdgTag: "SDG 7 & SDG 13",
      badge: "ENERGY & CLIMATE",
      iconName: "Zap",
      description:
        "Developing next-gen solutions for renewable energy optimization, emissions auditing, and microgrid intelligence to combat climate emergency.",
      problemPrompt:
        "How can software, IoT telemetry, and AI forecast renewable generation, curtail energy wastage on campuses and urban centers, or incentivize low-carbon habits?",
      requirements: [
        "Functional application or simulation utilizing real-time or historical energy telemetry",
        "Demonstrable reduction metric in carbon footprint or energy loss",
        "Clean, documented API architecture and responsive interface",
        "Clear alignment with UN SDG 7 (Affordable & Clean Energy) or SDG 13 (Climate Action)",
      ],
      expectedImpact:
        "Accelerated transition to renewable decentralization and measurable reductions in peak-hour carbon intensity.",
    },
    {
      id: "track-02",
      number: "02",
      title: "Sustainable Cities & Smart Infrastructure",
      sdgTag: "SDG 9 & SDG 11",
      badge: "MOBILITY & URBAN TECH",
      iconName: "Building2",
      description:
        "Reimagining campus logistics, public transit intelligence, smart waste management, and sustainable civic architecture.",
      problemPrompt:
        "How can we build resilient civic systems that reduce urban heat islands, streamline multimodal transit, or automate municipal recycling streams?",
      requirements: [
        "Interactive dashboard, routing algorithm, or computer-vision based sorting system",
        "Utilizes open geospatial datasets (OpenStreetMap, sensor APIs, etc.)",
        "User-centered design tailored for citizens or campus administrators",
        "Alignment with UN SDG 11 (Sustainable Cities & Communities)",
      ],
      expectedImpact:
        "Measurable diversion of municipal waste from landfills, lowered commuter emissions, and responsive smart city management.",
    },
    {
      id: "track-03",
      number: "03",
      title: "Clean Water & Life Protection",
      sdgTag: "SDG 6, SDG 14 & SDG 15",
      badge: "WATER & BIODIVERSITY",
      iconName: "Leaf",
      description:
        "Protecting water resources, monitoring biodiversity loss, soil regeneration, and preventing aquatic pollution through technology.",
      problemPrompt:
        "Design tools that enable transparent water quality auditing, early warning for biological degradation, or automated freshwater conservation.",
      requirements: [
        "Sensor simulation, satellite Earth Observation integration, or crowdsourced reporting model",
        "Auditable metrics for water purity, biodiversity preservation, or soil metrics",
        "Actionable alerts system for environmental volunteers or local authorities",
        "Alignment with UN SDG 6 (Clean Water) and SDG 14/15 (Life Below Water & On Land)",
      ],
      expectedImpact:
        "Real-time ecological contamination detection, optimized freshwater allocation, and data-backed ecosystem restoration.",
    },
    {
      id: "track-04",
      number: "04",
      title: "Responsible Consumption & Circular Economy",
      sdgTag: "SDG 12",
      badge: "CIRCULAR SYSTEMS",
      iconName: "RefreshCw",
      description:
        "Eliminating single-use plastics, creating digital product passports, food surplus redistribution, and closed-loop material cycles.",
      problemPrompt:
        "How might peer-to-peer redistribution platforms, supply chain tracking, or AI recommendation engines eliminate campus/commercial food and material waste?",
      requirements: [
        "Working prototype demonstrating end-to-end circular transaction or tracking flow",
        "Quantifiable resource diversion metrics or carbon savings formula",
        "Accessible web or mobile user experience",
        "Alignment with UN SDG 12 (Responsible Consumption & Production)",
      ],
      expectedImpact:
        "Massive reduction in institutional food waste, extended material lifecycles, and localized circular economies.",
    },
  ] as Track[],

  rules: {
    eligibility: [
      {
        title: "VIT-AP Students & External Innovators",
        desc: "Open to all students currently enrolled at VIT-AP across all branches and years. External college participants are also warmly welcomed with provided campus accommodation.",
      },
      {
        title: "Nominal Registration Fee",
        desc: "Individual registration fee is ₹99 per participant. Payment confirmation grants full access to venue (CB- 316, 317), mentorship, judging, food/snacks, and swag.",
      },
      {
        title: "Cross-Discipline Welcome",
        desc: "Developers, UI/UX designers, hardware hobbyists, business strategists, and environmental enthusiasts are all encouraged to participate.",
      },
    ],
    teamRules: [
      {
        title: "Solo or Teams up to 4 Members",
        desc: "You can register solo or in a team of up to 4 members. Solo participants can find and form teams before the event or directly at the venue.",
      },
      {
        title: "Single Team Affiliation",
        desc: "Each registered participant can only be an active member of one hackathon team.",
      },
      {
        title: "On-Campus Venue CB- 316, 317",
        desc: "The hackathon takes place offline at Central Block (CB- 316, 317) at VIT-AP University.",
      },
    ],
    developmentRules: [
      {
        title: "36-Hour Sprint",
        desc: "All core software, designs, and hardware integrations must be developed during the official 36-hour hackathon window.",
      },
      {
        title: "Open-Source & Third-Party APIs",
        desc: "Open-source libraries, UI frameworks, public datasets, and APIs are permitted provided they are credited in the submission README.",
      },
      {
        title: "No Pre-Existing Core Apps",
        desc: "Submitting pre-built software or prior semester capstone projects without new development is strictly prohibited.",
      },
      {
        title: "Intellectual Property",
        desc: "All IP and code produced during SustainX remains 100% owned by the student participants.",
      },
    ],
    submissionRequirements: [
      {
        label: "Public GitHub Repository",
        detail: "Source code repository with setup instructions, architecture summary, and open-source license.",
      },
      {
        label: "Working Prototype / Demo",
        detail: "Live deployment URL, local demo, or hardware setup ready for live review in CB- 316, 317.",
      },
      {
        label: "Pitch Deck (PDF)",
        detail: "A concise slide deck detailing the SDG problem statement, market feasibility, startup viability, and tech architecture.",
      },
      {
        label: "2-3 Min Video Walkthrough",
        detail: "A recorded walkthrough showcasing the features, real-world impact, and tech stack of your solution.",
      },
    ],
    importantNotes: [
      "Accommodation is provided for all external applicants and outstation participants.",
      "Strict enforcement of the Code of Conduct — respectful, collaborative, and inclusive environment.",
      "Final submissions must be turned in before the 36-hour timer ends on September 12, 2026.",
    ],
  },

  timeline: [
    {
      phase: "01",
      date: "September 11, 2026",
      time: "10:30 AM – 11:00 AM",
      title: "Check-in & Team Registration",
      description: "Arrival at Central Block (CB- 316, 317). Badge collection, breakfast snacks, and final team matchmaking.",
      status: "upcoming",
    },
    {
      phase: "02",
      date: "September 11, 2026",
      time: "11:00 AM",
      title: "Hackathon Begins & Opening Keynote",
      description: "Official kickoff by Open Source Community VIT-AP, challenge briefings, mentor introductions, and 36-hour timer starts.",
      status: "upcoming",
    },
    {
      phase: "03",
      date: "September 11, 2026",
      time: "4:00 PM – 7:00 PM",
      title: "Mentorship Round 1: Ideation & Feasibility",
      description: "Industry mentors and faculty review project architectures and SDG alignment.",
      status: "upcoming",
    },
    {
      phase: "04",
      date: "Overnight (Full Day)",
      time: "10:00 PM – Dawn",
      title: "Overnight Hacking & Midnight Snacks",
      description: "Non-stop building in CB- 316, 317 with mentor assistance, energy drinks, and mini icebreaker challenges.",
      status: "upcoming",
    },
    {
      phase: "05",
      date: "September 12, 2026",
      time: "2:00 PM",
      title: "Submission Deadline & Code Freeze",
      description: "GitHub repositories locked and demo pitch desks prepared.",
      status: "upcoming",
    },
    {
      phase: "06",
      date: "September 12, 2026",
      time: "3:00 PM – 6:00 PM",
      title: "Jury Pitches & ₹25,000 Prize Ceremony",
      description: "Top teams pitch to the judging committee. Winners announced and cash prizes distributed.",
      status: "upcoming",
    },
  ] as TimelineEvent[],

  judgingCriteria: [
    {
      name: "SDG Impact & Relevance",
      weight: 25,
      description: "How effectively does the solution address verified UN Sustainable Development Goals?",
      details: [
        "Clear alignment with one or more UN SDGs",
        "Measurable indicators for environmental or social impact",
      ],
      icon: "Globe",
    },
    {
      name: "Innovation & Problem Solving",
      weight: 25,
      description: "Uniqueness of the technical solution and creative departure from existing tools.",
      details: [
        "Novel technology integration (AI, IoT, blockchain, edge compute)",
        "Distinct value proposition over conventional solutions",
      ],
      icon: "Lightbulb",
    },
    {
      name: "Technical Implementation",
      weight: 20,
      description: "Quality of the code, system architecture, and prototype completeness during the 36 hours.",
      details: [
        "Functional, stable working prototype during live jury evaluation",
        "Clean repository structure, documentation, and error handling",
      ],
      icon: "Code2",
    },
    {
      name: "Startup & Market Viability",
      weight: 15,
      description: "Can this prototype realistically evolve from 'SDGs to Startups'?",
      details: [
        "Realistic cost structure, target user persona, and adoption roadmap",
        "Potential for incubator funding or pilot deployment on campus",
      ],
      icon: "TrendingUp",
    },
    {
      name: "Pitch & Presentation",
      weight: 15,
      description: "Clarity of the live presentation, question responses, and demo quality.",
      details: [
        "Engaging presentation within the allotted time limit",
        "Composed, well-substantiated answers to jury questions",
      ],
      icon: "Presentation",
    },
  ] as JudgingCriterion[],

  organizers: [
    {
      name: "Open Source Community (OSC)",
      role: "Lead Organizing Club",
      tag: "Organizer",
    },
    {
      name: "VIT-AP University",
      role: "Host Campus & Infrastructure",
      tag: "Host Venue",
    },
    {
      name: "CB- 316, 317 Hackathon Lab",
      role: "Central Block Venue",
      tag: "Facility",
    },
    {
      name: "Student Innovation Cell",
      role: "Incubation & Startup Mentorship",
      tag: "Partner",
    },
  ],

  faqs: [
    {
      question: "Who is eligible to participate in SustainX?",
      answer:
        "SustainX is open to all students at VIT-AP across any year and program. External university applicants are also welcome, and accommodation will be provided for external participants.",
    },
    {
      question: "What is the registration fee?",
      answer:
        "The registration fee is ₹99 per participant. This covers your entry pass, access to the 36-hour venue in CB- 316, 317, mentorship sessions, participation kit, food/refreshments, and certificate.",
    },
    {
      question: "What is the team size requirement?",
      answer:
        "You can participate solo or in teams of up to 4 members. If you don't have a team yet, you can register solo and form or join a team before the hackathon or directly at the venue during check-in.",
    },
    {
      question: "Is accommodation provided for external participants?",
      answer:
        "Yes! Accommodation will be provided on campus for all external applicants and outstation participants for the duration of the hackathon.",
    },
    {
      question: "What is the total prize pool?",
      answer:
        "The total prize pool is ₹25,000 in cash awards and prizes, along with incubation support, certificates, and opportunities to pitch to campus venture networks.",
    },
    {
      question: "What are the hackathon timings and venue?",
      answer:
        "SustainX runs on 11 & 12 September 2026. The opening kickoff starts at 11:00 AM on September 11, running non-stop through September 12 with final presentations wrapping by 6:00 PM. The venue is Central Block rooms CB- 316, 317 at VIT-AP University.",
    },
  ] as FaqItem[],
};
