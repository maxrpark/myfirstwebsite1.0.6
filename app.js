import getName from './Utils/displayNames.js';
import menuToggle from './Utils/menu.js';
import { boyNames, girlNames } from './Utils/Names.js';
import { AyQ } from './Utils/a&q.js';

const form = document.querySelector('form');
const containerOne = document.querySelector('.container-one');
const containerTwo = document.querySelector('.container-two');

const boy = document.getElementById('boy');

const enterName = form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (boy.checked) {
    getName(boyNames, containerOne);
    containerTwo.classList.add('hide');
    containerOne.classList.remove('hide');
  } else {
    getName(girlNames, containerTwo);
    containerTwo.classList.remove('hide');
    containerOne.classList.add('hide');
  }
});

// Random Name

const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  if (e.key === 'Enter') {
    e.target.value = '';
    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());

  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerHTML = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();
    highLightTag(randomTag);

    setTimeout(() => {
      unHighLightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = pickRandomTag();
      highLightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
}

function highLightTag(tag) {
  tag.classList.add('highlight');
}
function unHighLightTag(tag) {
  tag.classList.remove('highlight');
}

// Panel SHOP

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

// Date

const date = document.getElementById('date');
const newDate = new Date().getFullYear();
date.textContent = newDate;
