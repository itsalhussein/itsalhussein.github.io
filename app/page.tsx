const projects = [
  {
    marker: "DT",
    markerClass: "coral",
    title: "Digital Twin",
    eyebrow: "Secure identity & access",
    status: "Private product",
    description:
      "A Flutter digital identity experience connecting people to physical spaces. I built NFC, BLE, and QR access flows, an encrypted on-device wallet, real-time push notifications, and a secure in-app mailbox.",
    tags: ["Flutter", "NFC", "BLE / GATT", "QR", "Encrypted wallet"],
    impact: "One app. Three access technologies. Security at every layer.",
  },
  {
    marker: "P+",
    markerClass: "violet",
    title: "P+ · S+ · Diwan",
    eyebrow: "Enterprise KMP / CMP suite",
    status: "13+ enterprise clients",
    description:
      "A connected portfolio, strategy, and project-management suite for iOS and Android. At Master Team, I led its KMP/CMP transformation and architected shared business logic with Clean Architecture.",
    tags: ["Kotlin Multiplatform", "Compose", "Clean Architecture", "LLM integration"],
    impact: "Shared business logic across a three-product enterprise suite.",
    links: [
      { label: "View P+", href: "https://apps.apple.com/eg/app/p/id6752709705" },
      { label: "View S+", href: "https://apps.apple.com/eg/app/s-3/id6753159927" },
    ],
  },
  {
    marker: "PN",
    markerClass: "green",
    title: "Prayer Now",
    eyebrow: "Consumer app at scale",
    status: "15M+ downloads",
    description:
      "A large-scale Islamic application serving millions of people. I contributed to reliable background notification delivery and analytics instrumentation for a high-volume consumer product.",
    tags: ["iOS", "Background delivery", "Notifications", "Analytics"],
    impact: "Production reliability for an audience of 15M+ downloads.",
    links: [
      {
        label: "View on App Store",
        href: "https://apps.apple.com/eg/app/prayer-now-azan-prayer-times/id1081440836",
      },
    ],
  },
  {
    marker: "M",
    markerClass: "blue",
    title: "Muyassar",
    eyebrow: "Hajj operations platform",
    status: "Multi-role product",
    description:
      "A Flutter application for complex Hajj operations, bringing staff dashboards, medical profiles, accommodation tracking, and live mapping into one coordinated mobile experience.",
    tags: ["Flutter", "Multi-role UX", "Live maps", "REST APIs"],
    impact: "Operational complexity turned into clear, role-specific workflows.",
  },
  {
    marker: "PG",
    markerClass: "amber",
    title: "PDT Corporate · Guard",
    eyebrow: "Multi-tenant operations",
    status: "Two production apps",
    description:
      "Flutter products for workforce and security operations. My work covered responsive UI, authentication, REST integrations, real-time alerts, background execution, access workflows, and device pairing.",
    tags: ["Flutter", "Multi-tenant", "Real-time alerts", "Background sync"],
    impact: "Connected people, sites, permissions, and time-sensitive operations.",
  },
];

const stack = [
  { title: "Cross-platform", items: ["Flutter", "Dart", "Kotlin Multiplatform", "Compose Multiplatform"] },
  { title: "Native mobile", items: ["Swift", "SwiftUI", "UIKit", "Kotlin", "Android SDK", "Jetpack Compose"] },
  { title: "Architecture", items: ["Clean Architecture", "MVVM", "VIPER", "BLoC", "Dependency injection"] },
  { title: "APIs & data", items: ["REST", "Firebase", "Supabase", "Realm", "SQLite", "Caching"] },
  { title: "Device & OS", items: ["NFC", "BLE / GATT", "QR", "HealthKit", "Deep links", "Push notifications"] },
  { title: "Quality & release", items: ["XCTest", "Kotlin Test", "Fastlane", "GitHub Actions", "Instruments", "Crashlytics"] },
];

const experience = [
  { company: "Master Team", role: "Senior Mobile Engineer", dates: "2024 — Present", note: "Leading shared KMP/CMP architecture across an enterprise product suite." },
  { company: "PDT Solutions", role: "iOS & Flutter Developer · Part-time", dates: "2024 — 2026", note: "Shipped secure identity, corporate operations, and security products." },
  { company: "Expert Apps", role: "iOS Developer", dates: "2023 — 2024", note: "Built native iOS products, resilient API layers, and BLE device flows." },
  { company: "Ultimate Solutions", role: "iOS Developer & UI/UX Designer", dates: "2020 — 2023", note: "Developed and maintained 10+ production iOS applications." },
];

const publishedWork = [
  { label: "RMS Customer Menu", href: "https://apps.apple.com/eg/app/rms-customer-menu/id1537235915" },
  { label: "Medion Fitness", href: "https://apps.apple.com/eg/app/medion-fitness-pro/id1626834426" },
  { label: "BON App", href: "https://apps.apple.com/us/app/bon-app/id6471108499" },
  { label: "CashierMe", href: "https://apps.apple.com/eg/app/cashierme/id1598785614" },
  { label: "Onyx IX ESS", href: "https://apps.apple.com/eg/app/onyx-ix-ess/id1584098630" },
  { label: "Ultimate CRM", href: "https://apps.apple.com/eg/app/ultimate-crm/id1190319656" },
  { label: "Ultimate Store", href: "https://apps.apple.com/eg/app/ultimate-store/id1516955461" },
  { label: "Abgad", href: "https://apps.apple.com/eg/app/abgad/id1658425448" },
];

