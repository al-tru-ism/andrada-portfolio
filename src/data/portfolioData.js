/**
 * Portfolio Data — Central data store for the entire portfolio.
 * Update this file to change content across the site.
 */

// ─── Personal Info ────────────────────────────────────────────
export const personalInfo = {
  name: "Andrada",
  headline: "Aspiring Network Engineer | Future Cybersecurity Specialist",
  tagline: "Building secure, resilient networks — one packet at a time.",
  intro:
    "I'm a passionate IT professional with a strong foundation in networking, infrastructure, and security. Currently honing my skills as a Network Engineer, I'm on a clear trajectory toward specializing in Cybersecurity — driven by curiosity, hands-on lab work, and a commitment to continuous learning.",
  email: "andrada@example.com",
  github: "https://github.com/andrada",
  linkedin: "https://linkedin.com/in/andrada",
  resumeUrl: "/resume.pdf",
};

// ─── Navigation Links ─────────────────────────────────────────
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Certifications", path: "/certifications" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

// ─── Skills Data ──────────────────────────────────────────────
export const skillCategories = [
  {
    category: "Networking",
    icon: "Network",
    skills: [
      { name: "TCP/IP", level: 85 },
      { name: "VLAN Configuration", level: 80 },
      { name: "OSPF / EIGRP", level: 70 },
      { name: "Subnetting", level: 90 },
      { name: "BGP Basics", level: 55 },
      { name: "DNS / DHCP", level: 85 },
    ],
  },
  {
    category: "Security",
    icon: "Shield",
    skills: [
      { name: "Firewall Configuration", level: 70 },
      { name: "IDS / IPS", level: 60 },
      { name: "Cryptography Basics", level: 65 },
      { name: "Vulnerability Assessment", level: 60 },
      { name: "Network Hardening", level: 65 },
      { name: "Basic Penetration Testing", level: 50 },
    ],
  },
  {
    category: "Tools",
    icon: "Wrench",
    skills: [
      { name: "Wireshark", level: 80 },
      { name: "Cisco Packet Tracer", level: 85 },
      { name: "Kali Linux", level: 65 },
      { name: "Nmap", level: 70 },
      { name: "GNS3", level: 60 },
      { name: "pfSense", level: 55 },
    ],
  },
  {
    category: "Programming",
    icon: "Code",
    skills: [
      { name: "Python", level: 70 },
      { name: "Bash Scripting", level: 65 },
      { name: "React / JavaScript", level: 60 },
      { name: "SQL", level: 55 },
      { name: "HTML / CSS", level: 75 },
      { name: "Git / GitHub", level: 80 },
    ],
  },
];

// ─── Projects Data ────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: "Enterprise Network Simulation",
    description:
      "Designed and simulated a multi-site enterprise network using Cisco Packet Tracer. Implemented VLANs, inter-VLAN routing, OSPF, and ACLs for traffic control across different departments.",
    technologies: ["Cisco Packet Tracer", "OSPF", "VLANs", "ACLs"],
    category: "Networking",
    github: "https://github.com/andrada/enterprise-network-sim",
    demo: null,
  },
  {
    id: 2,
    title: "Home Lab Firewall Setup",
    description:
      "Built a home lab environment with pfSense as the firewall/router. Configured NAT, port forwarding, firewall rules, and Snort IDS for traffic inspection.",
    technologies: ["pfSense", "Snort", "Linux", "Networking"],
    category: "Cybersecurity",
    github: "https://github.com/andrada/homelab-firewall",
    demo: null,
  },
  {
    id: 3,
    title: "Network Monitoring Dashboard",
    description:
      "Developed a real-time network monitoring dashboard using Python and Flask. Integrates with SNMP to pull device metrics, displaying bandwidth usage, uptime, and alerts.",
    technologies: ["Python", "Flask", "SNMP", "Chart.js"],
    category: "Networking",
    github: "https://github.com/andrada/network-monitor",
    demo: "https://net-monitor-demo.vercel.app",
  },
  {
    id: 4,
    title: "Vulnerability Scanner Script",
    description:
      "Created a Python-based vulnerability scanner that checks for common misconfigurations, open ports, and outdated services across a local network.",
    technologies: ["Python", "Nmap", "Bash", "Linux"],
    category: "Cybersecurity",
    github: "https://github.com/andrada/vuln-scanner",
    demo: null,
  },
  {
    id: 5,
    title: "Personal Portfolio Website",
    description:
      "This portfolio — built with React, Vite, and Tailwind CSS. Features a dark cybersecurity-inspired theme, smooth animations, and responsive design.",
    technologies: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    category: "Web",
    github: "https://github.com/andrada/portfolio",
    demo: "https://andrada-portfolio.vercel.app",
  },
  {
    id: 6,
    title: "Subnetting & IP Addressing Research",
    description:
      "A comprehensive research paper and cheat-sheet covering IPv4 subnetting, CIDR notation, VLSM, and practical addressing schemes for enterprise environments.",
    technologies: ["Networking", "Research", "Documentation"],
    category: "Research",
    github: "https://github.com/andrada/subnetting-guide",
    demo: null,
  },
];

