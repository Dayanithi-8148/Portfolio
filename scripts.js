function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const themes = [
  {
    backgroundImage : 'url(./assets/background-new.png)',
    bodyBackground: 'linear-gradient(to bottom right,#f4d5d5,#f8a9a9)',
    detailsBackground: '#ffcccc',
    colorBackground: '#ffcccc',
  },
  {
    backgroundImage : 'url(./assets/background-new.png)',
    bodyBackground: 'linear-gradient(to bottom right, #e1f4fb, #4eb7ec)',
    detailsBackground: '#cceeff',
    colorBackground: '#cceeff',
  },
  {
    backgroundImage : 'url(./assets/background-new.png)',
    bodyBackground: 'linear-gradient(to bottom right, #d9f4c4, #84ff71)',
    detailsBackground: '#ccffcc',
    colorBackground: '#ccffcc',
  },
  {
    backgroundImage : 'url(./assets/background-new.png)',
    bodyBackground: 'linear-gradient(to bottom right,#f6ddf9, #f99afc)',
    detailsBackground: '#f3ccff',
    colorBackground: '#f3ccff',
  },
  {
    backgroundImage : 'url(./assets/background-new.JPG)',
    bodyBackground: 'linear-gradient(to bottom right, #f7ddc2, #ffc098)',
    detailsBackground: '#facc9bff',
    colorBackground: '#f4d3b0ff',
  },
  {
    backgroundImage : 'url(./assets/background-white.png)',
    bodyBackground: '#ffffff',
    detailsBackground: '#ffffff',
    colorBackground: '#ffffff',
  },
  {
    backgroundImage : 'url(./assets/background-new.png)',
    bodyBackground: '#3c3c3c',
    detailsBackground: '#282828',
    colorBackground: '#282828',
  },
  {
    backgroundImage : 'url(./assets/background-new.png)',
    bodyBackground: 'linear-gradient(to bottom right, #ffffcf, #efe57d)',
    detailsBackground: '#ffff78',
    colorBackground: '#ffff78',
  }
];

let currentThemeIndex = 0;
function applyTheme(theme) {
  document.body.style.background = theme.bodyBackground;

  if(window.innerWidth >=768){
    document.body.style.backgroundImage = theme.backgroundImage || 'cover';
  }
  
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


const project_track = document.querySelector('.carousel-project-track');
  const project_prevButton = document.querySelector('.carousel-project-btn.prev');
  const project_nextButton = document.querySelector('.carousel-project-btn.next');
  const project_cardWidth = document.querySelector('.card-project').offsetWidth; 

  let project_currentPosition = 0;

  project_nextButton.addEventListener('click', () => {
    const maxScroll = -(project_track.scrollWidth - project_track.parentElement.offsetWidth);
    project_currentPosition -= project_cardWidth;
    if (project_currentPosition < maxScroll) {
      project_currentPosition = 0; 
    }
    project_track.style.transform = `translateX(${project_currentPosition}px)`;
  });

  project_prevButton.addEventListener('click', () => {
    project_currentPosition += project_cardWidth;
    if (project_currentPosition > 0) {
      project_currentPosition = -(project_track.scrollWidth - project_track.parentElement.offsetWidth); 
    }
    project_track.style.transform = `translateX(${project_currentPosition}px)`;
  });

const BIN_URL = "https://api.jsonbin.io/v3/b/691201a9ae596e708f509dd8";
const ACCESS_KEY = "$2a$10$qwZ6WaR262gMs5GyrQ4Yo.ZjKGXY7EvujYVbLUtyrF7G2YSEAh.vK"; // use "X-Access-Key"

async function updateCounter() {
    try {
        // 1. Get current count
        let res = await fetch(BIN_URL, {
            headers: {
                "X-Access-Key": ACCESS_KEY
            }
        });
        let data = await res.json();
        let currentCount = data.record.count;

        // 2. Increase count by 1
        let newCount = currentCount + 1;

        // 3. Update bin with new count
        await fetch(BIN_URL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Access-Key": ACCESS_KEY
            },
            body: JSON.stringify({ count: newCount })
        });

        // 4. Display on page
        document.getElementById("visitorCount").innerText = newCount;

    } catch (err) {
        console.error("Error:", err);
    }
}

updateCounter();