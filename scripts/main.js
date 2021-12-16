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

const cards = [];
let counter = 0;

const gridContainer = document.querySelector('.gridContainer');

function createCard(image, title, shortDescription,
  longDescription, tags, linkLive, linkSource, desktop) {
  counter += 1;
  return {
    id: `card-${counter}`,
    image,
    title,
    shortDescription,
    longDescription,
    tags,
    linkLive,
    linkSource,
    desktop,
  };
}

const featured = createCard('images/project1.svg', 'Multi-Post Stories',
  `A daily selection of privately personalized reads; no accounts or sign-ups required. 
has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
took a standar dummy text.`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
 took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
 but also the leap into electronic typesetting, remaining essent`, ['css', 'html', 'bootstrap', 'Ruby'],
  'https://johnftitor.github.io/portfolioFirstProject/', 'https://github.com/JohnFTitor/portfolioFirstProject', false);
cards.push(featured);

while (counter <= 6) {
  const other = createCard('images/sampleproject.svg', 'Profesional Art Printing Data',
    `A daily selection of privately personalized reads; no accounts or sign-ups required. 
  has been the industry's standard`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
 took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
 but also the leap into electronic typesetting, remaining essent`, ['html', 'bootstrap', 'Ruby'],
    'https://johnftitor.github.io/portfolioFirstProject/', 'https://github.com/JohnFTitor/portfolioFirstProject', false);
  cards.push(other);
}

const special = createCard('images/Img-Placeholder.png', 'Profesional Art Printing Data', '', `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
 took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
 but also the leap into electronic typesetting, remaining essent`, ['html', 'bootstrap', 'Ruby'],
'https://johnftitor.github.io/portfolioFirstProject/', 'https://github.com/JohnFTitor/portfolioFirstProject', true);
special.id = 'special';
cards.push(special);
let index = 0;
const titles = ['Data Dashboard Healthcare', 'Website Portfolio', 'Profesional Art Printing Data'];
const images = ['images/data.png', 'images/portfolio.png', 'images/sampleproject.svg'];

while (counter <= 12) {
  if (index > 2) {
    index = 0;
  }
  const otherDesktop = createCard(`${images[index]}`, `${titles[index]}`, `A daily selection of privately 
  personalized reads; no accounts or sign-ups required. has been the industry's standard`, `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
 took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
 but also the leap into electronic typesetting, remaining essent`, ['html', 'bootstrap', 'Ruby'],
  'https://johnftitor.github.io/portfolioFirstProject/', 'https://github.com/JohnFTitor/portfolioFirstProject', true);
  cards.push(otherDesktop);
  index += 1;
}

// Modal Window

function popupWindow(cardObj) {
  const body = document.querySelector('body');

  const modalParent = document.createElement('div');
  modalParent.classList.add('container', 'modalParent');
  body.appendChild(modalParent);

  const modal = document.createElement('div');
  modal.classList.add('container', 'content', 'modal');
  modal.setAttribute('id', cardObj.id);
  modalParent.appendChild(modal);

  const headline = document.createElement('div');
  headline.classList.add('container', 'headline');
  modal.appendChild(headline);

  const h3 = document.createElement('h3');
  h3.textContent = cardObj.title;
  headline.appendChild(h3);

  const closeButton = document.createElement('button');
  closeButton.setAttribute('id', 'closeButtonPopup');
  closeButton.setAttribute('type', 'button');
  headline.appendChild(closeButton);
  closeButton.addEventListener('click', () => {
    body.removeChild(modalParent);
  });

  const closeImage = document.createElement('img');
  closeImage.setAttribute('src', 'icons/close-icon.svg');
  closeImage.setAttribute('alt', 'close icon');
  closeButton.appendChild(closeImage);

  const ultags = document.createElement('ul');
  ultags.classList.add('container', 'tags');
  modal.appendChild(ultags);

  cardObj.tags.forEach((tag) => {
    const litag = document.createElement('li');
    litag.classList.add('textPlaceholder', 'tag');
    ultags.appendChild(litag);

    const alink = document.createElement('a');
    alink.setAttribute('rel', 'noopener noreferrer');
    alink.setAttribute('href', '#');
    alink.setAttribute('aria-label', '');
    alink.textContent = tag;
    litag.appendChild(alink);
  });

  const modalGrid = document.createElement('div');
  modalGrid.classList.add('card', 'featured', 'modal-grid');
  modal.appendChild(modalGrid);

  const projectImg = document.createElement('div');
  projectImg.classList.add('container', 'projectImg');
  modalGrid.appendChild(projectImg);

  const image = document.createElement('img');
  image.setAttribute('src', cardObj.image);
  image.setAttribute('alt', '');
  projectImg.appendChild(image);

  const modalInfo = document.createElement('div');
  modalInfo.classList.add('modal-info');
  modalGrid.appendChild(modalInfo);

  const p = document.createElement('p');
  p.textContent = cardObj.longDescription;
  modalInfo.appendChild(p);

  const popupbtn = document.createElement('div');
  popupbtn.classList.add('popUpButtons');
  modalInfo.appendChild(popupbtn);

  const live = document.createElement('a');
  live.setAttribute('rel', 'noopener noreferrer');
  live.setAttribute('href', cardObj.linkLive);
  live.setAttribute('aria-label', 'See Live');
  live.setAttribute('target', '_blank');
  live.classList.add('interaction');
  live.textContent = 'See Live';
  popupbtn.appendChild(live);

  const source = document.createElement('a');
  source.setAttribute('rel', 'noopener noreferrer');
  source.setAttribute('href', cardObj.linkSource);
  source.setAttribute('aria-label', 'See Source');
  source.setAttribute('target', '_blank');
  source.classList.add('interaction');
  source.textContent = 'See Source';
  popupbtn.appendChild(source);
}

// render Cards and add event listener

function renderCards() {
  cards.forEach((cardObj) => {
    const card = document.createElement('div');
    if (cardObj.id === 'card-1') {
      card.classList.add('card', 'featured');
    } else {
      card.classList.add('card', 'other');
    }

    const img = document.createElement('img');
    img.setAttribute('src', cardObj.image);
    img.setAttribute('alt', '');
    card.appendChild(img);

    if (cardObj.desktop) {
      card.classList.add('other-desktop');
    }

    const info = document.createElement('div');

    if (cardObj.id !== 'special') {
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
    }

    if (!cardObj.desktop || cardObj.id === 'special') {
      const cardButton = document.createElement('a');
      cardButton.classList.add('interaction');
      cardButton.setAttribute('rel', 'noopener noreferrer');
      cardButton.setAttribute('href', `#${cardObj.id}`);
      cardButton.setAttribute('aria-label', 'See Project');
      cardButton.textContent = 'See Project';
      cardButton.addEventListener('click', () => {
        popupWindow(cardObj);
      });

      if (cardObj.id === 'card-1') {
        info.appendChild(cardButton);
      } else {
        card.appendChild(cardButton);
      }
    }

    gridContainer.appendChild(card);
  });
}

