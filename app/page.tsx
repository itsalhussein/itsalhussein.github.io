const projects = [
  {
    marker: "DT",
    markerClass: "cyan",
    title: "Digital Twin",
    eyebrow: "Secure identity & access",
    status: "Native iOS → Flutter",
    description:
      "I built the native iOS version in Swift, integrating external access hardware through CoreBluetooth alongside NFC and QR flows, an encrypted on-device wallet, real-time push notifications, and a secure mailbox. The product later moved to Flutter.",
    tags: ["Swift", "CoreBluetooth", "NFC / QR", "Flutter", "Encrypted wallet"],
    impact: "Native hardware integration and secure identity flows carried into a broader mobile product.",
  },
  {
    marker: "PN",
    markerClass: "green",
    title: "Prayer Now",
    eyebrow: "Consumer iOS at scale",
    status: "Native iOS → cross-platform",
    description:
      "I contributed to native iOS background notification delivery and analytics instrumentation for a consumer Islamic product with 15M+ downloads. The product later evolved across platforms.",
    tags: ["Native iOS", "Background delivery", "Notifications", "Analytics", "Cross-platform"],
    impact: "Production reliability and product insight at a 15M+ download scale.",
    links: [
      {
        label: "View on App Store",
        href: "https://apps.apple.com/eg/app/prayer-now-azan-prayer-times/id1081440836",
      },
    ],
  },
  {
    marker: "P+",
    markerClass: "indigo",
    title: "P+",
    eyebrow: "Portfolio & project management",
    status: "Native iOS → KMP/CMP",
    description:
      "I worked on P+ as a native iOS product before leading its KMP/CMP transformation. I helped shape shared business logic and a maintainable Clean Architecture foundation for portfolio, program, and project workflows.",
    tags: ["iOS", "Kotlin Multiplatform", "Compose", "Clean Architecture", "Deep links"],
    impact: "Native product knowledge preserved while the architecture expanded across platforms.",
    links: [
      { label: "View P+", href: "https://apps.apple.com/eg/app/p/id6752709705" },
    ],
  },
  {
    marker: "S+",
    markerClass: "violet",
    title: "S+",
    eyebrow: "Enterprise strategy & OKRs",
    status: "Native iOS → KMP/CMP",
    description:
      "I worked on S+ as a native iOS product before leading its KMP/CMP transformation. The work brought strategy and OKR workflows onto shared business logic structured with Clean Architecture.",
    tags: ["iOS", "Kotlin Multiplatform", "Compose", "Clean Architecture", "LLM integration"],
    impact: "An iOS-first strategy product evolved onto a shared cross-platform foundation.",
    links: [
      { label: "View S+", href: "https://apps.apple.com/eg/app/s-3/id6753159927" },
    ],
  },
  {
    marker: "D",
    markerClass: "teal",
    title: "Diwan",
    eyebrow: "Enterprise collaboration",
    status: "Native iOS → KMP/CMP",
    description:
      "I worked on Diwan as a native iOS product before leading its KMP/CMP transformation as part of the P+ / S+ / Diwan suite. The shared architecture supports collaboration across the connected enterprise products.",
    tags: ["iOS", "Kotlin Multiplatform", "Compose", "Shared business logic", "Clean Architecture"],
    impact: "A distinct native product evolved without losing its place in the wider suite.",
  },
  {
    marker: "M",
    markerClass: "blue",
    title: "Muyassar",
    eyebrow: "Hajj operations platform",
    status: "Native iOS → Flutter",
    description:
      "I worked on Muyassar as a native iOS product first; it later moved to Flutter. The multi-role Hajj platform brings staff dashboards, medical profiles, accommodation tracking, and live mapping into one coordinated mobile experience.",
    tags: ["iOS", "Flutter", "Multi-role UX", "Live maps", "REST APIs"],
    impact: "Native product understanding carried into complex, role-specific cross-platform workflows.",
  },
  {
    marker: "PG",
    markerClass: "amber",
    title: "PDT Corporate · Guard",
    eyebrow: "Multi-tenant operations",
    status: "Native iOS → Flutter",
    description:
      "I worked on the native iOS products first; PDT Corporate and PDT Guard later moved to Flutter. My contribution covered authentication, REST integrations, responsive UI, real-time alerts, background execution, access workflows, and device pairing.",
    tags: ["iOS", "Flutter", "REST APIs", "Real-time alerts", "Background execution"],
    impact: "Native operational knowledge carried into two production cross-platform products.",
  },
];

