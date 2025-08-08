const pathwaysData = [
  {
    id: "express-entry",
    title: "CEC / FSW / FST",
    image: {
      src: "images/express_entry_ret.webp",
      alt: "Express Entry"
    },
    programs: [
      {
        title: "Canadian Experience Class (CEC)",
        desc: "For skilled workers with Canadian work experience who want to become permanent residents.",
        href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/canadian-experience-class.html"
      },
      {
        title: "Federal Skilled Worker Program (FSW)",
        desc: "For skilled workers with foreign work experience who want to become permanent residents.",
        href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html"
      },
      {
        title: "Federal Skilled Trades Program (FST)",
        desc: "For skilled workers qualified in a skilled trade who want to become permanent residents.",
        href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-trades.html"
      }
    ]
  },
  {
    id: "family",
    title: "Sponsor your family members",
    image: {
      src: "images/family_sponsorship_ret.webp",
      alt: "Family Sponsorship"
    },
    programs: [
      {
        title: "Spouse, Partner or Dependent Children",
        desc: "Bring your spouse, partner or dependent children to Canada as permanent residents.",
        href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/spouse-partner-children.html"
      },
      {
        title: "Adopted Children",
        desc: "Bring your adopted child to Canada as a permanent resident.",
        href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/canadians/adopt-child-abroad/processes/choose-process/immigration.html"
      },
      {
        title: "Other Relatives",
        desc: "Sponsor certain relatives to come to Canada as permanent residents.",
        href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/other-relatives.html"
      },
      {
        title: "Parents and Grandparents",
        desc: "Bring your parents and grandparents to Canada as permanent residents.",
        href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/family-sponsorship/sponsor-parents-grandparents.html"
      }
    ]
  },
  {
    id: "pnp",
    title: "Provincial Nominee Program (PNP)",
    image: {
      src: "images/pnp_ret.webp",
      alt: "Provincial Nominee Program"
    },
    summaryBlocks: [
      {
        p: "This program is for workers who:",
        list: [
          "Have the skills, education and work experience to contribute to a specific province or territory",
          "Want to live in that province or territory",
          "Want to become permanent residents of Canada"
        ]
      },
      {
        p: "Each province and territory has its own “streams” (immigration programs that target certain groups) and requirements. These may include:",
        list: ["Students", "Business people", "Skilled workers", "Semi-skilled workers"]
      }
    ],
    mainLink: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html"
  }
];

const container = document.getElementById("pathways-container");

if (!container) {
  console.warn("pathways-container not found.");
} else {
  pathwaysData.forEach(sectionData => {
    const section = document.createElement("section");
    section.className = "pathway";
    section.id = sectionData.id;

    const img = document.createElement("img");
    img.className = "pathway-img lazy-fade";
    img.loading = "lazy";
    img.alt = sectionData.image.alt || "";
    img.src = sectionData.image.src;

    img.addEventListener("load", () => {
    img.classList.add("lazy-fade-loaded");
    });

    if (img.complete) {
    img.classList.add("lazy-fade-loaded");
    }

    img.addEventListener("error", () => {
    if (img.src.includes("_ret.webp")) {
        img.src = img.src.replace("_ret.webp", ".webp");
    }
    });

    const h2 = document.createElement("h2");
    h2.textContent = sectionData.title;

    let contentHTML = "";

    if (sectionData.programs && sectionData.programs.length) {
      contentHTML = sectionData.programs
        .map(p => `
          <a href="${p.href}" target="_blank" rel="noopener" class="program-link">
            <div class="program">
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
            </div>
          </a>
        `)
        .join("");
    }

    if (sectionData.summaryBlocks && sectionData.summaryBlocks.length) {

      const blocks = sectionData.summaryBlocks
        .map(block => `
          <p>${block.p}</p>
          <ul>
            ${block.list.map(item => `<li>${item}</li>`).join("")}
          </ul>
        `)
        .join("");

      const mainLink = sectionData.mainLink
        ? `<a href="${sectionData.mainLink}" target="_blank" rel="noopener" class="program-link">
             <div class="program"><h3>${sectionData.title}</h3></div>
           </a>`
        : "";

      contentHTML = `${mainLink}${blocks}`;
    }

    section.appendChild(img);
    section.appendChild(h2);
    section.insertAdjacentHTML("beforeend", contentHTML);

    container.appendChild(section);
  });
}
