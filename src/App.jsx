import { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Mail,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Code2,
  BriefcaseBusiness,
  GraduationCap,
  Award,
  Trophy,
  Download,
  MapPin,
  ExternalLink,
} from "lucide-react";
import "./App.css";

function Github({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-1.94c-3.16.69-3.83-1.52-3.83-1.52-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.13 1.16a10.8 10.8 0 0 1 5.7 0c2.17-1.47 3.13-1.16 3.13-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.65 5.31-5.18 5.59.41.35.77 1.04.77 2.1v3.12c0 .3.2.66.79.55 4.51-1.5 7.77-5.76 7.77-10.78C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}
function Linkedin({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const PROFILE = {
  name: "MOHAMMED KAMRAN ALI",
  role: "JAVA FULL STACK DEVELOPER",
  tagline:
    "Building scalable web applications and digital experiences using Java, Spring Boot, React.js, and cloud fundamentals.",
  location: "HYDERABAD, INDIA",
  email: "sufiyankamran@gmail.com",
  phone: "+91 9398766563",
  github: "https://github.com/sufiyankamran07",
  linkedin: "https://linkedin.com/in/mohammedkamranali07",
  resumeUrl: "Mohammed_Kamran_Ali_Resume.pdf",
  photoSrc: "/prof.jpeg",
};

const EXPERIENCE = [
  {
    label: "CURRENT",
    role: "GRADUATE ENGINEER TRAINEE (GET) · JAVA FULL STACK DEVELOPER",
    company: "HCLTECH",
    duration: "FEB 2026 — PRESENT · HYDERABAD, INDIA",
    contributions: [
      "Contributing to Java full stack application development leveraging Java, Spring Boot, React.js, SQL, and RESTful APIs.",
      "Supported multiple Spring Boot migration initiatives by analyzing application components and building a Copilot AI agent to assist with version migration.",
      "Resolved React.js defects raised in Jira through systematic debugging and root-cause analysis, ensuring reliable application functionality.",
      "Strengthened code quality and test coverage through test-case development, defect validation, and verification across the development lifecycle.",
    ],
    tags: ["Java", "Spring Boot", "React.js", "SQL", "RESTful APIs"],
  },
  {
    label: "TRAINING",
    role: "JAVA FULL STACK TRAINEE",
    company: "HCLTECH × HCL GUVI",
    duration: "SEP 2025 — JAN 2026 · CHENNAI, INDIA",
    contributions: [
      "Built proficiency across Java, Spring Boot, React.js, JavaScript, SQL, REST APIs, and Microservices, applying Spring Data JPA, layered architecture, and DTOs.",
      "Engineered a Food Truck full stack application with authentication, 3 role-based users (Manager, Staff, Customer), and 4 key workflows.",
    ],
    tags: ["Java", "Spring Boot", "React.js", "JavaScript", "SQL"],
  },
];

const PROJECTS = [
  {
    id: "PROJECT_01",
    status: "COMPLETED",
    name: "FOOD TRUCK MICROSERVICES SYSTEM",
    problem:
      "A food truck needed a system to handle ordering, menu management, inventory, and sales insight across three different kinds of users at once.",
    role: "Full stack developer — built the backend services and the React frontend.",
    tech: ["Java", "Spring Boot", "React.js", "Spring Data JPA", "Eureka", "API Gateway", "Feign Client"],
    features: [
      "Authentication with 3 role-based users: Manager, Staff, and Customer",
      "4 key workflows: customer ordering, menu management, inventory updates, and sales insight",
      "RESTful APIs built with Spring Boot, Spring Data JPA, and DTO-based design",
      "Microservices communication via Eureka service discovery, API Gateway, and Feign Client",
    ],
    category: "FULL STACK / MICROSERVICES",
    github: "", // EDIT: repo link
    demo: "", // EDIT: live demo link if any
    caseStudy: {
      requirements: "Support 3 distinct roles (Manager, Staff, Customer) and 4 workflows — ordering, menu management, inventory, and sales insight — behind a single authenticated system.",
      architecture: "Spring Boot microservices communicating through Eureka for service discovery, an API Gateway for routing, and Feign Client for inter-service calls, with Spring Data JPA and DTOs for data access.",
      challenges: "// EDIT: a real obstacle you hit building the microservices communication or role-based auth, and how you solved it",
    },
  },
  {
    id: "PROJECT_02",
    status: "IN PROGRESS",
    name: "AUTOMATED WEED DETECTION",
    problem:
      "Manually distinguishing visually similar weed species — Charlock, Cleavers, BlackGrass — from crop plants like Maize is slow and error-prone for farmers.",
    role: "Built the classification pipeline: data preprocessing, model training, augmentation, and evaluation.",
    tech: ["Python", "PyTorch", "ResNet50", "EfficientNet-B0", "GAN", "UNet", "SPADE"],
    features: [
      "Plant species classification using ResNet50 and EfficientNet-B0 CNN architectures",
      "GAN-based augmentation with UNet and SPADE variants for high-fidelity image translation on limited datasets",
      "Real-time inference pipeline with diagnostics: confusion matrices, SSIM comparisons, and accuracy graphs",
    ],
    category: "ML / COMPUTER VISION",
    github: "",
    demo: "",
    caseStudy: {
      requirements: "Reliably distinguish visually similar weed species from crop plants using only a limited labeled image dataset.",
      architecture: "ResNet50 and EfficientNet-B0 backbones for classification, with GAN-based augmentation (UNet, SPADE) generating additional training images to improve generalization.",
      challenges: "Limited training data was the core constraint — addressed with GAN-based augmentation (UNet and SPADE) to synthesize additional, realistic training images.",
    },
  },
  {
    id: "PROJECT_03",
    status: "DEPLOYED",
    name: "INSTITUTE WEBSITE WITH AWS DEPLOYMENT",
    problem:
      "An educational institution needed a responsive online presence to streamline admissions, feedback collection, and information delivery.",
    role: "Designed and developed the site end-to-end, then deployed and configured hosting.",
    tech: ["HTML", "CSS", "Bootstrap", "PHP", "AWS EC2"],
    features: [
      "Responsive, interactive UI built with HTML, CSS, and Bootstrap",
      "Real-time form submissions and dynamic content rendering via PHP",
      "Deployed on AWS EC2 for high availability, scalability, and secure access",
    ],
    category: "WEB / CLOUD",
    github: "https://github.com/sufiyankamran07/institutewebsite",
    demo: "https://sufiyankamran07.github.io/institutewebsite/",
    caseStudy: {
      requirements: "Give the institution a self-service way to handle admissions and feedback online, with content that updates without a developer.",
      architecture: "HTML/CSS/Bootstrap frontend, PHP for form handling and dynamic content, deployed on AWS EC2.",
      challenges: "Keeping the site highly available and secure on constrained infrastructure — handled through the AWS EC2 deployment configuration.",
    },
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Engineering, Computer Science & Engineering",
    school: "Maturi Venkata Subba Rao Engineering College, Hyderabad",
    year: "2021 — 2025",
    detail: "CGPA: 8.1/10.0.",
    Coursework: "Coursework: Programming Languages, Data Structures, Web Development, Software Engineering, Operating Systems, Algorithms, Artificial Intelligence, Computer Networks.",
  },
  {
    degree: "Intermediate (MPC) — Mathematics, Physics, Chemistry",
    school: "Narayana Junior College, Hyderabad",
    year: "2021",
    detail: "CGPA: 8.7/10.0.",
    Coursework: "Coursework: Mathematics, Physics, Chemistry.",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "The Progress Global High School, Hyderabad",
    year: "2019",
    detail: "CGPA: 8.5/10.0.",
  },
];

const CERTIFICATIONS = [
  { name: "AWS Cloud Foundation", issuer: "AWS Academy" },
  { name: "AWS Academy Machine Learning Foundation", issuer: "AWS Academy" },
  { name: "Cyber Security Essentials", issuer: "Cisco Networking Academy" },
  { name: "CCNA: Introduction to Networks", issuer: "Cisco Networking Academy" },
  { name: "Introduction to IoT", issuer: "Cisco Networking Academy" },
  { name: "Web Development", issuer: "SmartKnower.org" },
];

const ACHIEVEMENTS = ["Achieved an EAMCET rank under 10,000."];

const CODING_PROFILES = [
  { label: "GITHUB", value: "VIEW PROFILE", url: PROFILE.github, icon: Github },
  { label: "LEETCODE", value: "// EDIT: handle", url: "", icon: Code2 }, // EDIT: url
  { label: "LINKEDIN", value: PROFILE.name, url: PROFILE.linkedin, icon: Linkedin },
];

const NAV_ITEMS = ["HOME", "ABOUT", "STACK", "EXPERIENCE", "PROJECTS", "EDUCATION", "CONTACT"];

/* ---------- helper hooks / components ---------- */

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

// Matrix-style digital rain, drawn on a fixed full-viewport canvas.
function MatrixRain() {
  const canvasRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let columns, drops;
    const chars = "アイウエオカキクケコサシスセソ01アカサタナ$#@%&<>{}[]/\\";
    const fontSize = 16;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    }
    resize();
    window.addEventListener("resize", resize);

    function draw() {
      ctx.fillStyle = "rgba(2, 5, 4, 0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const y = drops[i] * fontSize;
        ctx.fillStyle = Math.random() > 0.94 ? "#c8ffc0" : "rgba(57, 255, 20, 0.55)";
        ctx.fillText(text, i * fontSize, y);
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      animationId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [reducedMotion]);

  if (reducedMotion) return null;
  return <canvas ref={canvasRef} className="matrix-canvas" aria-hidden="true" />;
}

// Thin progress bar across the top of the viewport, tracking scroll depth.
function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const height = h.scrollHeight - h.clientHeight;
      setPct(height > 0 ? (scrolled / height) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scroll-progress" style={{ width: `${pct}%` }} />;
}

// Wraps a block so it fades/slides in the first time it enters the viewport.
function Reveal({ children, className = "", delay = 0, as: Tag = "div", ...rest }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "in-view" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* ---------- main app ---------- */

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [booted, setBooted] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);

  // one orchestrated boot sequence on load, not per-section scroll effects
  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 150);
    return () => clearTimeout(t);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className={`app ${booted ? "booted" : ""}`}>
      <ScrollProgress />
      <MatrixRain />
      <div className="grid-background"></div>
      <div className="scanlines"></div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-logo">
          <span className="logo-bracket">[</span>
          KAMRAN.DEV
          <span className="logo-bracket">]</span>
        </div>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())}>
              {item}
            </button>
          ))}
        </nav>

        <div className="nav-status">
          <span className="status-dot"></span>
          AVAILABLE
        </div>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="terminal-label">
              <Terminal size={16} />
              SYSTEM.INIT
            </div>

            <p className="command-line">
              <span className="green">$</span> whoami
            </p>

            <div className="hero-name-row">
              <h1>
                {PROFILE.name.split(" ")[0]}
                <br />
                <span>{PROFILE.name.split(" ").slice(1).join(" ")}</span>
              </h1>

              <div className="hero-photo-frame">
                <div className="card-corner top-left"></div>
                <div className="card-corner top-right"></div>
                <div className="card-corner bottom-left"></div>
                <div className="card-corner bottom-right"></div>
                <img src={PROFILE.photoSrc} alt={PROFILE.name} onError={(e) => (e.target.style.opacity = 0)} />
              </div>
            </div>

            <div className="hero-role">
              <span className="line"></span>
              {PROFILE.role}
              <span className="line"></span>
            </div>

            <p className="hero-description">{PROFILE.tagline}</p>

            <div className="hero-buttons">
              <button className="primary-button" onClick={() => scrollToSection("projects")}>
                VIEW PROJECTS
                <ChevronDown size={18} />
              </button>

              <a className="secondary-button" href={PROFILE.resumeUrl} download>
                DOWNLOAD RESUME
                <Download size={18} />
              </a>

              <button className="secondary-button" onClick={() => scrollToSection("contact")}>
                CONTACT ME
                <Mail size={18} />
              </button>
            </div>
          </div>

          {/* TERMINAL */}
          <div className="hero-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span>kamran@dev:~</span>
              <Terminal size={15} />
            </div>

            <div className="terminal-body">
              <p>
                <span className="green">kamran@dev</span>:<span className="cyan">~</span>$ cat stack.txt
              </p>
              <div className="terminal-stack">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>React.js</span>
                <span>PostgreSQL</span>
                <span>Docker</span>
              </div>

              <p className="terminal-gap">
                <span className="green">kamran@dev</span>:<span className="cyan">~</span>$ system.status
              </p>
              <div className="system-status">
                <p>STATUS: <span>ONLINE</span></p>
                <p>LOCATION: <span>{PROFILE.location}</span></p>
                <p>ROLE: <span>{PROFILE.role}</span></p>
              </div>

              <p className="cursor-line">
                <span className="green">kamran@dev</span>:<span className="cyan">~</span>${" "}
                <span className="cursor"></span>
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div>
              <p className="section-tag">// ABOUT</p>
              <h2>DEVELOPER PROFILE</h2>
            </div>
          </div>

          <div className="about-grid">
            <Reveal className="hud-card">
              <div className="card-corner top-left"></div>
              <div className="card-corner top-right"></div>
              <div className="card-corner bottom-left"></div>
              <div className="card-corner bottom-right"></div>

              <div className="profile-icon">
                <Code2 size={42} />
              </div>

              <h3>{PROFILE.name}</h3>
              <p>
                Full Stack Developer with experience in modern web technologies, backend
                development, databases, cloud fundamentals, and software engineering practices.
              </p>

              <div className="profile-meta">
                <div>
                  <span>ROLE</span>
                  <strong>{PROFILE.role}</strong>
                </div>
                <div>
                  <span>LOCATION</span>
                  <strong>{PROFILE.location}</strong>
                </div>
                <div>
                  <span>CURRENTLY AT</span>
                  <strong>{EXPERIENCE[0].company}</strong>
                </div>
              </div>
            </Reveal>

            <Reveal className="about-text" delay={120}>
              <p>
                I enjoy building reliable and scalable applications across the frontend and
                backend. My experience spans React.js, Java, Spring Boot, REST APIs,
                PostgreSQL, Docker, Git, and modern software development practices.
              </p>
              <p>
                I specialize in {"// EDIT: e.g. 'building backend services that stay simple as they scale'"}, and
                I'm particularly interested in {"// EDIT: your genuine interest, e.g. distributed systems, dev tooling, ML"}.
              </p>

              <div className="about-terminal">
                <span className="green">$</span> cat mission.txt
                <br />
                <span className="muted">Build. Learn. Solve. Improve.</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* STACK */}
        <section id="stack" className="section">
          <div className="section-heading">
            <span className="section-number">02</span>
            <div>
              <p className="section-tag">// STACK</p>
              <h2>TECH ARSENAL</h2>
            </div>
          </div>

          <div className="skills-grid">
            {[
              { n: "01", title: "FRONTEND", items: ["JavaScript", "React.js", "HTML5", "CSS3", "REST API Integration"] },
              { n: "02", title: "BACKEND", items: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "RESTful APIs", "Microservices"] },
              { n: "03", title: "LANGUAGES", items: ["Java", "Python", "C", "C++", "SQL"] },
              { n: "04", title: "DATABASE", items: ["MySQL", "PostgreSQL", "SQL"] },
              { n: "05", title: "TOOLS", items: ["Git & GitHub", "Maven", "Jira", "Postman", "JUnit"] },
              { n: "06", title: "CLOUD", items: ["AWS EC2", "Cloud Fundamentals"] },
              { n: "07", title: "AI & MACHINE LEARNING", items: ["Machine Learning", "Deep Learning", "CNN", "GAN", "ResNet50", "EfficientNet-B0"] },
            ].map((s, i) => (
              <Reveal as="div" className="skill-card" key={s.n} delay={i * 70}>
                <span className="skill-number">{s.n}</span>
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-heading">
            <span className="section-number">03</span>
            <div>
              <p className="section-tag">// EXPERIENCE</p>
              <h2>CAREER TIMELINE</h2>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-line"></div>
            {EXPERIENCE.map((e, i) => (
              <Reveal as="div" className="timeline-item" key={e.company} delay={i * 120}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-label">{e.label}</span>
                  <h3>{e.role}</h3>
                  <h4>{e.company} · {e.duration}</h4>
                  <ul className="achievement-list">
                    {e.contributions.map((c, i2) => (
                      <li key={i2}>{c}</li>
                    ))}
                  </ul>
                  <div className="timeline-tags">
                    {e.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-heading">
            <span className="section-number">04</span>
            <div>
              <p className="section-tag">// PROJECTS</p>
              <h2>SELECTED WORK</h2>
            </div>
          </div>

          <div className="projects-grid">
            {PROJECTS.map((p, idx) => {
              const isOpen = expandedProject === p.id;
              return (
                <Reveal
                  as="article"
                  className={`project-card ${idx === 0 ? "featured" : ""}`}
                  key={p.id}
                  delay={idx * 100}
                >
                  <div className="project-top">
                    <span className="project-id">{p.id}</span>
                    <span className="project-status">{p.status}</span>
                  </div>

                  <h3>{p.name}</h3>
                  <p>{p.problem}</p>
                  <p className="project-role">
                    <strong>ROLE:</strong> {p.role}
                  </p>

                  <div className="project-tech">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  <ul className="feature-list">
                    {p.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>

                  <div className="project-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer">
                        <Github size={14} /> CODE
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer">
                        <ExternalLink size={14} /> DEMO
                      </a>
                    )}
                  </div>

                  <button
                    className="case-study-toggle"
                    onClick={() => setExpandedProject(isOpen ? null : p.id)}
                  >
                    {isOpen ? "HIDE CASE STUDY" : "VIEW CASE STUDY"}
                    <ChevronRight size={14} className={isOpen ? "rotated" : ""} />
                  </button>

                  <div className={`case-study ${isOpen ? "open" : ""}`}>
                    <div className="case-study-inner">
                      <p><strong>REQUIREMENTS</strong> — {p.caseStudy.requirements}</p>
                      <p><strong>ARCHITECTURE</strong> — {p.caseStudy.architecture}</p>
                      <p><strong>CHALLENGES</strong> — {p.caseStudy.challenges}</p>
                    </div>
                  </div>

                  <div className="project-footer">
                    <span>{p.category}</span>
                    <span>→</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* EDUCATION + CERTIFICATIONS + ACHIEVEMENTS */}
        <section id="education" className="section">
          <div className="section-heading">
            <span className="section-number">05</span>
            <div>
              <p className="section-tag">// CREDENTIALS</p>
              <h2>EDUCATION &amp; RECOGNITION</h2>
            </div>
          </div>

          <div className="credentials-grid">
            <Reveal className="credential-block">
              <h3><GraduationCap size={18} /> EDUCATION</h3>
              {EDUCATION.map((e, i) => (
                <div className="credential-item" key={i}>
                  <strong>{e.degree}</strong>
                  <span>{e.school} · {e.year}</span>
                  <p>{e.detail}</p>
                  <p>{e.Coursework}</p>
                </div>
              ))}
            </Reveal>

            <Reveal className="credential-block" delay={100}>
              <h3><Award size={18} /> CERTIFICATIONS</h3>
              {CERTIFICATIONS.map((c, i) => (
                <div className="credential-item" key={i}>
                  <strong>{c.name}</strong>
                  <span>{c.issuer}</span>
                </div>
              ))}
            </Reveal>

            <Reveal className="credential-block" delay={200}>
              <h3><Trophy size={18} /> ACHIEVEMENTS</h3>
              <ul className="achievement-list">
                {ACHIEVEMENTS.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="profiles-row">
            {CODING_PROFILES.map((p) => (
              <a key={p.label} href={p.url || "#"} target="_blank" rel="noreferrer" className="profile-chip">
                <p.icon size={16} />
                {p.label}
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <span className="section-number">06</span>
            <div>
              <p className="section-tag">// CONTACT</p>
              <h2>OPEN CHANNEL</h2>
            </div>
          </div>

          <Reveal className="contact-container">
            <div className="contact-message">
              <p className="contact-command">
                <span className="green">$</span> initiate_connection
              </p>
              <h2>LET'S BUILD<br />SOMETHING.</h2>
              <p>Have a project, opportunity, or technical idea? Feel free to connect.</p>
              <p className="contact-location"><MapPin size={14} /> {PROFILE.location} · {PROFILE.phone}</p>
            </div>

            <div className="contact-links">
              <a href={`mailto:${PROFILE.email}`} className="contact-link">
                <Mail size={22} />
                <div>
                  <span>EMAIL</span>
                  <strong>{PROFILE.email}</strong>
                </div>
              </a>

              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <BriefcaseBusiness size={22} />
                <div>
                  <span>LINKEDIN</span>
                  <strong>{PROFILE.name}</strong>
                </div>
              </a>

              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="contact-link">
                <Code2 size={22} />
                <div>
                  <span>GITHUB</span>
                  <strong>VIEW PROFILE</strong>
                </div>
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer">
        <div><span className="green">©</span> 2026 KAMRAN.DEV</div>
        <div className="footer-status">
          <span className="status-dot"></span>
          SYSTEM ONLINE
        </div>
        <nav className="footer-nav">
          {NAV_ITEMS.slice(0, 4).map((item) => (
            <button key={item} onClick={() => scrollToSection(item.toLowerCase())}>
              {item}
            </button>
          ))}
        </nav>
      </footer>
    </div>
  );
}

export default App;
