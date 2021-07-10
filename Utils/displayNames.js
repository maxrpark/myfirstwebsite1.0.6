const input = document.querySelector('.form');
const tryagain = document.querySelector('.tryagain');

function getName(item, type) {
  const value = input.value;
  const FullNames = item.map(function (name) {
    if (value === '') {
      tryagain.textContent = '';
      return '';
    } else {
      tryagain.textContent = 'Check with another gender';
      return `
    <p>${name} ${value.charAt(0).toUpperCase() + value.slice(1)}</p>
    
   `;
    }
  });
  type.innerHTML = FullNames.join('');
  input.value = '';
}

export default getName;
