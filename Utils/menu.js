// Menu
const menuBtn = document.querySelector('.toggle-menu');
const linkContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

const menutoggle = menuBtn.addEventListener('click', () => {
  const containerHeight = linkContainer.getBoundingClientRect().height;

  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linkContainer.style.height = `${linksHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
  console.log(containerHeight);
  console.log(linksHeight);
});

export default menutoggle;
