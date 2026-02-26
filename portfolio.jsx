import { useState, useEffect, useRef } from "react";

const data = {
  name: "Konrad Wisowski",
  title: "Full-Stack Developer",
  email: "konrad.wisowski@gmail.com",
  linkedin: "linkedin.com/in/konradwisowski",
  location: "Kraków, Poland",
  summary:
    "Full-stack developer with 3+ years of professional experience delivering Angular and Node.js web applications in hybrid enterprise environments. Hands-on with TypeScript across the full stack, REST API design, asynchronous programming patterns, and NoSQL databases. Comfortable working with existing codebases — diagnosing issues, refactoring components, and improving maintainability. PhD candidate combining analytical research skills with practical engineering.",
  skills: [
    { name: "Angular", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "JavaScript", level: 90 },
    { name: "Node.js / Express", level: 75 },
    { name: "MongoDB (NoSQL)", level: 72 },
    { name: "SCSS / CSS", level: 85 },
    { name: "REST APIs & Async", level: 80 },
    { name: "WCAG 2.1/2.2", level: 95 },
    { name: "React", level: 60 },
    { name: "HTML5", level: 92 },
  ],
  experience: [
    {
      title: "Frontend Developer",
      company: "Mednow",
      period: "Dec 2025 – Present",
      location: "Kraków (Hybrid)",
      description:
        "Building and maintaining Angular/TypeScript frontend features for a healthcare web platform. Implementing scalable component architecture and ensuring compliance with accessibility standards (WCAG 2.1/2.2).",
      tags: ["Angular", "TypeScript", "SCSS", "WCAG 2.1/2.2"],
    },
    {
      title: "Frontend Web Developer",
      company: "Comarch",
      period: "Mar 2025 – Dec 2025",
      location: "Kraków (Hybrid)",
      description:
        "Developed and maintained full-stack features using Angular on the frontend and Node.js on the backend. Participated in code reviews and contributed to architectural improvements within an enterprise-scale product.",
      tags: ["Angular", "TypeScript", "Node.js", "REST APIs"],
    },
    {
      title: "Junior Web Developer",
      company: "Comarch",
      period: "Oct 2022 – Mar 2025",
      location: "Kraków",
      description:
        "Full-stack web application development. Built Angular frontends and Node.js/Express backends, consumed and designed REST APIs, and worked with MongoDB for data persistence. Introduced and consistently applied WCAG accessibility standards across projects.",
      tags: ["Angular", "Node.js", "Express", "MongoDB", "WCAG"],
    },
    {
      title: "Web Development Intern",
      company: "Comarch",
      period: "Jul – Oct 2022",
      location: "Kraków",
      description:
        "Foundational experience in Angular, TypeScript, Node.js and MongoDB within a professional development environment.",
      tags: ["Angular", "TypeScript", "MongoDB"],
    },
    {
      title: "Lecturer Assistant",
      company: "Cracow University of Technology",
      period: "Oct 2024 – Sep 2025",
      location: "Kraków (Hybrid)",
      description:
        "Delivered lectures and practical classes in web development. Guided students through JavaScript, TypeScript, React, and MongoDB.",
      tags: ["JavaScript", "TypeScript", "React", "MongoDB", "Java"],
    },
    {
      title: "Automation Engineer",
      company: "Revolmatic sp. z o.o.",
      period: "Mar – Oct 2022",
      location: "Kraków",
      description: "Industrial automation engineering role prior to transitioning to web development.",
      tags: [],
    },
  ],
  education: [
    {
      degree: "PhD in Mechanical Engineering",
      school: "Cracow University of Technology",
      period: "2024 – 2028 (ongoing)",
      note: "Research on digital asset lifecycle management and web accessibility optimisation.",
    },
    {
      degree: "MSc in Automation & Robotics",
      school: "Cracow University of Technology",
      period: "2023 – 2024",
    },
    {
      degree: "BEng in Automation & Robotics",
      school: "Cracow University of Technology",
      period: "2019 – 2023",
    },
    {
      degree: "BEng in Safety Engineering",
      school: "Cracow University of Technology",
      period: "2018 – 2022",
    },
  ],
  publication: {
    title: "WCAG 2.1/2.2: An Optimisation Technology for Digital Asset Lifecycle Management",
    venue: "Peer-reviewed research paper · Cracow University of Technology",
    description:
      "Demonstrates the application of accessibility standards as an engineering optimisation tool within digital asset lifecycle processes.",
  },
  courses: [
    "Angular – Advanced Course. SPA Web Application Framework",
    "Applying WCAG (Web Content Accessibility Guidelines) in web development and adaptation",
  ],
};