export default function Home() {
  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Alhussein Anwar, home">
          <span className="brand-dot" aria-hidden="true" />
          Alhussein Anwar
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#stack">Stack</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">Get in touch</a>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy reveal">
            <p className="kicker">Senior Flutter &amp; Mobile Engineer</p>
            <h1 id="hero-title">Alhussein<br />Anwar</h1>
            <span className="title-rule" aria-hidden="true" />
            <h2>Cross-platform reach.<br />Native-level depth.</h2>
            <p className="hero-summary">
              I build production mobile applications across fintech, enterprise, security,
              fitness, and consumer products—from architecture and device integrations to
              store release and the work that comes after launch.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View selected work <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="https://linkedin.com/in/itsalhussein" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
            <div className="availability">
              <span className="pulse" aria-hidden="true" />
              <strong>5+ years shipping mobile</strong>
              <span>· Flutter, iOS &amp; KMP/CMP</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Mobile engineering capability overview">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="code-card code-card-top">
              <span className="code-label">SHARED CORE</span>
              <span className="code-value">Clean Architecture</span>
              <span className="code-meta">iOS · Android</span>
            </div>
            <div className="phone phone-back" aria-hidden="true">
              <div className="phone-screen screen-green">
                <span className="phone-pill" />
                <div className="mini-grid"><i /><i /><i /><i /></div>
              </div>
            </div>
            <div className="phone phone-front" aria-hidden="true">
              <div className="phone-screen">
                <span className="phone-pill" />
                <span className="screen-kicker">MOBILE SYSTEMS</span>
                <strong>Built to ship.</strong>
                <div className="screen-chart"><i /><i /><i /><i /><i /></div>
                <div className="screen-row"><span /> <span /></div>
              </div>
            </div>
            <div className="code-card code-card-bottom">
              <span className="code-label">DEVICE LAYER</span>
              <span className="code-value">NFC · BLE · QR</span>
              <span className="code-meta">Secure physical access</span>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Career highlights">
          <div><strong>15M+</strong><span>downloads on a product I supported</span></div>
          <div><strong>10+</strong><span>production iOS apps at Ultimate Solutions</span></div>
          <div><strong>13+</strong><span>enterprise clients across the P+ suite</span></div>
          <div><strong>5+</strong><span>years shipping mobile products</span></div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="kicker">Selected work</p>
              <h2 id="work-title">Products with real stakes.</h2>
            </div>
            <p>Secure access. Enterprise coordination. Consumer scale. Each project below shows the problem, the engineering contribution, and the technologies that mattered.</p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className={`project-marker ${project.markerClass}`} aria-hidden="true">
                  <span>{project.marker}</span>
                  <i>{String(index + 1).padStart(2, "0")}</i>
                </div>
                <div className="project-body">
                  <div className="project-topline">
                    <p>{project.eyebrow}</p>
                    <span>{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-impact">{project.impact}</p>
                  <div className="tag-row">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  {project.links && (
                    <div className="project-links">
                      {project.links.map((link) => (
                        <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="more-work">
            <div>
              <p className="kicker">More shipped work</p>
              <h3>A broader production footprint.</h3>
              <p>Additional published products I worked on across fitness, finance, ERP, CRM, retail, and restaurant operations.</p>
            </div>
            <div className="work-cloud">
              {publishedWork.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">{item.label} <span aria-hidden="true">↗</span></a>
              ))}
            </div>
          </div>
        </section>

        <section className="section stack-section" id="stack" aria-labelledby="stack-title">
          <div className="section-heading compact">
            <div>
              <p className="kicker">Stack</p>
              <h2 id="stack-title">Built across the whole mobile system.</h2>
            </div>
            <p>Platform fluency matters. So does knowing where shared code should stop and native capability should begin.</p>
          </div>
          <div className="stack-grid">
            {stack.map((group, index) => (
              <article className="stack-card" key={group.title}>
                <span className="stack-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="tag-row">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-title">
          <div className="about-copy">
            <p className="kicker">About</p>
            <h2 id="about-title">An engineer who works from the product inward.</h2>
            <p>I’m a senior mobile engineer based in Giza, Egypt. My work spans Flutter, native iOS, and Kotlin/Compose Multiplatform, but the technology is never the headline—the product risk is.</p>
            <p>I’ve worked on secure physical-access flows, enterprise portfolio systems, workforce operations, fitness products, and consumer apps at significant scale. That range has made me comfortable moving between interface details, device APIs, shared architecture, production debugging, and store compliance.</p>
            <p><strong>I care about systems that remain understandable after launch.</strong> Clear boundaries, resilient data flows, useful instrumentation, and interfaces that feel native to the platform.</p>
            <div className="about-facts">
              <div><span>Based</span><strong>Giza, Egypt</strong></div>
              <div><span>Languages</span><strong>Arabic · English</strong></div>
              <div><span>Focus</span><strong>Flutter · iOS · KMP</strong></div>
              <div><span>Delivery</span><strong>App Store · Play Store</strong></div>
            </div>
          </div>
          <div className="timeline" aria-label="Experience">
            {experience.map((item) => (
              <article key={item.company}>
                <span className="timeline-dot" aria-hidden="true" />
                <p className="timeline-date">{item.dates}</p>
                <h3>{item.company}</h3>
                <p className="timeline-role">{item.role}</p>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="kicker">Contact</p>
            <h2 id="contact-title">Let’s build the next release.</h2>
            <p>Have a mobile product to ship, stabilize, or scale? Start with the problem you’re solving and where the product is today.</p>
          </div>
          <a className="contact-link" href="https://linkedin.com/in/itsalhussein" target="_blank" rel="noreferrer">
            <span>Connect on LinkedIn</span>
            <strong aria-hidden="true">↗</strong>
          </a>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top"><span className="brand-dot" aria-hidden="true" />Alhussein Anwar</a>
        <p>© 2026 · Senior Flutter &amp; Mobile Engineer</p>
      </footer>
    </div>
  );
}