renderCards();

const form = document.querySelector('form');

const errorMessage = document.querySelector('.error');

const email = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const messageInput = document.querySelector('#message');

function showError(msg) {
  errorMessage.textContent = msg;
  errorMessage.classList.add('active');
  email.classList.add('error-icon');
}

function checkemail() {
  const emailValue = email.value.trim();

  if (emailValue === '') {
    showError('Email should not be blank');
    return false;
  }

  const emailRegex = /[A-Z]/g;

  if (emailValue.match(emailRegex)) {
    showError(`Email field doesn't allow capital letters. It should be ${emailValue.toLowerCase()}`);
    return false;
  }

  return true;
}

let myFormData = { inputName: '', email: '', message: '' };

function setFormData() {
  myFormData = JSON.parse(localStorage.getItem('formData'));

  email.value = myFormData.email;
  nameInput.value = myFormData.inputName;
  messageInput.value = myFormData.message;
}

function populateStorage() {
  localStorage.setItem('formData', JSON.stringify(myFormData));
  setFormData();
}

if (!localStorage.getItem('formData')) {
  populateStorage();
} else {
  setFormData();
}

nameInput.addEventListener('input', () => {
  myFormData.inputName = nameInput.value;
  populateStorage();
});

messageInput.addEventListener('input', () => {
  myFormData.message = messageInput.value;
  populateStorage();
});

email.addEventListener('input', () => {
  errorMessage.textContent = '';
  errorMessage.classList.remove('active');
  email.classList.remove('error-icon');

  myFormData.email = email.value;

  populateStorage();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (checkemail()) {
    form.submit();
    myFormData = { inputName: '', email: '', message: '' };
    populateStorage();
  }
});
