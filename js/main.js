(function () {
  "use strict";

  var d = SITE_DATA;

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
  document.getElementById("heroVolcanoImg").src = d.hero.volcanoImage;

  /* ---------------- Hero network (bulles connectées) ---------------- */
  // Nœuds secondaires masqués sur très petit écran pour alléger le visuel.
  var SECONDARY_NODES = ["photo", "qualiopi", "engagement"];

  (function renderHeroNetwork() {
    var network = d.heroNetwork;
    if (!network) return;

    var nodesById = {};
    network.nodes.forEach(function (node) {
      nodesById[node.id] = node;
    });

    var svg = document.getElementById("heroNetworkLines");
    var bubblesContainer = document.getElementById("heroBubbles");

    network.edges.forEach(function (edge) {
      var from = nodesById[edge.from];
      var to = nodesById[edge.to];
      if (!from || !to) return;

      // Courbe douce : le point de contrôle est tiré légèrement vers le centre.
      var midX = (from.x + to.x) / 2;
      var midY = (from.y + to.y) / 2;
      var ctrlX = midX + (50 - midX) * 0.18;
      var ctrlY = midY + (50 - midY) * 0.18;
      var d_attr = "M " + from.x + " " + from.y + " Q " + ctrlX + " " + ctrlY + " " + to.x + " " + to.y;

      var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", d_attr);
      path.setAttribute("class", "network-line" + (edge.animated ? " network-line--animated" : ""));
      svg.appendChild(path);

      if (edge.animated) {
        var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        dot.setAttribute("r", "0.9");
        dot.setAttribute("class", "network-dot");
        dot.style.offsetPath = "path('" + d_attr + "')";
        dot.style.webkitOffsetPath = "path('" + d_attr + "')";
        svg.appendChild(dot);
      }
    });

    network.nodes.forEach(function (node, index) {
      var isSecondary = SECONDARY_NODES.indexOf(node.id) !== -1;
      var pos = el("div", "hero-bubble-pos" + (isSecondary ? " hero-bubble-pos--secondary" : ""));
      pos.style.left = node.x + "%";
      pos.style.top = node.y + "%";

      var bubble = el("span", "hero-bubble");
      bubble.style.animationDuration = 5.5 + (index % 4) * 0.9 + "s";
      bubble.style.animationDelay = "-" + (index % 5) * 0.7 + "s";

      var dotEl = el("span", "hero-bubble-dot");
      var label = document.createTextNode(node.label);
      bubble.appendChild(dotEl);
      bubble.appendChild(label);
      pos.appendChild(bubble);
      bubblesContainer.appendChild(pos);
    });
  })();

  /* ---------------- Connecteurs entre sections ---------------- */
  (function insertSectionConnectors() {
    var sectionNodes = Array.prototype.slice.call(document.querySelectorAll("main > section"));
    sectionNodes.slice(0, -1).forEach(function (section) {
      var connector = el("div", "section-connector");
      connector.setAttribute("aria-hidden", "true");
      section.insertAdjacentElement("afterend", connector);
    });
  })();

  /* ---------------- About ---------------- */
  var aboutText = document.getElementById("aboutText");
  d.about.paragraphs.forEach(function (p) {
    var para = el("p", "reveal");
    para.textContent = p;
    aboutText.appendChild(para);
  });

  /* ---------------- Expertise ---------------- */
  var expertiseGrid = document.getElementById("expertiseGrid");
  d.expertise.forEach(function (item) {
    var card = el("article", "card reveal");
    var h3 = el("h3");
    h3.textContent = item.title;
    var p = el("p");
    p.textContent = item.text;
    var tagRow = el("div", "tag-row");
    item.tags.forEach(function (tag) {
      var span = el("span", "tag");
      span.textContent = tag;
      tagRow.appendChild(span);
    });
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(tagRow);
    expertiseGrid.appendChild(card);
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

  /* ---------------- Engagements associatifs ---------------- */
  document.getElementById("engagementsIntro").textContent = d.engagements.intro;
  var engagementsGrid = document.getElementById("engagementsGrid");
  d.engagements.items.forEach(function (item) {
    var card = el("article", "card reveal");
    var h3 = el("h3");
    h3.textContent = item.org;
    var role = el("p", "card-role");
    role.textContent = item.role;
    var p = el("p");
    p.textContent = item.text;
    var tagRow = el("div", "tag-row");
    item.tags.forEach(function (tag) {
      var span = el("span", "tag");
      span.textContent = tag;
      tagRow.appendChild(span);
    });
    card.appendChild(h3);
    card.appendChild(role);
    card.appendChild(p);
    card.appendChild(tagRow);
    engagementsGrid.appendChild(card);
  });

  /* ---------------- AI flow (méthode en un coup d'œil) ---------------- */
  var aiFlow = document.getElementById("aiFlow");
  d.aiFlow.forEach(function (step, index) {
    var node = el("span", "ai-flow-node");
    node.textContent = step;
    aiFlow.appendChild(node);
    if (index < d.aiFlow.length - 1) {
      aiFlow.appendChild(el("span", "ai-flow-connector"));
    }
  });

  /* ---------------- AI usage ---------------- */
  var aiGrid = document.getElementById("aiGrid");
  d.aiUsage.forEach(function (item) {
    var card = el("article", "ai-item reveal");
    var h3 = el("h3");
    h3.textContent = item.title;
    var p = el("p");
    p.textContent = item.text;
    card.appendChild(h3);
    card.appendChild(p);
    aiGrid.appendChild(card);
  });

  /* ---------------- Skills ---------------- */
  var skillsGrid = document.getElementById("skillsGrid");
  d.skills.categories.forEach(function (cat) {
    var card = el("div", "skill-card reveal");
    var h3 = el("h3");
    h3.textContent = cat.name;
    var row = el("div", "badge-row");
    cat.items.forEach(function (item) {
      var badge = el("span", "badge");
      badge.textContent = item;
      row.appendChild(badge);
    });
    card.appendChild(h3);
    card.appendChild(row);
    skillsGrid.appendChild(card);
  });

  var toolsRow = document.getElementById("toolsRow");
  d.tools.forEach(function (tool) {
    var badge = el("span", "badge reveal");
    badge.textContent = tool;
    toolsRow.appendChild(badge);
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
  var sections = navLinks
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

  sections.forEach(function (section) {
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
})();
