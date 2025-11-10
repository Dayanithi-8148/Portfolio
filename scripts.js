function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const themes = [
  {
    bodyBackground: 'linear-gradient(to bottom right,#f4d5d5,#f8a9a9)',
    detailsBackground: '#ffcccc',
    colorBackground: '#ffcccc',
  },
  {
    bodyBackground: 'linear-gradient(to bottom right, #e1f4fb, #4eb7ec)',
    detailsBackground: '#cceeff',
    colorBackground: '#cceeff',
  },
  {
    bodyBackground: 'linear-gradient(to bottom right, #d9f4c4, #84ff71)',
    detailsBackground: '#ccffcc',
    colorBackground: '#ccffcc',
  },
  {
    bodyBackground: 'linear-gradient(to bottom right,#f6ddf9, #f99afc)',
    detailsBackground: '#f3ccff',
    colorBackground: '#f3ccff',
  },
  {
    bodyBackground: 'linear-gradient(to bottom right, #f7ddc2, #ffc098)',
    detailsBackground: '#ffe6cc',
    colorBackground: '#ffe6cc',
  },
  {
    bodyBackground: 'white',
    detailsBackground: 'white',
    colorBackground: 'white',
  },
  {
    bodyBackground: '#3c3c3c',
    detailsBackground: '#282828',
    colorBackground: '#282828',
  },
  {
    bodyBackground: 'linear-gradient(to bottom right, #ffffcf, #efe57d)',
    detailsBackground: '#ffff78',
    colorBackground: '#ffff78',
  }
];

let currentThemeIndex = 0;
function applyTheme(theme) {
  document.body.style.background = theme.bodyBackground;
  
  const detailsContainers = document.querySelectorAll('.details-container');
  detailsContainers.forEach(container => {
    container.style.backgroundColor = theme.detailsBackground;
  });
  
  const colorContainers = document.querySelectorAll('.color-container');
  colorContainers.forEach(container => {
    container.style.backgroundColor = theme.colorBackground;
  });
}

document.getElementById('changeTheme').addEventListener('click', function() {
  applyTheme(themes[currentThemeIndex]);
  
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
});
document.getElementById('changeTheme1').addEventListener('click', function() {
  applyTheme(themes[currentThemeIndex]);
  
  currentThemeIndex = (currentThemeIndex + 1) % themes.length;
});

const track = document.querySelector('.carousel-track');
  const prevButton = document.querySelector('.carousel-btn.prev');
  const nextButton = document.querySelector('.carousel-btn.next');
  const cardWidth = document.querySelector('.card').offsetWidth; 

  let currentPosition = 0;

  nextButton.addEventListener('click', () => {
    const maxScroll = -(track.scrollWidth - track.parentElement.offsetWidth);
    currentPosition -= cardWidth;
    if (currentPosition < maxScroll) {
      currentPosition = 0; 
    }
    track.style.transform = `translateX(${currentPosition}px)`;
  });

  prevButton.addEventListener('click', () => {
    currentPosition += cardWidth;
    if (currentPosition > 0) {
      currentPosition = -(track.scrollWidth - track.parentElement.offsetWidth); 
    }
    track.style.transform = `translateX(${currentPosition}px)`;
  });