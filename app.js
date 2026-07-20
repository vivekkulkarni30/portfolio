(function () {
  const data = window.portfolioData;
  const state = {
    active: "about",
    explorerCollapsed: false,
    mobileExplorerOpen: false
  };

  const icons = {
    profile: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2c-4.4 0-8 2.2-8 5v1h16v-1c0-2.8-3.6-5-8-5Z",
    projects: "M4 5.5A2.5 2.5 0 0 1 6.5 3H10l2 2h5.5A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-11Z",
    platforms: "M4 5h16v4H4V5Zm0 6h7v8H4v-8Zm9 0h7v8h-7v-8Z",
    products: "M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3L17.7 7 12 9.7 6.3 7 12 4.3ZM5 8.7l6 3v7.5l-6-3.3V8.7Zm8 10.5v-7.5l6-3v7.2l-6 3.3Z",
    courses: "M5 4h14a1 1 0 0 1 1 1v14H6.5A2.5 2.5 0 0 1 4 16.5V5a1 1 0 0 1 1-1Zm1 11.1c.2-.1.3-.1.5-.1H18V6H6v9.1Z",
    blogs: "M6 3h9l3 3v15H6V3Zm8 1.7V7h2.3L14 4.7ZM8 10h8v2H8v-2Zm0 4h8v2H8v-2Z",
    contact: "M4 5h16v14H4V5Zm2 2v.4l6 4 6-4V7H6Zm12 2.8-6 4-6-4V17h12V9.8Z",
    settings: "M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm8.5 4a6.7 6.7 0 0 0-.1-1l2-1.5-2-3.5-2.4 1a8.9 8.9 0 0 0-1.7-1l-.3-2.6h-4l-.3 2.6a8.9 8.9 0 0 0-1.7 1L7.6 6 5.6 9.5l2 1.5a6.7 6.7 0 0 0 0 2l-2 1.5 2 3.5 2.4-1a8.9 8.9 0 0 0 1.7 1l.3 2.6h4l.3-2.6a8.9 8.9 0 0 0 1.7-1l2.4 1 2-3.5-2-1.5c.1-.3.1-.7.1-1Z"
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => Array.from(document.querySelectorAll(selector));
  const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${icons[name] || icons.projects}"/></svg>`;
  const sectionById = (id) => data.sections.find((section) => section.id === id);

  function init() {
    renderNavigation();
    renderContent();
    bindEvents();
    activate("about", false);
    startTerminal();
    observeSections();
  }

  function renderNavigation() {
    $("#topTabs").innerHTML = data.sections
      .map((section) => `<a href="#${section.id}" data-section="${section.id}">${section.label}</a>`)
      .join("");

    $("#activityIcons").innerHTML = data.sections
      .map(
        (section) => `
          <button type="button" class="activity-button" data-section="${section.id}" aria-label="${section.label}">
            ${icon(section.icon)}
            <span>${section.label}</span>
          </button>
        `
      )
      .join("") +
      `<button type="button" class="activity-button utility" aria-label="Settings">${icon("settings")}<span>Settings</span></button>`;

    $("#fileTree").innerHTML = data.sections
      .map(
        (section) => `
          <button type="button" class="file-row" data-section="${section.id}">
            <span class="file-icon">${fileGlyph(section.file)}</span>
            <span>${section.file}</span>
          </button>
        `
      )
      .join("");

    $("#editorTabs").innerHTML = data.sections
      .map(
        (section) => `
          <button type="button" class="editor-tab" data-section="${section.id}">
            <span class="file-icon">${fileGlyph(section.file)}</span>
            <span>${section.file}</span>
          </button>
        `
      )
      .join("");

    renderPaletteResults("");
  }

  function fileGlyph(file) {
    if (file.endsWith(".tsx")) return "TSX";
    if (file.endsWith(".ts")) return "TS";
    if (file.endsWith(".json")) return "{}";
    if (file.endsWith(".md") || file.endsWith(".mdx")) return "MD";
    return "FILE";
  }

  function renderContent() {
    $("#contentHost").innerHTML = `
      ${aboutSection()}
      ${projectsSection()}
      ${platformsSection()}
      ${productsSection()}
      ${coursesSection()}
      ${blogsSection()}
      ${contactSection()}
    `;
  }

  function sectionHeader(id, caption) {
    const section = sectionById(id);
    return `
      <div class="section-kicker">
        <span class="comment">// ${caption}</span>
        <span class="filename">${section.file}</span>
      </div>
    `;
  }

  function aboutSection() {
    return `
      <article class="portfolio-section hero-grid" id="about" data-id="about">
        <div class="code-hero">
          ${sectionHeader("about", "profile entry point")}
          <div class="code-window" aria-label="Profile source code">
            <ol>
              <li><span class="token keyword">const</span> engineer <span class="token operator">=</span> {</li>
              <li>  name: <span class="token string">"${data.profile.name}"</span>,</li>
              <li>  role: <span class="token string">"${data.profile.role}"</span>,</li>
              <li>  location: <span class="token string">"${data.profile.location}"</span>,</li>
              <li>  focus: [${data.profile.currentFocus.map((item) => `<span class="token string">"${item}"</span>`).join(", ")}],</li>
              <li>  shipping: <span class="token boolean">true</span>,</li>
              <li>};</li>
            </ol>
          </div>
          <h1>${data.profile.name}</h1>
          <p class="lead">${data.profile.intro}</p>
          <div class="cta-row">
            <a href="#projects" class="button primary">Explore work</a>
            <a href="#contact" class="button">Contact</a>
            <a href="${data.profile.socials[0].url}" class="button ghost" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div class="workspace-card">
          <img src="assets/workspace-mark.svg" alt="Abstract developer workspace mark" />
          <div class="stats-grid">
            ${data.profile.stats.map((stat) => `<div><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join("")}
          </div>
        </div>
        <div class="about-panels">
          <div class="panel markdown-panel">
            <h2>README.md</h2>
            <p>I work at the intersection of software engineering, education, and product creation. My best work turns complex systems into tools people can understand, trust, and use repeatedly.</p>
          </div>
          <div class="panel stack-panel">
            <h2>skills.json</h2>
            <div class="skill-cloud">
              ${data.skills.map((skill) => `<span>${skill}</span>`).join("")}
            </div>
          </div>
        </div>
      </article>
    `;
  }

  function projectsSection() {
    return `
      <article class="portfolio-section" id="projects" data-id="projects">
        ${sectionHeader("projects", "featured repository map")}
        <div class="section-title">
          <h2>Projects</h2>
          <p>Production-minded builds with clear architecture, strong UX, and useful documentation.</p>
        </div>
        <div class="card-grid">
          ${data.projects
            .map(
              (project) => `
                <article class="project-card">
                  <div class="card-topline"><span class="status">${project.status}</span><span>git: clean</span></div>
                  <div class="preview-lines" aria-hidden="true"><span></span><span></span><span></span><span></span></div>
                  <h3>${project.title}</h3>
                  <p>${project.description}</p>
                  <div class="tags">${project.stack.map((tag) => `<span>${tag}</span>`).join("")}</div>
                  <div class="card-actions">
                    <a href="${project.repo}" target="_blank" rel="noreferrer">Repository</a>
                    <a href="${project.live}" target="_blank" rel="noreferrer">Live demo</a>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </article>
    `;
  }

  function platformsSection() {
    return `
      <article class="portfolio-section" id="platforms" data-id="platforms">
        ${sectionHeader("platforms", "export const platforms")}
        <div class="section-title">
          <h2>Platforms</h2>
          <p>Learning ecosystems, communities, and resources built around practical software craft.</p>
        </div>
        <div class="config-list">
          ${data.platforms
            .map(
              (platform, index) => `
                <article class="config-row">
                  <span class="line-number">${String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>${platform.title}</strong>
                    <code>${platform.url}</code>
                    <p>${platform.description}</p>
                  </div>
                  <span class="pill">${platform.category}</span>
                </article>
              `
            )
            .join("")}
        </div>
      </article>
    `;
  }

  function productsSection() {
    return `
      <article class="portfolio-section" id="products" data-id="products">
        ${sectionHeader("products", "marketplace config")}
        <div class="section-title">
          <h2>Products</h2>
          <p>Small, focused tools designed to remove friction from developer and creator workflows.</p>
        </div>
        <div class="product-grid">
          ${data.products
            .map(
              (product) => `
                <article class="product-card">
                  <div class="product-logo">${product.name.slice(0, 2)}</div>
                  <div>
                    <span class="pill">${product.type}</span>
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                  </div>
                  <div class="json-line"><span>"platforms"</span>: ${JSON.stringify(product.platforms)}</div>
                  <div class="tags">${product.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
                </article>
              `
            )
            .join("")}
        </div>
      </article>
    `;
  }

  function coursesSection() {
    return `
      <article class="portfolio-section" id="courses" data-id="courses">
        ${sectionHeader("courses", "learning modules")}
        <div class="section-title">
          <h2>Courses</h2>
          <p>Focused programs for builders who prefer learning by shipping real systems.</p>
        </div>
        <div class="card-grid compact">
          ${data.courses
            .map(
              (course) => `
                <article class="course-card ${course.featured ? "featured" : ""}">
                  <div class="course-thumb"><span>${course.platform}</span></div>
                  <h3>${course.title}</h3>
                  <div class="course-meta">
                    <span>${course.students} students</span>
                    <span>${course.rating} rating</span>
                    <span>${course.duration}</span>
                  </div>
                  <a href="#contact">Request syllabus</a>
                </article>
              `
            )
            .join("")}
        </div>
      </article>
    `;
  }

  function blogsSection() {
    return `
      <article class="portfolio-section" id="blogs" data-id="blogs">
        ${sectionHeader("blogs", "recent markdown entries")}
        <div class="section-title">
          <h2>Blogs</h2>
          <p>Readable notes on AI systems, software architecture, creator tooling, and product decisions.</p>
        </div>
        <div class="blog-list">
          ${data.blogs
            .map(
              (post) => `
                <article class="blog-card">
                  <div class="blog-meta"><span>${post.date}</span><span>${post.read}</span></div>
                  <h3>${post.title}</h3>
                  <p>${post.summary}</p>
                  <div class="tags">${post.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
                </article>
              `
            )
            .join("")}
        </div>
        <div class="timeline">
          ${data.timeline
            .map(
              (item) => `
                <div class="timeline-item">
                  <span>${item.year}</span>
                  <div><strong>${item.title}</strong><p>${item.detail}</p></div>
                </div>
              `
            )
            .join("")}
        </div>
      </article>
    `;
  }

  function contactSection() {
    return `
      <article class="portfolio-section contact-layout" id="contact" data-id="contact">
        <div>
          ${sectionHeader("contact", "open collaboration channel")}
          <div class="section-title">
            <h2>Contact</h2>
            <p>${data.profile.availability}</p>
          </div>
          <div class="contact-terminal">
            <div><span class="prompt">$</span> whoami</div>
            <p>${data.profile.handle} - ${data.profile.role}</p>
            <div><span class="prompt">$</span> open mailto:${data.profile.email}</div>
            <a href="mailto:${data.profile.email}">${data.profile.email}</a>
          </div>
          <div class="social-row">
            ${data.profile.socials.map((social) => `<a href="${social.url}" target="_blank" rel="noreferrer">${social.label}</a>`).join("")}
          </div>
        </div>
        <form class="contact-form">
          <label>Name<input type="text" name="name" placeholder="Your name" /></label>
          <label>Email<input type="email" name="email" placeholder="you@example.com" /></label>
          <label>Message<textarea name="message" rows="5" placeholder="Tell me what you are building"></textarea></label>
          <button type="submit">Send message</button>
          <p class="form-note" aria-live="polite"></p>
        </form>
      </article>
    `;
  }

  function bindEvents() {
    document.addEventListener("click", (event) => {
      const sectionTrigger = event.target.closest("[data-section]");
      if (sectionTrigger) {
        event.preventDefault();
        const id = sectionTrigger.dataset.section;
        navigateTo(id);
      }

      if (event.target.closest("#railCollapse")) {
        state.explorerCollapsed = !state.explorerCollapsed;
        document.body.classList.toggle("explorer-collapsed", state.explorerCollapsed);
      }

      if (event.target.closest(".mobile-rail-toggle")) {
        toggleMobileExplorer();
      }

      if (event.target.closest("#explorerClose")) {
        closeMobileExplorer();
      }

      if (event.target.closest("#commandButton")) {
        openPalette();
      }

      if (event.target.id === "palette") {
        closePalette();
      }
    });

    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        openPalette();
      }
      if (event.key === "Escape") {
        closePalette();
        closeMobileExplorer();
      }
    });

    $("#paletteInput").addEventListener("input", (event) => renderPaletteResults(event.target.value));

    $(".contact-form").addEventListener("submit", (event) => {
      event.preventDefault();
      $(".form-note").textContent = "Message queued locally. Replace this form action with your preferred backend.";
      event.currentTarget.reset();
    });
  }

  function navigateTo(id) {
    activate(id, true);
    closePalette();
    closeMobileExplorer();
  }

  function activate(id, shouldScroll) {
    state.active = id;
    const section = sectionById(id);
    $$("[data-section]").forEach((item) => item.classList.toggle("active", item.dataset.section === id));
    $("#breadcrumb").innerHTML = `<span>portfolio</span><span>${section.file}</span><span>${section.label}</span>`;
    if (shouldScroll) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function observeSections() {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) activate(visible.target.dataset.id, false);
      },
      { root: $(".editor-surface"), threshold: [0.2, 0.45, 0.7] }
    );

    $$(".portfolio-section").forEach((section) => observer.observe(section));
  }

  function renderPaletteResults(query) {
    const normalized = query.trim().toLowerCase();
    const matches = data.sections.filter((section) =>
      `${section.label} ${section.file}`.toLowerCase().includes(normalized)
    );
    $("#paletteResults").innerHTML = matches
      .map(
        (section) => `
          <button type="button" data-section="${section.id}">
            <span class="file-icon">${fileGlyph(section.file)}</span>
            <span>${section.file}</span>
            <small>${section.label}</small>
          </button>
        `
      )
      .join("");
  }

  function openPalette() {
    $("#palette").classList.add("open");
    $("#palette").setAttribute("aria-hidden", "false");
    $("#paletteInput").focus();
    $("#paletteInput").select();
  }

  function closePalette() {
    $("#palette").classList.remove("open");
    $("#palette").setAttribute("aria-hidden", "true");
  }

  function toggleMobileExplorer() {
    state.mobileExplorerOpen = !state.mobileExplorerOpen;
    document.body.classList.toggle("mobile-explorer-open", state.mobileExplorerOpen);
    $(".mobile-rail-toggle").setAttribute("aria-expanded", String(state.mobileExplorerOpen));
  }

  function closeMobileExplorer() {
    state.mobileExplorerOpen = false;
    document.body.classList.remove("mobile-explorer-open");
    $(".mobile-rail-toggle").setAttribute("aria-expanded", "false");
  }

  function startTerminal() {
    const commands = data.terminal.slice();
    let commandIndex = 0;
    let charIndex = 0;
    const typeTarget = $("#terminalType");
    const log = $("#terminalLog");

    function tick() {
      const command = commands[commandIndex];
      typeTarget.textContent = command.slice(0, charIndex);
      charIndex += 1;

      if (charIndex > command.length + 10) {
        const line = document.createElement("div");
        line.textContent = `> ${command}`;
        log.appendChild(line);
        log.scrollTop = log.scrollHeight;
        commandIndex = (commandIndex + 1) % commands.length;
        charIndex = 0;
      }

      window.setTimeout(tick, charIndex === 0 ? 700 : 42);
    }

    tick();
  }

  init();
})();
