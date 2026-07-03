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
  document.getElementById("heroSecondary").textContent = d.hero.secondaryLine;
  document.getElementById("heroPhotoLink").href = d.contact.photoPortfolio;

  // Image décorative (conteneur aria-hidden, alt vide) : on synchronise
  // les deux formats depuis data.js — le <source> WebP a priorité sur le
  // src de l'<img> dans un <picture>, il doit donc être mis à jour aussi.
  var heroVolcanoImg = document.getElementById("heroVolcanoImg");
  heroVolcanoImg.src = d.hero.volcanoImage;
  if (d.hero.volcanoImageWebp) {
    document.getElementById("heroVolcanoWebp").srcset = d.hero.volcanoImageWebp;
  }

  /* ---------------- Territoires : "Ce que j'apporte" ---------------- */
  var territoryList = document.getElementById("territoryList");
  d.territories.forEach(function (t) {
    var article = el("article", "territory reveal territory--" + t.id);
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

  /* ---------------- Profil hybride ---------------- */
  document.getElementById("hybridEyebrow").textContent = d.hybridProfile.eyebrow;
  document.getElementById("hybridTitle").textContent = d.hybridProfile.title;
  var hybridText = document.getElementById("hybridText");
  d.hybridProfile.paragraphs.forEach(function (p) {
    var para = el("p");
    para.textContent = p;
    hybridText.appendChild(para);
  });
  var hybridBg = document.getElementById("hybridBg");
  d.hybridProfile.backgroundWords.forEach(function (word) {
    var span = el("span");
    span.textContent = word;
    hybridBg.appendChild(span);
  });

  /* ---------------- Parcours : panneau sticky ---------------- */
  document.getElementById("experiencePeriod").textContent = d.experienceSummary.period;
  var experienceHighlights = document.getElementById("experienceHighlights");
  d.experienceSummary.highlights.forEach(function (h) {
    var li = el("li");
    li.textContent = h;
    experienceHighlights.appendChild(li);
  });

  /* ---------------- Parcours : timeline ---------------- */
  var timeline = document.getElementById("timeline");
  d.experiences.forEach(function (exp) {
    var li = el("li", "timeline-item reveal" + (exp.current ? " is-current" : ""));

    var period = el("p", "timeline-period");
    period.textContent = exp.period;

    var h3 = el("h3");
    h3.textContent = exp.role;

    var org = el("p", "timeline-org");
    org.textContent = exp.org + (exp.proves ? " — " + exp.proves : "");

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

  /* ---------------- IA & création : 3 axes ---------------- */
  document.getElementById("aiEyebrow").textContent = d.aiCreation.eyebrow;
  document.getElementById("aiTitle").textContent = d.aiCreation.title;
  document.getElementById("aiSubtitle").textContent = d.aiCreation.subtitle;

  var aiAxes = document.getElementById("aiAxes");
  var aiAxisEls = [];
  d.aiCreation.axes.forEach(function (axis) {
    var item = el("div", "ai-axis");

    var number = el("span", "ai-axis-number");
    number.textContent = axis.number;

    var h3 = el("h3");
    h3.textContent = axis.title;

    var p = el("p");
    p.textContent = axis.text;

    var items = el("p", "ai-axis-items");
    items.textContent = axis.items.join(" · ");

    item.appendChild(number);
    item.appendChild(h3);
    item.appendChild(p);
    item.appendChild(items);
    aiAxes.appendChild(item);
    aiAxisEls.push(item);
  });

  /* ---------------- IA & création : bloc créatif ---------------- */
  var creativeBlock = document.getElementById("creativeBlock");
  var creative = d.aiCreation.creative;
  var creativeH3 = el("h3");
  creativeH3.textContent = creative.title;
  var creativeP = el("p");
  creativeP.textContent = creative.text;
  var creativeA = el("a", "btn btn-primary");
  creativeA.href = creative.linkUrl;
  creativeA.target = "_blank";
  creativeA.rel = "noopener";
  creativeA.textContent = creative.linkLabel + " ↗";
  creativeBlock.appendChild(creativeH3);
  creativeBlock.appendChild(creativeP);
  creativeBlock.appendChild(creativeA);

  /* ---------------- Section finale : Engagements ---------------- */
  document.getElementById("engagementsIntro").textContent = d.engagements.intro;
  var engagementsList = document.getElementById("engagementsList");
  d.engagements.items.forEach(function (item) {
    var article = el("article", "engagement-item");
    var h3 = el("h3");
    h3.textContent = item.org;
    var role = el("p", "card-role");
    role.textContent = item.role;
    var p = el("p");
    p.textContent = item.text;
    article.appendChild(h3);
    article.appendChild(role);
    article.appendChild(p);
    engagementsList.appendChild(article);
  });

  /* ---------------- Section finale : Formations ---------------- */
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

  /* ---------------- Section finale : Certifications ---------------- */
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

  /* ---------------- Section finale : Contact ---------------- */
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

  if (d.contact.cvAvailable) {
    var cvBtn = document.getElementById("cvDownloadBtn");
    cvBtn.href = d.contact.cvFile;
    cvBtn.hidden = false;
  }

  /* ---------------- Footer : outils (bloc compact) ---------------- */
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("footerCity").textContent = d.contact.city;

  var footerTools = document.getElementById("footerTools");
  d.tools.forEach(function (tool) {
    var span = el("span");
    var strong = el("strong");
    strong.textContent = tool.name + " : ";
    span.appendChild(strong);
    span.appendChild(document.createTextNode(tool.items));
    footerTools.appendChild(span);
  });

  var footerInterests = document.getElementById("footerInterests");
  if (footerInterests && d.interests && d.interests.length) {
    var interestsStrong = el("strong");
    interestsStrong.textContent = "Centres d'intérêt : ";
    footerInterests.appendChild(interestsStrong);
    footerInterests.appendChild(document.createTextNode(d.interests.join(" · ")));
  }

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
    var tickingParallax = false;

    function updateParallax() {
      tickingParallax = false;
      var rect = heroSection.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;
      var offset = rect.top * -0.08;
      heroVolcanoImg.style.transform = "translateY(" + offset + "px)";
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!tickingParallax) {
          tickingParallax = true;
          requestAnimationFrame(updateParallax);
        }
      },
      { passive: true }
    );
    updateParallax();
  }

  /* ---------------- Progression de la méthode IA au scroll ---------------- */
  (function aiAxesProgress() {
    var wrapper = document.getElementById("aiAxes");
    var progress = document.getElementById("aiAxesProgress");
    if (!wrapper || !progress || aiAxisEls.length === 0) return;

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

      var activeCount = Math.round(pct * aiAxisEls.length);
      aiAxisEls.forEach(function (axisEl, index) {
        axisEl.classList.toggle("is-active", index < activeCount || pct > 0.92);
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