const NAV = ["About", "Skills", "Experience", "Education", "Publication"];

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [visible, setVisible] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setActive(e.target.dataset.section);
            setVisible((v) => ({ ...v, [e.target.dataset.section]: true }));
          }
        });
      },
      { threshold: 0.25 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={styles.root}>
      <style>{css}</style>

      {/* ── SIDEBAR ── */}
      <aside style={styles.sidebar}>
        <div style={styles.sideInner}>
          <div style={styles.avatar}>KW</div>
          <h1 style={styles.sideName}>Konrad<br />Wisowski</h1>
          <p style={styles.sideTitle}>Full-Stack Developer</p>
          <div style={styles.sideDivider} />

          <nav style={styles.nav}>
            {NAV.map((n) => (
              <button
                key={n}
                onClick={() => scrollTo(n)}
                style={{
                  ...styles.navBtn,
                  ...(active === n ? styles.navActive : {}),
                }}
              >
                <span style={styles.navDot(active === n)} />
                {n}
              </button>
            ))}
          </nav>

          <div style={styles.sideContact}>
            <a href={`mailto:${data.email}`} style={styles.contactLink}>
              <span style={styles.contactIcon}>✉</span>
              <span style={styles.contactText}>{data.email}</span>
            </a>
            <div style={styles.contactRow}>
              <span style={styles.contactIcon}>📍</span>
              <span style={styles.contactText}>{data.location}</span>
            </div>
            <a href={`https://${data.linkedin}`} target="_blank" rel="noreferrer" style={styles.contactLink}>
              <span style={styles.contactIcon}>in</span>
              <span style={styles.contactText}>LinkedIn</span>
            </a>
          </div>
        </div>
      </aside>

      {/* ── MOBILE HEADER ── */}
      <header style={styles.mobileHeader}>
        <span style={styles.mobileName}>Konrad Wisowski</span>
        <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
        {menuOpen && (
          <div style={styles.mobileMenu}>
            {NAV.map((n) => (
              <button key={n} onClick={() => scrollTo(n)} style={styles.mobileNavBtn}>
                {n}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── MAIN ── */}
      <main style={styles.main}>

        {/* ABOUT */}
        <section
          data-section="About"
          ref={(el) => (sectionRefs.current["About"] = el)}
          style={{ ...styles.section, ...(visible["About"] ? styles.sectionVisible : {}) }}
        >
          <div style={styles.heroTag}>Available for new opportunities</div>
          <h2 style={styles.heroName}>
            {data.name.split(" ").map((w, i) => (
              <span key={i} style={{ display: "block", animationDelay: `${i * 0.12}s` }} className="fadeUp">
                {w}
              </span>
            ))}
          </h2>
          <p style={styles.heroTitle}>{data.title}</p>
          <p style={styles.summaryText}>{data.summary}</p>

          <div style={styles.quickTags}>
            {["Angular", "TypeScript", "Node.js", "MongoDB", "WCAG 2.1/2.2"].map((t) => (
              <span key={t} style={styles.quickTag}>{t}</span>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section
          data-section="Skills"
          ref={(el) => (sectionRefs.current["Skills"] = el)}
          style={{ ...styles.section, ...(visible["Skills"] ? styles.sectionVisible : {}) }}
        >
          <SectionLabel>Skills</SectionLabel>
          <h3 style={styles.sectionTitle}>Technical Expertise</h3>
          <div style={styles.skillsGrid}>
            {data.skills.map((s, i) => (
              <div key={s.name} style={styles.skillItem} className="fadeUp" >
                <div style={styles.skillHeader}>
                  <span style={styles.skillName}>{s.name}</span>
                  <span style={styles.skillPct}>{s.level}%</span>
                </div>
                <div style={styles.skillBar}>
                  <div
                    className="skillFill"
                    style={{
                      ...styles.skillFill,
                      "--w": `${s.level}%`,
                      animationDelay: `${i * 0.07}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div style={styles.coursesBox}>
            <p style={styles.coursesLabel}>Courses & Certifications</p>
            {data.courses.map((c) => (
              <div key={c} style={styles.courseItem}>
                <span style={styles.courseDot}>◆</span> {c}
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          data-section="Experience"
          ref={(el) => (sectionRefs.current["Experience"] = el)}
          style={{ ...styles.section, ...(visible["Experience"] ? styles.sectionVisible : {}) }}
        >
          <SectionLabel>Experience</SectionLabel>
          <h3 style={styles.sectionTitle}>Professional History</h3>
          <div style={styles.timeline}>
            {data.experience.map((exp, i) => (
              <div key={i} style={styles.timelineItem} className="fadeUp">
                <div style={styles.timelineLine}>
                  <div style={styles.timelineDot} />
                  {i < data.experience.length - 1 && <div style={styles.timelineConnector} />}
                </div>
                <div style={styles.timelineContent}>
                  <div style={styles.expHeader}>
                    <div>
                      <h4 style={styles.expTitle}>{exp.title}</h4>
                      <p style={styles.expCompany}>{exp.company}</p>
                    </div>
                    <div style={styles.expMeta}>
                      <span style={styles.expPeriod}>{exp.period}</span>
                      <span style={styles.expLocation}>{exp.location}</span>
                    </div>
                  </div>
                  <p style={styles.expDesc}>{exp.description}</p>
                  {exp.tags.length > 0 && (
                    <div style={styles.tagRow}>
                      {exp.tags.map((t) => (
                        <span key={t} style={styles.tag}>{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section
          data-section="Education"
          ref={(el) => (sectionRefs.current["Education"] = el)}
          style={{ ...styles.section, ...(visible["Education"] ? styles.sectionVisible : {}) }}
        >
          <SectionLabel>Education</SectionLabel>
          <h3 style={styles.sectionTitle}>Academic Background</h3>
          <div style={styles.eduGrid}>
            {data.education.map((e, i) => (
              <div key={i} style={styles.eduCard} className="fadeUp">
                <div style={styles.eduIndex}>0{i + 1}</div>
                <h4 style={styles.eduDegree}>{e.degree}</h4>
                <p style={styles.eduSchool}>{e.school}</p>
                <p style={styles.eduPeriod}>{e.period}</p>
                {e.note && <p style={styles.eduNote}>{e.note}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* PUBLICATION */}
        <section
          data-section="Publication"
          ref={(el) => (sectionRefs.current["Publication"] = el)}
          style={{ ...styles.section, ...(visible["Publication"] ? styles.sectionVisible : {}) }}
        >
          <SectionLabel>Research</SectionLabel>
          <h3 style={styles.sectionTitle}>Publication</h3>
          <div style={styles.pubCard} className="fadeUp">
            <div style={styles.pubAccent} />
            <div style={styles.pubBody}>
              <div style={styles.pubBadge}>Peer-Reviewed</div>
              <h4 style={styles.pubTitle}>{data.publication.title}</h4>
              <p style={styles.pubVenue}>{data.publication.venue}</p>
              <p style={styles.pubDesc}>{data.publication.description}</p>
            </div>
          </div>

          <div style={styles.footer}>
            <p style={styles.footerText}>Built with React · Designed as Angular-style SPA</p>
          </div>
        </section>

      </main>
    </div>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={styles.sectionLabel}>
      <span style={styles.sectionLabelLine} />
      <span style={styles.sectionLabelText}>{children.toUpperCase()}</span>
    </div>
  );
}

// ── STYLES ─────────────────────────────────────────────────────────────────

const C = {
  bg: "#0D1117",
  surface: "#161B22",
  border: "#21262D",
  accent: "#2F80ED",
  accentGlow: "rgba(47,128,237,0.15)",
  accentBright: "#58A6FF",
  text: "#E6EDF3",
  textMid: "#8B949E",
  textDim: "#484F58",
  sidebar: "#0A0F16",
};

const styles = {
  root: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: C.bg,
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    color: C.text,
  },

  // SIDEBAR
  sidebar: {
    width: 280,
    minWidth: 280,
    backgroundColor: C.sidebar,
    borderRight: `1px solid ${C.border}`,
    position: "sticky",
    top: 0,
    height: "100vh",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  },
  sideInner: {
    padding: "40px 28px",
    display: "flex",
    flexDirection: "column",
    gap: 0,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: `linear-gradient(135deg, ${C.accent}, #1a56b0)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: "0.05em",
    color: "#fff",
    marginBottom: 20,
    boxShadow: `0 0 24px ${C.accentGlow}`,
  },
  sideName: {
    fontSize: 24,
    fontWeight: 800,
    lineHeight: 1.15,
    margin: "0 0 8px",
    color: C.text,
    letterSpacing: "-0.02em",
  },
  sideTitle: {
    fontSize: 12,
    color: C.accent,
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 600,
    margin: "0 0 24px",
  },
  sideDivider: {
    height: 1,
    background: C.border,
    marginBottom: 28,
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    marginBottom: 36,
  },
  navBtn: {
    background: "none",
    border: "none",
    color: C.textMid,
    fontSize: 14,
    fontWeight: 500,
    padding: "10px 12px",
    borderRadius: 8,
    cursor: "pointer",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    gap: 10,
    transition: "all 0.2s",
    fontFamily: "inherit",
    letterSpacing: "0.01em",
  },
  navActive: {
    background: C.accentGlow,
    color: C.accentBright,
  },
  navDot: (active) => ({
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: active ? C.accentBright : C.textDim,
    transition: "all 0.2s",
    flexShrink: 0,
  }),
  sideContact: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    paddingTop: 24,
    borderTop: `1px solid ${C.border}`,
  },
  contactLink: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: C.textMid,
    textDecoration: "none",
    fontSize: 12,
    transition: "color 0.2s",
    cursor: "pointer",
  },
  contactRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  contactIcon: {
    fontSize: 13,
    width: 18,
    textAlign: "center",
    flexShrink: 0,
    fontStyle: "normal",
    fontWeight: 700,
    color: C.accent,
  },
  contactText: {
    fontSize: 12,
    color: C.textMid,
    wordBreak: "break-all",
  },

  // MOBILE
  mobileHeader: {
    display: "none",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: C.sidebar,
    borderBottom: `1px solid ${C.border}`,
    padding: "14px 20px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mobileName: { fontWeight: 700, fontSize: 15 },
  hamburger: {
    background: "none",
    border: "none",
    color: C.text,
    fontSize: 20,
    cursor: "pointer",
  },
  mobileMenu: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    background: C.sidebar,
    borderBottom: `1px solid ${C.border}`,
    padding: 12,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  mobileNavBtn: {
    background: "none",
    border: "none",
    color: C.textMid,
    fontSize: 14,
    fontWeight: 500,
    padding: "10px 14px",
    borderRadius: 8,
    cursor: "pointer",
    textAlign: "left",
    fontFamily: "inherit",
  },

  // MAIN
  main: {
    flex: 1,
    overflowY: "auto",
  },
  section: {
    minHeight: "100vh",
    padding: "80px 64px",
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  },
  sectionVisible: {
    opacity: 1,
    transform: "translateY(0)",
  },
  sectionLabel: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  sectionLabelLine: {
    display: "block",
    width: 32,
    height: 2,
    background: C.accent,
    borderRadius: 2,
  },
  sectionLabelText: {
    fontSize: 11,
    letterSpacing: "0.15em",
    color: C.accent,
    fontWeight: 700,
  },
  sectionTitle: {
    fontSize: 38,
    fontWeight: 800,
    letterSpacing: "-0.03em",
    margin: "0 0 48px",
    color: C.text,
    lineHeight: 1.1,
  },

  // HERO
  heroTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: C.accentGlow,
    border: `1px solid rgba(47,128,237,0.3)`,
    color: C.accentBright,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "6px 14px",
    borderRadius: 100,
    marginBottom: 32,
  },
  heroName: {
    fontSize: "clamp(52px, 7vw, 96px)",
    fontWeight: 900,
    letterSpacing: "-0.04em",
    lineHeight: 0.95,
    margin: "0 0 20px",
    color: C.text,
  },
  heroTitle: {
    fontSize: 20,
    color: C.accent,
    fontWeight: 500,
    letterSpacing: "0.02em",
    margin: "0 0 28px",
  },
  summaryText: {
    fontSize: 16,
    lineHeight: 1.75,
    color: C.textMid,
    maxWidth: 640,
    margin: "0 0 36px",
  },
  quickTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
  },
  quickTag: {
    background: C.surface,
    border: `1px solid ${C.border}`,
    color: C.textMid,
    fontSize: 13,
    fontWeight: 500,
    padding: "6px 14px",
    borderRadius: 6,
  },

  // SKILLS
  skillsGrid: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    maxWidth: 600,
    marginBottom: 48,
  },
  skillItem: { display: "flex", flexDirection: "column", gap: 8 },
  skillHeader: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  skillName: { fontSize: 14, fontWeight: 600, color: C.text },
  skillPct: { fontSize: 13, color: C.accent, fontWeight: 700, fontVariantNumeric: "tabular-nums" },
  skillBar: {
    height: 6,
    background: C.surface,
    borderRadius: 100,
    overflow: "hidden",
    border: `1px solid ${C.border}`,
  },
  skillFill: {
    height: "100%",
    background: `linear-gradient(90deg, ${C.accent}, ${C.accentBright})`,
    borderRadius: 100,
    width: 0,
    animation: "skillGrow 1s ease forwards",
  },
  coursesBox: {
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    padding: "24px 28px",
    maxWidth: 600,
  },
  coursesLabel: {
    fontSize: 11,
    letterSpacing: "0.12em",
    color: C.accent,
    textTransform: "uppercase",
    fontWeight: 700,
    margin: "0 0 16px",
  },
  courseItem: {
    fontSize: 14,
    color: C.textMid,
    lineHeight: 1.6,
    padding: "8px 0",
    borderTop: `1px solid ${C.border}`,
  },
  courseDot: { color: C.accent, marginRight: 8, fontSize: 10 },

  // EXPERIENCE
  timeline: { display: "flex", flexDirection: "column", gap: 0 },
  timelineItem: { display: "flex", gap: 24 },
  timelineLine: { display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 20 },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: "50%",
    background: C.accent,
    border: `2px solid ${C.bg}`,
    boxShadow: `0 0 8px ${C.accentGlow}`,
    flexShrink: 0,
    marginTop: 6,
  },
  timelineConnector: { flex: 1, width: 2, background: C.border, marginTop: 4 },
  timelineContent: {
    paddingBottom: 40,
    flex: 1,
    paddingTop: 0,
  },
  expHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 12,
  },
  expTitle: { fontSize: 17, fontWeight: 700, margin: "0 0 4px", color: C.text },
  expCompany: { fontSize: 14, color: C.accent, fontWeight: 600, margin: 0 },
  expMeta: { display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 2 },
  expPeriod: { fontSize: 13, color: C.textMid, fontWeight: 500 },
  expLocation: { fontSize: 12, color: C.textDim },
  expDesc: { fontSize: 14, lineHeight: 1.7, color: C.textMid, margin: "0 0 12px" },
  tagRow: { display: "flex", flexWrap: "wrap", gap: 6 },
  tag: {
    fontSize: 12,
    fontWeight: 600,
    color: C.accentBright,
    background: C.accentGlow,
    border: `1px solid rgba(47,128,237,0.25)`,
    padding: "3px 10px",
    borderRadius: 4,
  },

  // EDUCATION
  eduGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20 },
  eduCard: {
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    padding: "28px 24px",
    position: "relative",
    overflow: "hidden",
    transition: "border-color 0.2s",
  },
  eduIndex: {
    fontSize: 48,
    fontWeight: 900,
    color: C.accentGlow,
    position: "absolute",
    top: 12,
    right: 18,
    lineHeight: 1,
    letterSpacing: "-0.04em",
    userSelect: "none",
  },
  eduDegree: { fontSize: 15, fontWeight: 700, margin: "0 0 8px", color: C.text, lineHeight: 1.4 },
  eduSchool: { fontSize: 13, color: C.accent, fontWeight: 500, margin: "0 0 6px" },
  eduPeriod: { fontSize: 12, color: C.textMid, margin: "0 0 0" },
  eduNote: { fontSize: 12, color: C.textDim, margin: "10px 0 0", lineHeight: 1.6 },

  // PUBLICATION
  pubCard: {
    display: "flex",
    background: C.surface,
    border: `1px solid ${C.border}`,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 60,
    maxWidth: 720,
  },
  pubAccent: { width: 6, background: `linear-gradient(180deg, ${C.accent}, #1a56b0)`, flexShrink: 0 },
  pubBody: { padding: "36px 40px" },
  pubBadge: {
    display: "inline-block",
    background: C.accentGlow,
    color: C.accentBright,
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "4px 12px",
    borderRadius: 4,
    marginBottom: 20,
    border: `1px solid rgba(47,128,237,0.3)`,
  },
  pubTitle: { fontSize: 20, fontWeight: 700, lineHeight: 1.4, margin: "0 0 10px", color: C.text },
  pubVenue: { fontSize: 13, color: C.accent, margin: "0 0 16px", fontWeight: 500 },
  pubDesc: { fontSize: 14, color: C.textMid, lineHeight: 1.7, margin: 0 },

  footer: { borderTop: `1px solid ${C.border}`, paddingTop: 32 },
  footerText: { fontSize: 12, color: C.textDim, margin: 0 },
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800;900&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body { height: 100%; }

  .fadeUp {
    animation: fadeUp 0.6s ease both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes skillGrow {
    from { width: 0; }
    to   { width: var(--w); }
  }

  a:hover span { color: #58A6FF !important; }

  @media (max-width: 768px) {
    aside { display: none !important; }
    header[style] { display: flex !important; }
    section { padding: 80px 24px 60px !important; min-height: auto !important; }
    h2 { font-size: 52px !important; }
  }
`;