const stack = [
  { title: "iOS engineering", items: ["Swift", "SwiftUI", "UIKit", "RxSwift", "CoreBluetooth", "HealthKit", "XCTest", "Instruments"] },
  { title: "Cross-platform evolution", items: ["Kotlin Multiplatform", "Compose Multiplatform", "Flutter", "Dart", "Shared business logic", "Clean Architecture"] },
  { title: "Architecture", items: ["Clean Architecture", "MVVM", "VIPER", "BLoC", "Dependency injection"] },
  { title: "APIs & data", items: ["REST", "Firebase", "Supabase", "Realm", "SQLite", "Caching"] },
  { title: "Device & OS", items: ["CoreBluetooth", "NFC", "QR", "HealthKit", "Deep links", "Push notifications"] },
  { title: "Quality & release", items: ["Fastlane", "GitHub Actions", "CI/CD", "Crashlytics", "Performance profiling", "App Store lifecycle"] },
];

const experience = [
  { company: "Master Team", role: "Senior Mobile Engineer", dates: "2024 — Present", note: "Supporting the development and maintenance of iOS projects while leading shared KMP/CMP architecture across an enterprise product suite." },
  { company: "PDT Solutions", role: "iOS & Flutter Developer · Part-time", dates: "2024 — 2026", note: "Shipped secure identity, corporate operations, and security products." },
  { company: "Expert Apps", role: "iOS Developer", dates: "2023 — 2024", note: "Built Swift, UIKit, and RxSwift products; contributed to API delivery, CI/CD, crash debugging, and performance work." },
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
            <p className="kicker">Senior iOS Engineer</p>
            <h1 id="hero-title">Alhussein<br />Anwar</h1>
            <span className="title-rule" aria-hidden="true" />
            <h2>Native iOS depth.<br />Cross-platform architecture.</h2>
            <p className="hero-summary">
              I ship native iOS products in Swift, UIKit, and SwiftUI—from architecture and
              device integrations through App Store release. When products evolve to KMP/CMP
              or Flutter, I carry the validated native product knowledge into the new architecture.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View selected work <span aria-hidden="true">↓</span></a>
              <a className="button button-secondary" href="https://linkedin.com/in/itsalhussein" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
            <div className="availability">
              <span className="pulse" aria-hidden="true" />
              <strong>6+ years shipping iOS &amp; mobile</strong>
              <span>· Swift · UIKit · SwiftUI</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Native iOS engineering and cross-platform architecture overview">
            <div className="orbit orbit-one" aria-hidden="true" />
            <div className="orbit orbit-two" aria-hidden="true" />
            <div className="code-card code-card-top">
              <span className="code-label">iOS FOUNDATION</span>
              <span className="code-value">Swift · UIKit · SwiftUI</span>
              <span className="code-meta">Architecture · APIs · release</span>
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
                <span className="screen-kicker">NATIVE iOS</span>
                <strong>Built in Swift.</strong>
                <div className="screen-chart"><i /><i /><i /><i /><i /></div>
                <div className="screen-row"><span /> <span /></div>
              </div>
            </div>
            <div className="code-card code-card-bottom">
              <span className="code-label">PLATFORM EVOLUTION</span>
              <span className="code-value">KMP/CMP · Flutter</span>
              <span className="code-meta">Native knowledge preserved</span>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Career highlights">
          <div><strong>15M+</strong><span>downloads on a product I supported</span></div>
          <div><strong>10+</strong><span>production iOS apps at Ultimate Solutions</span></div>
          <div><strong>13+</strong><span>enterprise clients across the P+ suite</span></div>
          <div><strong>6+</strong><span>years shipping iOS and mobile products</span></div>
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
              <h2 id="stack-title">iOS depth, with room to evolve.</h2>
            </div>
            <p>Native iOS is the foundation. Cross-platform architecture is the next step when the product and team genuinely benefit from it.</p>
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
            <h2 id="about-title">Native product knowledge that survives the migration.</h2>
            <p>I’m a Senior iOS Engineer based in Giza, Egypt. For 6+ years I’ve built and maintained native Apple-platform products in Swift, UIKit, and SwiftUI, from interface details and device APIs to release and production support.</p>
            <p>That native product knowledge has also enabled responsible transformations to Kotlin/Compose Multiplatform and Flutter. I understand the behavior, platform constraints, and product decisions before deciding what should be shared.</p>
            <p>I’ve worked on secure physical-access flows, enterprise portfolio systems, workforce operations, fitness products, and consumer apps at significant scale. That range has made me comfortable moving between interface details, device APIs, shared architecture, production debugging, and store compliance.</p>
            <p><strong>I care about systems that remain understandable after launch.</strong> Clear boundaries, resilient data flows, useful instrumentation, and interfaces that feel native to the platform.</p>
            <div className="about-facts">
              <div><span>Based</span><strong>Giza, Egypt</strong></div>
              <div><span>Languages</span><strong>Arabic · English</strong></div>
              <div><span>Focus</span><strong>Swift · UIKit · SwiftUI</strong></div>
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
        <p>© 2026 · Senior iOS Engineer</p>
      </footer>
    </div>
  );
}
