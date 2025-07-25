const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Campinas Brazil",
    location: "Campinas, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-5988.jpg"
  },
  {
    templeName: "Toronto Ontario",
    location: "Brampton, Ontario, Canada",
    dedicated: "1990, August, 25",
    area: 55558,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/toronto-ontario-temple/toronto-ontario-temple-57469.jpg"
    },  
  {
    templeName: "Porto Alegre Brazil",
    location: "Porto Alegre, Brazil",
    dedicated: "2000, December, 17",
    area: 13325,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-59768.jpg"
  },  
];

const gallery = document.querySelector(".gallery");
const navLinks = document.querySelectorAll("nav a");

function displayTemples(filteredTemples) {
  gallery.innerHTML = "";
  filteredTemples.forEach(temple => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    gallery.appendChild(card);
  });
}

function filterTemples(criteria) {
  switch (criteria) {
    case "Old":
      return temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
    case "New":
      return temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
    case "Large":
      return temples.filter(t => t.area > 90000);
    case "Small":
      return temples.filter(t => t.area < 10000);
    default:
      return temples;
  }
}

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const text = link.textContent.trim();
    document.querySelector("main h2").textContent = text;
    displayTemples(filterTemples(text));
  });
});

displayTemples(temples);

const toggleBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggleBtn.textContent = nav.classList.contains('active') ? '✖' : '☰';
});


