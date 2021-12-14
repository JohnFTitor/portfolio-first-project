function toggleMenu() {
  document.querySelector('#menu').classList.toggle('menu-invisible');
}

const menuButton = document.querySelector('#menuButton');
menuButton.addEventListener('click', toggleMenu);

const closeButton = document.querySelector('#closeButton');
closeButton.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.menu-item a');
menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});

// Create projects section dynamically

const gridContainer = document.querySelector('.gridContainer');

function createCard(image, title, shortDescription,
  longDescription, tags, linkLive, LinkSource) {
  counter++;
  return {
    id: `card-${counter}`,
    image,
    title,
    shortDescription,
    longDescription,
    tags,
    linkLive,
    LinkSource,
  };
}

const cards = [];
let counter = 0;
const featured = createCard('images/project1.svg', 'Multi-Post Stories',
  `A daily selection of privately personalized reads; no accounts or sign-ups required. 
has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
took a standar dummy text.`, '', ['css', 'html', 'bootstrap', 'Ruby'], '', '');
cards.push(featured);

while (counter <= 6) {
  const other = createCard('images/sampleproject.svg', 'Profesional Art Printing Data',
    `A daily selection of privately personalized reads; no accounts or sign-ups required. 
  has been the industry's standard`, '', ['html', 'bootstrap', 'Ruby'], '', '');
  cards.push(other);
}

function renderCards() {
  cards.forEach((cardObj) => {
    const card = document.createElement('div');
    if (cardObj.id === "card-1") {
      card.classList.add('card', 'featured');
    } else {
      card.classList.add('card', 'other');
    }

    const img = document.createElement('img');
    img.setAttribute('src', cardObj.image);
    img.setAttribute('alt', '');
    card.appendChild(img);

    const info = document.createElement('div');
    info.classList.add('info');
    card.appendChild(info);

    const title = document.createElement('h3');
    title.textContent = cardObj.title;
    info.appendChild(title);

    const description = document.createElement('p');
    description.textContent = cardObj.shortDescription;
    info.appendChild(description);

    const container = document.createElement('ul');
    container.classList.add('container', 'tags');
    info.appendChild(container);

    cardObj.tags.forEach((tag) => {
      const litag = document.createElement('li');
      litag.classList.add('textPlaceholder', 'tag');
      container.appendChild(litag);

      const alink = document.createElement('a');
      alink.setAttribute('rel', 'noopener noreferrer');
      alink.setAttribute('href', '#');
      alink.setAttribute('aria-label', '');
      alink.textContent = tag;
      litag.appendChild(alink);
    });

    const cardButton = document.createElement('a');
    cardButton.classList.add('interaction');
    cardButton.setAttribute('rel', 'noopener noreferrer');
    cardButton.setAttribute('href', `#${cardObj.id}`);
    cardButton.setAttribute('aria-label', 'See Project');
    cardButton.textContent = 'See Project';

    if (cardObj.id === "card-1") {
      info.appendChild(cardButton);
    } else {
      card.appendChild(cardButton);
    }

    gridContainer.appendChild(card);
  })
}

renderCards();