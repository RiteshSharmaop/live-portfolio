import { useEffect, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import "./App.css";

const DATA = {
  socials: [
    { Icon: Github, label: "GitHub", href: "https://github.com/" },
    { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/" },
    { Icon: Mail, label: "Email", href: "mailto:ritesh.lnct@gmail.com" },
  ],
  nav: ["About", "Experience", "Education", "Projects", "Skills", "Achievements"],
  experience: [
    {
      date: "Jul – Sep 2025",
      title: "Software Engineer Intern · Netlink Infocomm",
      points: [
        "Designed and built a real-time chat platform with React, Node.js and WebSocket.",
        "Wrote Jest unit tests that reached 90% coverage.",
        "Worked in an Agile team: stand-ups, code reviews and API testing.",
      ],
      tags: ["React", "Node.js", "WebSocket", "Jest"],
    },
  ],
  education: [
    {
      date: "Expected May 2026",
      title: "B.Tech, Computer Science and Engineering (AI & ML) · Lakshmi Narain College of Technology",
      text: "Bhopal, Madhya Pradesh. Coursework focus: Data Structures & Algorithms, Operating Systems, DBMS, System Design, Computer Networks and OOP.",
      tags: ["DSA", "OS", "DBMS", "System Design", "Networks", "OOP"],
    },
  ],
  projects: [
    {
      date: "Jan – Feb 2026",
      title: "RedisX: Redis-compatible CLI and server",
      href: "https://github.com/",
      text: "A Redis-compatible in-memory store written from scratch in C++, with a multi-client TCP server, a working CLI and a RESP encoder/decoder. It supports GET, SET, EXPIRE, lists and hashes, with thread-safe access, TTL expiry, lazy eviction and periodic disk persistence.",
      tags: ["C++", "TCP Sockets", "Multithreading", "RESP", "Linux"],
    },
    {
      date: "Aug – Oct 2025",
      title: "HexaHub AI Workspaces: multi-user IDE with AI",
      href: "https://github.com/",
      text: "A collaborative IDE for 7 users with under 100ms latency over WebSockets and Redis Pub/Sub. Code runs in isolated Docker containers, several LLMs (OpenAI, Gemini, Claude, LLaMA, DeepSeek) are orchestrated to cut hallucinations, and Stripe powers tiered plans.",
      tags: ["React", "Node.js", "MongoDB", "Redis", "Socket.io", "Docker", "Stripe"],
    },
    {
      date: "Dec 2024",
      title: "Secure Block: AI-driven cyber complaint platform",
      text: "A cybercrime reporting platform that ranks 200+ complaints by severity. A Random Forest classifier (85% accuracy) sorts them into low, moderate and high risk, and automated email alerts cut manual triage by 60%. Optimising the pipeline brought classification time from 12s to 6.8s.",
      tags: ["React", "PHP", "Python", "Scikit-learn", "MySQL"],
    },
  ],
  skills: [
    ["Languages", "C++, Java, Python, JavaScript, TypeScript, Go, HTML, CSS"],
    ["Frameworks", "React.js, Node.js, Express.js, Django, Tailwind CSS"],
    ["Databases", "MongoDB, PostgreSQL, Redis"],
    ["Tools", " Git, GitHub, Kafka, Redis, Docker, Linux, VS Code, Sublime Text, Eraser IO, Postman"],
    ["Concepts", "Data Structures & Algorithms, Operating Systems, Database Management Systems, System Design, Computer Networks, Object-Oriented Programming, Agile Environment"],
  ],
  achievements: [
    { date: "Codeforces", title: "Specialist (noob1204)", text: "Global ranks of 842, 859 and 933 in contests." },
    { date: "CodeChef", title: "3★ (riteshnub)", text: "Global ranks of 119, 138 and 454, and India ranks of 104 and 111." },
    { date: "Hackathon", title: "6th place · GeeksforGeeks Vultr Hackathon" },
    { date: "Coding club", title: "#6 · CodeBeta by Techvilla (LNCT Coding Club)" },
    { date: "Practice", title: "1000+ problems solved", text: "Across CodeChef, Codeforces, LeetCode and CSES." },
  ],
};

function Tags({ tags }) {
  return (
    <ul className="chips">
      {tags.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Item({ date, title, href, text, points, tags }) {
  return (
    <div className="item">
      <div className="date">{date}</div>
      <div>
        <h3>
          {href ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {text && <p>{text}</p>}
        {points && (
          <ul className="pts">
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
        {tags && <Tags tags={tags} />}
      </div>
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id}>
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const root = document.documentElement;
    const onMove = (e) => {
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section").forEach((s) => io.observe(s));

    return () => {
      window.removeEventListener("pointermove", onMove);
      io.disconnect();
    };
  }, []);

  return (
    <>
      <div className="site-notice" role="status">
        <div className="site-notice__track" aria-hidden="true">
          {[0, 1].map((sequence) => (
            <div className="site-notice__sequence" key={sequence}>
              {[0, 1, 2, 3].map((message) => (
                <p className="site-notice__message" key={message}>
                  site is not working because of lazy programmer
                  <span aria-hidden="true"> · </span>
                </p>
              ))}
            </div>
          ))}
        </div>
        <span className="sr-only">site is not working because of lazy programmer</span>
      </div>
      <div className="wrap">
        <header>
        <div>
          <h1>Ritesh Sharma</h1>
          <h2 className="role">Software Engineer</h2>
          <p className="tag">
            I build fast, reliable backends and real-time web apps, from Redis-style servers in C++ to collaborative IDEs.
          </p>
          <nav aria-label="Sections">
            <ul>
              {DATA.nav.map((n) => {
                const id = n.toLowerCase();
                return (
                  <li key={n}>
                    <a href={`#${id}`} className={active === id ? "on" : ""}>
                      {n}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <ul className="social">
          {DATA.socials.map(({ Icon, label, href }) => (
            <li key={label}>
              <a href={href} aria-label={label} title={label} target={label === "Email" ? undefined : "_blank"} rel="noopener noreferrer">
                <Icon size={24} />
              </a>
            </li>
          ))}
        </ul>
        </header>

        <main>
        <Section id="about" title="About">
          <p>
            I’m a Computer Science (AI &amp; ML) student at <b className="k">Lakshmi Narain College of Technology</b> in
            Bhopal. I like systems that have to be fast and correct: protocols, concurrency, caching and real-time messaging.
          </p>
          <p>
            I recently built a Redis-compatible data store from scratch in C++, and a multi-user IDE that blends several LLMs
            to give better coding suggestions. I also practise competitive programming and have solved over 1000 problems.
          </p>
          <p>My stack is Node.js, React, MongoDB, Redis and Docker, with C++ and Python when the job needs them.</p>
        </Section>

        <Section id="experience" title="Experience">
          {DATA.experience.map((x) => <Item key={x.title} {...x} />)}
        </Section>

        <Section id="education" title="Education">
          {DATA.education.map((x) => <Item key={x.title} {...x} />)}
        </Section>

        <Section id="projects" title="Projects">
          {DATA.projects.map((x) => <Item key={x.title} {...x} />)}
        </Section>

        <Section id="skills" title="Skills">
          <div className="skills">
            {DATA.skills.map(([k, v]) => (
              <div key={k}>
                <strong>{k}</strong>
                {v}
              </div>
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements">
          {DATA.achievements.map((x) => <Item key={x.title} {...x} />)}
        </Section>

       
  
      <footer>
        Crafted with <span className="heart">♡</span> in India by a psycho lazy
        developer who went AFK in Valorant but never AFK in procrastination.
        <br />
        Left mid-match because CSS bugs were easier to kill than his opponents
        (until one div refused to center itself). 🇮🇳💀
        <br />
        Get in touch at{" "}
        <a href="mailto:ritesh.lnct@gmail.com" className="mail">
          ritesh.lnct@gmail.com
        </a>.
      </footer>

        </main>
      </div>
    </>
  );
}
