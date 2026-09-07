/* eslint-disable @next/next/no-img-element -- Fixed local images must work on GitHub Pages without an image optimization server. */
import type { ReactNode } from "react";

const cv = "/Alhussein-Anwar-CV.pdf";
const linkedin = "https://linkedin.com/in/itsalhussein";
const experience = [
  { company: "Master Team", role: "Senior Mobile Engineer", dates: "Jan 2024 — Present", current: true,
    points: ["Led the Kotlin / Compose Multiplatform transformation of three separate products—P+, S+, and Diwan—serving 13+ enterprise clients across the suite.", "Architected shared business logic and integrated AI-powered task suggestions, analytics summaries, and deep linking."],
    stack: "Swift · Kotlin Multiplatform · Compose · Clean Architecture" },
  { company: "PDT Solutions", role: "iOS & Flutter Developer", dates: "Feb 2024 — Feb 2026", partTime: true,
    points: ["Built Digital Twin’s native iOS app and integrated physical-access hardware through Swift and CoreBluetooth.", "Shipped three Flutter products alongside native iOS work, with authentication, REST APIs, real-time alerts, and background execution."],
    stack: "Swift · Flutter · CoreBluetooth · NFC / QR" },
  { company: "Expert Apps", role: "iOS Developer", dates: "Jan 2023 — Jan 2024",
    points: ["Built Swift / UIKit / RxSwift apps with MVVM and Clean Architecture.", "Contributed to testing, CI/CD, production crash debugging, and performance profiling."],
    stack: "Swift · UIKit · RxSwift · XCTest · Fastlane" },
  { company: "Ultimate Solutions", role: "iOS Developer & UI/UX Designer", dates: "Feb 2020 — Jan 2023",
    points: ["Developed and maintained 10+ production iOS apps across enterprise and consumer products.", "Designed Figma flows, implemented UIKit interfaces, and integrated HealthKit and deep linking."],
    stack: "Swift · UIKit · HealthKit · Figma · App Store delivery" },
];
const expertise = [
  { title: "Mobile development", copy: "Native interfaces and shared product logic.", items: "Swift, SwiftUI, UIKit, Flutter, Dart, Kotlin / Compose Multiplatform" },
  { title: "Architecture & data", copy: "Maintainable systems behind the interface.", items: "Clean Architecture, MVVM, BLoC, REST, Firebase, Supabase, Realm, SQLite" },
  { title: "Devices & integrations", copy: "Connecting products to the world around them.", items: "CoreBluetooth, NFC, QR, HealthKit, deep links, push notifications, LLM APIs" },
  { title: "Quality & delivery", copy: "From design implementation to production support.", items: "Figma, XCTest, Kotlin Test, Fastlane, GitHub Actions, Instruments, Crashlytics" },
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
function Arrow({ direction = "up" }: { direction?: "up" | "down" | "right" }) {
  return <span className="arrow" aria-hidden="true">{direction === "down" ? "↓" : direction === "right" ? "→" : "↗"}</span>;
}
function ExternalLink({ href, children, className = "text-link" }: { href: string; children: ReactNode; className?: string }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<Arrow /><span className="sr-only"> (opens in a new tab)</span></a>;
}
function ProjectDetails({ title, children }: { title: string; children: ReactNode }) {
  return <details className="project-details"><summary>Explore my contribution<span className="sr-only"> to {title}</span><span className="detail-toggle" aria-hidden="true">+</span></summary><div className="detail-content">{children}</div></details>;
}
export default function Home() {
  return (
    <div id="top">
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header"><div className="header-inner container">
        <a className="brand" href="#top" aria-label="Alhussein Anwar, home"><span className="monogram" aria-hidden="true">aa<span>.</span></span><span>Alhussein Anwar</span></a>
        <nav aria-label="Primary navigation"><a href="#work">Work</a><a href="#experience">Experience</a><a href="#about">About</a><a href="#contact">Contact</a><a className="nav-cv" href={cv} download><span><span className="nav-cv-prefix">Download </span>CV</span><Arrow direction="down" /></a></nav>
        <button className="theme-toggle" type="button" data-theme-toggle aria-label="Dark mode" aria-pressed="false" title="Switch to dark mode" suppressHydrationWarning>
          <svg className="theme-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.5 13.1A8.5 8.5 0 0 1 10.9 3.5a8.5 8.5 0 1 0 9.6 9.6Z" /></svg>
          <svg className="theme-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
          <span className="theme-label">Theme</span>
        </button>
      </div></header>
      <main id="main" className="container">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy"><p className="eyebrow">ALHUSSEIN ANWAR / PRODUCT ENGINEER</p><h1 id="hero-title">Native iOS depth.<br /><span>Cross-platform delivery.</span></h1>
            <p className="hero-summary">I build and ship mobile products with Swift, Flutter, and Kotlin Multiplatform—from interfaces and device integrations to architecture and store release.</p>
            <a className="hero-proof" href="#prayer-now"><strong>15M+ downloads</strong><span>Prayer Now · Native iOS contributor</span><Arrow direction="right" /></a>
            <div className="hero-actions"><a className="button primary" href="#work">View selected work <Arrow direction="down" /></a><a className="button secondary" href={cv} download>Download CV <span className="file-label">PDF</span></a></div>
            <p className="location">Giza, Egypt <span aria-hidden="true">·</span> Arabic & English</p>
          </div>
          <aside className="profile-brief" aria-label="Career at a glance"><p className="eyebrow">AT A GLANCE</p><div className="brief-years"><strong>6<span>+</span></strong><p>years building<br />production mobile apps</p></div>
            <dl><div><dt>Currently</dt><dd>Senior Mobile Engineer<span>Master Team · Since 2024</span></dd></div><div><dt>Core platforms</dt><dd>iOS · Android<span>Swift · Flutter · KMP / CMP</span></dd></div><div><dt>Product experience</dt><dd>Enterprise · Security · Consumer</dd></div></dl>
            <a href="#experience" className="text-link">See career history <Arrow direction="right" /></a>
          </aside>
        </section>
        <section id="work" className="section work-section" aria-labelledby="work-title">
          <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2 id="work-title">Products I’ve helped build.</h2></div><p>What I worked on,<br />and what I delivered.</p></div>
          <div className="featured-projects">
            <article className="project project-featured project-spotlight" id="prayer-now">
              <div className="project-main">
                <div className="project-meta"><span>FEATURED / CONSUMER iOS AT SCALE</span><span>01</span></div>
                <h3>Prayer Now</h3>
                <p className="project-subtitle">My largest app contribution by downloads.</p>
                <div className="project-evidence spotlight-evidence"><strong>15M+</strong><span>product downloads<small>Scale documented in my CV</small></span></div>
                <p className="contribution-label">MY CONTRIBUTION</p>
                <p className="project-description">Contributed to native iOS background notification delivery and analytics instrumentation for a consumer Islamic app used at significant scale.</p>
                <div className="technology-line">Native iOS <span>·</span> Notifications <span>·</span> Analytics</div>
                <div className="project-links"><ExternalLink className="button primary" href="https://apps.apple.com/eg/app/prayer-now-azan-prayer-times/id1081440836">View Prayer Now on App Store</ExternalLink></div>
              </div>
              <figure className="spotlight-visual">
                <a href="/images/prayer-now-screen.png" target="_blank" rel="noopener noreferrer"><img src="/images/prayer-now-screen.png" width="1170" height="2080" loading="lazy" alt="Official Prayer Now promotional screenshot showing its Arabic prayer-times home screen. Open full-size image." /></a>
                <figcaption>Prayer Now home screen.<a href="https://apps.apple.com/eg/app/prayer-now-azan-prayer-times/id1081440836" target="_blank" rel="noopener noreferrer">Official App Store artwork · Approcks ↗</a></figcaption>
              </figure>
              <ProjectDetails title="Prayer Now">
                <div><h4>The product</h4><p>A consumer Islamic app with prayer times, reminders, and daily religious content.</p></div>
                <div><h4>My engineering work</h4><p>Contributed to background notification delivery and analytics instrumentation in the native iOS product.</p></div>
                <div><h4>Scale and ownership</h4><p>Prayer Now is the largest app I’ve contributed to by downloads. The 15M+ figure describes the product’s reach; my work focused on notifications and analytics within the wider team.</p></div>
              </ProjectDetails>
            </article>


            <article className="project" id="p-plus">
              <div className="project-main">
                <div className="project-meta"><span>PORTFOLIO & PROJECT MANAGEMENT</span><span>02</span></div>
                <h3>P+</h3>
                <p className="project-subtitle">Managing portfolios, programs, and projects.</p>
                <p className="contribution-label">MY CONTRIBUTION</p>
                <p className="project-description">Worked on the native iOS product before leading its Kotlin / Compose Multiplatform transformation. Shaped shared business logic for portfolio, program, and project workflows.</p>
                <div className="technology-line">Native iOS <span>·</span> KMP / CMP <span>·</span> Clean Architecture</div>
                <div className="project-links"><ExternalLink href="https://apps.apple.com/eg/app/p/id6752709705">View P+ on App Store</ExternalLink></div>
              </div>
              <ProjectDetails title="P+">
                <div><h4>The product</h4><p>An enterprise portfolio and project-management product that brings portfolios, programs, and projects into a connected mobile experience.</p></div>
                <div><h4>My engineering work</h4><p>Contributed to the native iOS product, then led its KMP/CMP transformation. Helped establish shared business logic and a maintainable Clean Architecture foundation for its management workflows.</p></div>
                <div><h4>What this demonstrates</h4><p>Experience evolving a substantial native product into a cross-platform architecture while retaining knowledge of its existing workflows.</p></div>
                <figure className="product-screenshot"><a href="/images/pplus-screen.png" target="_blank" rel="noopener noreferrer"><img src="/images/pplus-screen.png" width="1170" height="2532" loading="lazy" alt="Official P+ screenshot showing a portfolio, program progress, and budget information. Open full-size image." /></a><figcaption>P+ portfolio and program view. <a href="https://apps.apple.com/eg/app/p/id6752709705" target="_blank" rel="noopener noreferrer">Official App Store screenshot · Master Team ↗</a></figcaption></figure>
              </ProjectDetails>
            </article>
            <article className="project" id="s-plus">
              <div className="project-main">
                <div className="project-meta"><span>STRATEGY & OKRS</span><span>03</span></div>
                <h3>S+</h3>
                <p className="project-subtitle">Connecting enterprise strategy with objectives.</p>
                <p className="contribution-label">MY CONTRIBUTION</p>
                <p className="project-description">Evolved S+ from native iOS to a shared Kotlin / Compose foundation, leading the transformation of its strategy and OKR workflows with Clean Architecture.</p>
                <div className="technology-line">Native iOS <span>·</span> KMP / CMP <span>·</span> Shared business logic</div>
                <div className="project-links"><ExternalLink href="https://apps.apple.com/eg/app/s-3/id6753159927">View S+ on App Store</ExternalLink></div>
              </div>
              <ProjectDetails title="S+">
                <div><h4>The product</h4><p>An enterprise strategy-management product focused on objectives and key results (OKRs).</p></div>
                <div><h4>My engineering work</h4><p>Worked on S+ as a native iOS product before leading its KMP/CMP transformation. Brought strategy and OKR workflows onto shared business logic structured with Clean Architecture.</p></div>
                <div><h4>What this demonstrates</h4><p>Applying cross-platform architecture to a strategy product with its own workflows and product requirements.</p></div>
              </ProjectDetails>
            </article>
            <article className="project" id="diwan">
              <div className="project-main">
                <div className="project-meta"><span>ENTERPRISE COLLABORATION</span><span>04</span></div>
                <h3>Diwan</h3>
                <p className="project-subtitle">Supporting collaboration across the enterprise.</p>
                <p className="contribution-label">MY CONTRIBUTION</p>
                <p className="project-description">Led Diwan’s KMP/CMP transformation, carrying native iOS product knowledge into shared business logic for enterprise collaboration.</p>
                <div className="technology-line">Native iOS <span>·</span> KMP / CMP <span>·</span> Clean Architecture</div>
              </div>
              <ProjectDetails title="Diwan">
                <div><h4>The product</h4><p>A distinct enterprise collaboration product within the wider Master Team product suite.</p></div>
                <div><h4>My engineering work</h4><p>Worked on the native iOS product before leading its move to Kotlin / Compose Multiplatform. The shared architecture supports collaboration across connected enterprise products.</p></div>
                <div><h4>What this demonstrates</h4><p>Evolving an individual collaboration product while accounting for its place in a connected enterprise ecosystem.</p></div>
              </ProjectDetails>
            </article>

            <article className="project" id="digital-twin"><div className="project-main">
              <div className="project-meta"><span>SECURITY & IDENTITY</span><span>05</span></div><h3>Digital Twin</h3><p className="project-subtitle">Connecting mobile identity to physical access.</p>
              <p className="contribution-label">MY CONTRIBUTION</p><p className="project-description">Built the native iOS app in Swift and integrated external access hardware through CoreBluetooth, alongside NFC and QR access flows.</p>
              <ul className="project-points"><li>Encrypted on-device digital wallet</li><li>Real-time notifications and a secure in-app mailbox</li></ul><div className="technology-line">Swift <span>·</span> CoreBluetooth <span>·</span> NFC / QR</div>
            </div>
            <ProjectDetails title="Digital Twin"><div><h4>The product</h4><p>A secure identity and physical-access experience that connects a mobile app with external hardware.</p></div><div><h4>What I owned</h4><p>The native Swift implementation and hardware integrations, plus the wallet, access, notification, and mailbox features described above.</p></div><div><h4>What this demonstrates</h4><p>Native iOS delivery across device APIs, local storage, background notifications, and user-facing access flows.</p></div><div className="access-visual" aria-label="Digital Twin integration scope"><p className="visual-label">INTEGRATION SCOPE</p><div className="scope-core"><span className="scope-monogram" aria-hidden="true">DT</span><strong>Native iOS app</strong><span>Swift · CoreBluetooth</span></div><div className="scope-path" aria-hidden="true" /><div className="scope-branches"><div><strong>BLE</strong><span>Access hardware</span></div><div><strong>NFC / QR</strong><span>Access flows</span></div></div><div className="scope-wallet">Encrypted wallet · Secure mailbox</div><p className="visual-caption">Engineering scope diagram</p></div></ProjectDetails></article>
          </div>
          <details className="additional-work"><summary><span><span className="eyebrow">MORE PRODUCTION WORK</span><strong>Flutter operations, fitness, finance & enterprise apps</strong></span><span className="detail-toggle" aria-hidden="true">+</span></summary><div className="additional-content"><div className="other-projects"><article><h3>PDT Corporate & PDT Guard</h3><p>Flutter UI, authentication, REST integrations, real-time alerts, and background execution for workforce and security operations. Features included access workflows and device pairing.</p></article><article><h3>Muyassar</h3><p>A multi-role Flutter Hajj-management platform with staff dashboards, medical profiles, accommodation tracking, and live mapping.</p></article></div><p className="published-intro">Other published products I worked on</p><div className="published-grid">{publishedWork.map(item => <ExternalLink key={item.label} href={item.href}>{item.label}</ExternalLink>)}</div></div></details>
        </section>
        <section className="section" id="experience" aria-labelledby="experience-title"><div className="section-heading"><div><p className="eyebrow">02 / EXPERIENCE</p><h2 id="experience-title">From interface details<br />to shared architecture.</h2></div><a className="text-link" href={cv} download>Download full CV <Arrow direction="down" /></a></div><div className="experience-list">{experience.map(item => <article className="experience-row" key={item.company}><div className="experience-period"><span>{item.dates}</span>{item.current && <span className="status current">Current role</span>}{item.partTime && <span className="status">Part-time · Concurrent role</span>}</div><div className="experience-body"><h3>{item.company}</h3><p className="role">{item.role}</p><ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul><p className="experience-stack">{item.stack}</p></div></article>)}</div></section>
        <section className="section" id="stack" aria-labelledby="expertise-title"><div className="section-heading"><div><p className="eyebrow">03 / EXPERTISE</p><h2 id="expertise-title">The tools behind the work.</h2></div></div><div className="expertise-grid">{expertise.map((item, index) => <article key={item.title}><span className="expertise-index">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p><p className="expertise-tools">{item.items}</p></article>)}</div></section>
        <section className="section about-section" id="about" aria-labelledby="about-title"><div><p className="eyebrow">04 / ABOUT</p><h2 id="about-title">A product mindset.<br />An engineering foundation.</h2></div><div className="about-content"><p>I’m Alhussein, a product engineer based in Giza, Egypt. I started in iOS development and UI/UX design, translating Figma flows into production interfaces. Today, my work spans native iOS, Flutter, and shared Kotlin architectures.</p><p>I’m comfortable moving between user flows, device integrations, product logic, and the details of a store release. I care about clear interfaces and code that the next engineer can understand.</p><dl className="about-facts"><div><dt>Education</dt><dd>Postgraduate Diploma in Computer Science<span>Cairo University · 2021–2023</span></dd></div><div><dt>Languages</dt><dd>Arabic — native<br />English — fluent</dd></div></dl></div></section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div><p className="eyebrow">LET’S TALK</p><h2 id="contact-title">Have a mobile role in mind?</h2><p>I’d be glad to discuss the product, the team, and where I can contribute.</p></div><div className="contact-actions"><ExternalLink className="button primary" href={linkedin}>Connect on LinkedIn</ExternalLink><a className="button secondary" href={cv} download>Download CV <Arrow direction="down" /></a></div></section>
      </main>
      <footer className="container"><p>© 2026 Alhussein Anwar <span>Product Engineer · Mobile</span></p><div><ExternalLink href="https://github.com/itsalhussein">GitHub</ExternalLink><a className="text-link" href="#top">Back to top <span aria-hidden="true">↑</span></a></div></footer>
    </div>
  );
}
