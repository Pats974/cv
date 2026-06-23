(function () {
  "use strict";

  var d = SITE_DATA;
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  /* ---------------- Hero ---------------- */
  document.getElementById("heroName").textContent = d.hero.name;
  document.getElementById("heroRole").textContent = d.hero.role;
  document.getElementById("heroTagline").textContent = d.hero.tagline;
  document.getElementById("heroPhotoLink").href = d.contact.photoPortfolio;
  var heroVolcanoImg = document.getElementById("heroVolcanoImg");
  heroVolcanoImg.src = d.hero.volcanoImage;
  heroVolcanoImg.alt = "Coulée de lave volcanique à La Réunion, en arrière-plan atténué";

  /* ---------------- About (éditorial) ---------------- */
  document.getElementById("aboutKicker").textContent = d.about.kicker;
  document.getElementById("aboutLead").textContent = d.about.lead;
  var aboutText = document.getElementById("aboutText");
  d.about.paragraphs.forEach(function (p) {
    var para = el("p");
    para.textContent = p;
    aboutText.appendChild(para);
  });

  /* ---------------- Territoires ---------------- */
  var territoryList = document.getElementById("territoryList");
  d.territories.forEach(function (t) {
    var article = el("article", "territory reveal");
    article.id = "territoire-" + t.id;

    var inner = el("div", "territory-inner");

    var number = el("span", "territory-number");
    number.setAttribute("aria-hidden", "true");
    number.textContent = t.number;

    var body = el("div", "territory-body");
    var h3 = el("h3");
    h3.textContent = t.title;
    var p = el("p");
    p.textContent = t.text;
    var keywords = el("p", "territory-keywords");
    keywords.textContent = t.keywords.join(" · ");

    body.appendChild(h3);
    body.appendChild(p);
    body.appendChild(keywords);

    inner.appendChild(number);
    inner.appendChild(body);
    article.appendChild(inner);
    territoryList.appendChild(article);
  });

  /* ---------------- Experience sticky summary ---------------- */
  document.getElementById("experiencePeriod").textContent = d.experienceSummary.period;
  var experienceHighlights = document.getElementById("experienceHighlights");
  d.experienceSummary.highlights.forEach(function (h) {
    var li = el("li");
    li.textContent = h;
    experienceHighlights.appendChild(li);
  });

  /* ---------------- Experience timeline ---------------- */
  var timeline = document.getElementById("timeline");
  d.experiences.forEach(function (exp) {
    var li = el("li", "timeline-item reveal" + (exp.current ? " is-current" : ""));

    var period = el("p", "timeline-period");
    period.textContent = exp.period;

    var h3 = el("h3");
    h3.textContent = exp.role;

    var org = el("p", "timeline-org");
    org.textContent = exp.org;

    var ul = el("ul");
    exp.points.forEach(function (point) {
      var pointLi = el("li");
      pointLi.textContent = point;
      ul.appendChild(pointLi);
    });

    li.appendChild(period);
    li.appendChild(h3);
    li.appendChild(org);
    li.appendChild(ul);

    if (exp.link) {
      var a = el("a", "timeline-link");
      a.href = exp.link.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = exp.link.label + " ↗";
      li.appendChild(a);
    }

    timeline.appendChild(li);
  });

  /* ---------------- IA générative : étapes ---------------- */
  var aiSteps = document.getElementById("aiSteps");
  var aiStepEls = [];
  d.aiSteps.forEach(function (step) {
    var item = el("div", "ai-step");

    var number = el("span", "ai-step-number");
    number.textContent = step.step;

    var h3 = el("h3");
    h3.textContent = step.title;

    var p = el("p");
    p.textContent = step.text;

    var example = el("p", "ai-step-example");
    example.textContent = "Exemple : " + step.example;

    var keywords = el("p", "ai-step-keywords");
    keywords.textContent = step.keywords.join(" · ");

    item.appendChild(number);
    item.appendChild(h3);
    item.appendChild(p);
    item.appendChild(example);
    item.appendChild(keywords);
    aiSteps.appendChild(item);
    aiStepEls.push(item);
  });

  /* ---------------- Engagements associatifs ---------------- */
  document.getElementById("engagementsIntro").textContent = d.engagements.intro;
  var engagementsGrid = document.getElementById("engagementsGrid");
  d.engagements.items.forEach(function (item) {
    var card = el("article", "engagement-card reveal");

    var bigWord = el("span", "engagement-bigword");
    bigWord.setAttribute("aria-hidden", "true");
    bigWord.textContent = item.bigWord;

    var content = el("div", "engagement-content");
    var h3 = el("h3");
    h3.textContent = item.org;
    var role = el("p", "card-role");
    role.textContent = item.role;
    var p = el("p");
    p.textContent = item.text;
    var tags = el("p", "engagement-tags");
    tags.textContent = item.tags.join(" · ");

    content.appendChild(h3);
    content.appendChild(role);
    content.appendChild(p);
    content.appendChild(tags);

    card.appendChild(bigWord);
    card.appendChild(content);
    engagementsGrid.appendChild(card);
  });

  /* ---------------- Compétences & outils (compact) ---------------- */
  var skillsCompact = document.getElementById("skillsCompact");
  d.skills.categories.forEach(function (cat) {
    var row = el("div", "skills-row");
    var label = el("span", "skills-row-label");
    label.textContent = cat.name;
    var items = el("span", "skills-row-items");
    items.textContent = cat.items.join(" · ");
    row.appendChild(label);
    row.appendChild(items);
    skillsCompact.appendChild(row);
  });

  /* ---------------- Formations ---------------- */
  var formationsList = document.getElementById("formationsList");
  d.formations.forEach(function (f) {
    var li = el("li");
    var title = el("p", "item-title");
    title.textContent = f.title;
    var meta = el("p", "item-meta");
    meta.textContent = f.year + " · " + f.org;
    li.appendChild(title);
    li.appendChild(meta);
    formationsList.appendChild(li);
  });

  /* ---------------- Certifications ---------------- */
  var certificationsList = document.getElementById("certificationsList");
  d.certifications.forEach(function (c) {
    var li = el("li");
    var title = el("p", "item-title");
    title.textContent = c.name;
    li.appendChild(title);
    if (c.detail) {
      var meta = el("p", "item-meta");
      meta.textContent = c.detail;
      li.appendChild(meta);
    }
    certificationsList.appendChild(li);
  });

  /* ---------------- Languages ---------------- */
  var languagesList = document.getElementById("languagesList");
  d.languages.forEach(function (lang) {
    var li = el("li");
    var title = el("p", "item-title");
    title.textContent = lang.name;
    var meta = el("p", "item-meta");
    meta.textContent = lang.level;
    li.appendChild(title);
    li.appendChild(meta);
    languagesList.appendChild(li);
  });

  /* ---------------- Contact ---------------- */
  var contactList = document.getElementById("contactList");

  function addContactLine(text) {
    var li = el("li");
    li.textContent = text;
    contactList.appendChild(li);
  }

  addContactLine(d.contact.city);
  addContactLine(d.contact.email);

  // Le téléphone reste désactivé par défaut. Pour l'afficher un jour,
  // décommente ces deux lignes ET la ligne "phone" dans data.js.
  // if (d.contact.phone) addContactLine(d.contact.phone);

  var linkedinLi = el("li");
  if (d.contact.linkedin) {
    var linkedinA = el("a");
    linkedinA.href = d.contact.linkedin;
    linkedinA.target = "_blank";
    linkedinA.rel = "noopener";
    linkedinA.textContent = "LinkedIn ↗";
    linkedinLi.appendChild(linkedinA);
  } else {
    linkedinLi.textContent = "LinkedIn — lien à venir";
    linkedinLi.style.color = "var(--text-muted)";
  }
  contactList.appendChild(linkedinLi);

  document.getElementById("contactEmailBtn").href = "mailto:" + d.contact.email;
  document.getElementById("contactPhotoBtn").href = d.contact.photoPortfolio;

  if (d.contact.cvAvailable) {
    var cvBtn = document.getElementById("cvDownloadBtn");
    cvBtn.href = d.contact.cvFile;
    cvBtn.hidden = false;
  }

  var interestsLine = document.getElementById("interestsLine");
  interestsLine.textContent = d.interests.join(" · ");

  /* ---------------- Footer ---------------- */
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("footerCity").textContent = d.contact.city;

  /* ---------------- Mobile nav ---------------- */
  var navToggle = document.getElementById("navToggle");
  var primaryNav = document.getElementById("primaryNav");

  navToggle.addEventListener("click", function () {
    var isOpen = primaryNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  primaryNav.addEventListener("click", function (event) {
    if (event.target.matches("a")) {
      primaryNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------------- Active nav link on scroll ---------------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));
  var navSections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  var sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = "#" + entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle("active", link.getAttribute("href") === id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -45% 0px" }
  );

  navSections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  /* ---------------- Scroll reveal ---------------- */
  var revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach(function (node) {
    revealObserver.observe(node);
  });

  /* ---------------- Parallax très lent sur la photo volcan ---------------- */
  if (!prefersReducedMotion) {
    var heroSection = document.getElementById("accueil");
    var ticking = false;

    function updateParallax() {
      ticking = false;
      var rect = heroSection.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      var offset = rect.top * -0.08;
      heroVolcanoImg.style.transform = "translateY(" + offset + "px)";
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updateParallax);
        }
      },
      { passive: true }
    );
    updateParallax();
  }

  /* ---------------- Progression de la chaîne IA au scroll ---------------- */
  (function aiStepsProgress() {
    var wrapper = document.getElementById("aiSteps");
    var progress = document.getElementById("aiStepsProgress");
    if (!wrapper || !progress || aiStepEls.length === 0) return;

    var ticking = false;

    function update() {
      ticking = false;
      var rect = wrapper.getBoundingClientRect();
      var viewportH = window.innerHeight;
      // Progression : 0 quand le haut du bloc atteint le bas du viewport,
      // 1 quand le bas du bloc atteint ~40% de la hauteur du viewport.
      var start = viewportH * 0.92;
      var end = viewportH * 0.4;
      var total = rect.top - end;
      var range = start - end;
      var pct = 1 - total / range;
      pct = Math.max(0, Math.min(1, pct));

      wrapper.style.setProperty("--ai-progress", pct * 100 + "%");

      var activeCount = Math.round(pct * aiStepEls.length);
      aiStepEls.forEach(function (stepEl, index) {
        stepEl.classList.toggle("is-active", index < activeCount || pct > 0.92);
      });
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
    window.addEventListener("resize", update, { passive: true });
    update();
  })();
})();
