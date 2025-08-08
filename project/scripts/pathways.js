const pathwaysData = {
  "express-entry": [
    {
      title: "Canadian Experience Class (CEC)",
      desc: "For skilled workers with Canadian work experience who want to become permanent residents.",
      href: "https://www.canada.ca/.../canadian-experience-class.html"
    },
    {
      title: "Federal Skilled Worker Program (FSW)",
      desc: "For skilled workers with foreign work experience who want to become permanent residents.",
      href: "https://www.canada.ca/.../federal-skilled-workers.html"
    },
    {
      title: "Federal Skilled Trades Program (FST)",
      desc: "For skilled workers qualified in a skilled trade who want to become permanent residents.",
      href: "https://www.canada.ca/.../federal-skilled-trades.html"
    }
  ],
  "family": [
    { title: "Spouse, Partner or Dependent Children", desc: "Bring your spouse, partner or dependent children to Canada as permanent residents.", href: "https://www.canada.ca/.../spouse-partner-children.html" },
    { title: "Adopted Children", desc: "Bring your adopted child to Canada as a permanent resident.", href: "https://www.canada.ca/.../adopt-child-abroad/..." },
    { title: "Other Relatives", desc: "Sponsor certain relatives to come to Canada as permanent residents.", href: "https://www.canada.ca/.../other-relatives.html" },
    { title: "Parents and Grandparents", desc: "Bring your parents and grandparents to Canada as permanent residents.", href: "https://www.canada.ca/.../sponsor-parents-grandparents.html" }
  ],
  "pnp": [
    {
      summary: {
        intro: "This program is for workers who:",
        list: [
          "Have the skills, education and work experience to contribute to a specific province or territory",
          "Want to live in that province or territory",
          "Want to become permanent residents of Canada"
        ]
      },
      streams: {
        intro: "Each province and territory has its own streams and requirements. These may include:",
        list: ["Students", "Business people", "Skilled workers", "Semi-skilled workers"]
      },
      mainLink: "https://www.canada.ca/.../provincial-nominees.html"
    }
  ]
};

function renderPrograms() {
  const blocks = document.querySelectorAll('.programs');

  blocks.forEach(block => {
    const key = block.dataset.key;
    const data = pathwaysData[key];
    if (!data) return;

    let html = "";

    if (key !== "pnp") {
      html = data.map(p => `
        <a href="${p.href}" target="_blank" rel="noopener" class="program-link">
          <div class="program">
            <h3>${p.title}</h3>
            <p>${p.desc}</p>
          </div>
        </a>
      `).join("");
    } else {
      const { summary, streams, mainLink } = data[0];
      html = `
        <a href="${mainLink}" target="_blank" rel="noopener" class="program-link">
          <div class="program"><h3>Provincial Nominee Program (PNP)</h3></div>
        </a>
        <p>${summary.intro}</p>
        <ul>${summary.list.map(li => `<li>${li}</li>`).join("")}</ul>
        <p>${streams.intro}</p>
        <ul>${streams.list.map(li => `<li>${li}</li>`).join("")}</ul>
      `;
    }

    block.innerHTML = html;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderPrograms();
});