// ─── Certifications Data ──────────────────────────────────────
export const certifications = [
  {
    title: "CCNA — Cisco Certified Network Associate",
    issuer: "Cisco",
    date: "Expected 2026",
    status: "In Progress",
    icon: "Award",
  },
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "Expected 2026",
    status: "Planned",
    icon: "Shield",
  },
  {
    title: "CompTIA Network+",
    issuer: "CompTIA",
    date: "2025",
    status: "Completed",
    icon: "Network",
  },
  {
    title: "Google IT Support Professional",
    issuer: "Google / Coursera",
    date: "2024",
    status: "Completed",
    icon: "CheckCircle",
  },
];

export const achievements = [
  {
    title: "Dean's List — Fall 2024",
    description: "Recognized for academic excellence in Information Technology.",
  },
  {
    title: "Hackathon Finalist",
    description:
      "Placed in the top 5 at a university-level cybersecurity hackathon focused on CTF challenges.",
  },
  {
    title: "Networking Lab Assistant",
    description:
      "Selected to assist in the campus networking lab, helping peers with routing & switching configurations.",
  },
];

export const trainings = [
  "Cisco Networking Academy — CCNA Track",
  "TryHackMe — Pre-Security & Complete Beginner Path",
  "Coursera — Network Security & Database Vulnerabilities (IBM)",
  "Udemy — Python for Network Engineers",
  "Workshop: Intro to Ethical Hacking (University Cyber Club)",
];

// ─── Blog Posts Data ──────────────────────────────────────────
export const blogPosts = [
  {
    id: 1,
    title: "Understanding the OSI Model: A Practical Guide",
    excerpt:
      "A deep dive into each layer of the OSI model with real-world examples and packet captures to illustrate how data traverses a network.",
    category: "Networking Basics",
    date: "Jan 2026",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Setting Up a Home Lab with pfSense & VLANs",
    excerpt:
      "Step-by-step guide to building a home networking lab using pfSense as a firewall and configuring VLANs for network segmentation.",
    category: "Lab Setups",
    date: "Feb 2026",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Introduction to IDS/IPS: Snort Basics",
    excerpt:
      "Learn how Intrusion Detection and Prevention Systems work, and walk through setting up Snort rules to detect common attack patterns.",
    category: "Security Concepts",
    date: "Feb 2026",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Wireshark 101: Capturing & Analyzing Traffic",
    excerpt:
      "A beginner-friendly tutorial on using Wireshark to capture packets, apply filters, and find useful information in network traffic.",
    category: "Tools",
    date: "Mar 2026",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "Subnetting Made Simple",
    excerpt:
      "Struggling with subnetting? This post breaks down CIDR notation, subnet masks, and VLSM with worked examples and a handy cheat sheet.",
    category: "Networking Basics",
    date: "Mar 2026",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "Cryptography Fundamentals for Network Engineers",
    excerpt:
      "Understand symmetric vs asymmetric encryption, hashing, and how TLS/SSL keeps your data safe in transit.",
    category: "Security Concepts",
    date: "Mar 2026",
    readTime: "11 min read",
  },
];

// ─── Career Timeline ──────────────────────────────────────────
export const timeline = [
  {
    year: "2023",
    title: "Started IT Studies",
    description:
      "Began pursuing a degree in Information Technology with a focus on networking and infrastructure.",
  },
  {
    year: "2024",
    title: "First Certifications",
    description:
      "Earned Google IT Support Professional certificate and CompTIA Network+. Started hands-on lab work.",
  },
  {
    year: "2025",
    title: "Network Engineering Focus",
    description:
      "Deep-diving into routing, switching, and network design. Building complex lab topologies and studying for CCNA.",
  },
  {
    year: "2026",
    title: "Cybersecurity Transition Begins",
    description:
      "Starting to integrate security concepts — firewalls, IDS/IPS, pen testing basics — while pursuing Security+.",
  },
  {
    year: "Future",
    title: "Cybersecurity Specialist",
    description:
      "Goal: Become a SOC Analyst or Penetration Tester, combining networking expertise with advanced security skills.",
  },
];
