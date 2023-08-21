const works = [{
  title: 'To Do List',
  image: 'images/to do list.png',
  tags: ['Web development', 'Front End Dev', 2023],
  description: `This website allows people to add tasks and remove the completed ones.`,
  languages: ['HTML', 'CSS', 'JavaScript'],
  live: 'https://mariegrace31.github.io/To-do-List/dist/',
  repo: 'https://github.com/mariegrace31/To-do-List',
}, {
  title: 'Meal Gallery',
  image: 'images/mealGallery screeshot.png',
  tags: ['WEBPACK', 'Front End Dev', 2023],
  description: `Meal Gallery is an innovative app that allows you to discover a variety of delicious meals
   from around the world. Whether you're an experienced chef or simply a food enthusiast, this app is perfect for you.`,
  languages: ['HTML', 'CSS', 'JavaScript'],
  live: 'https://mariegrace31.github.io/Meal_Gallery/dist/',
  repo: 'https://github.com/mariegrace31/Meal_Gallery',
}, {
  title: 'Bookstore',
  image: 'images/bookstore.PNG',
  tags: ['Gitflow', 'Front End Dev', 2023],
  description: `The Bookstore is a website that displays a list of books, adds a book and, removes a selected book.`,
  languages: ['React', 'JavaScript', 'CSS'],
  live: 'https://mg-bookstore.netlify.app/',
  repo: 'https://github.com/mariegrace31/bookstore.git',
},
{
  title: 'Air-pollution',
  image: 'images/Capture1.JPG',
  tags: ['CAPSTONE', 'Front End Dev', 2023],
  description: `This capstone is about a mobile web application to check a list of metrics(in this case,air pollution data)`,
  languages: ['React', 'JavaScript', 'SASS'],
  live: 'https://airpollution1.netlify.app/',
  repo: 'https://github.com/mariegrace31/react_capstone.git',
}];

const worksSec = document.querySelector('.body');

works.forEach((work, i) => {
  const card = document.createElement('div');
  card.classList.add(`works${i + 1}`, 'animate');
  card.innerHTML = `
      <img class="photo${i + 1}" src="${work.image}" />
      <div class="part${i + 1}">
        <h1 class="title">${work.title}</h1>
        <ul class="canopy">
          <li class="can"><b>${work.tags[0]}</b></li>
          <li class="dev"><b>${work.tags[1]}</b></li>
          <li class="dev"><b> ${work.tags[2]}</b></li>
        </ul>
        <p class="presentation3">
         ${work.description}
        </p>
        <div class="languages">
          <ul>
            ${work.languages.map((item) => `<li class="lang">${item}</li>`).join('')}
          </ul>
        </div>
        <button class="button showProject">See project</button>
      </div>
`;
  worksSec.appendChild(card);
});

// modal functionality
function popUp() {
  // define empty array to add the details to it
  const worksArr = [];

  works.forEach((work, i) => {
    const popWindow = document.createElement('div');
    // change this to works1 class to 'active' for pop up modal
    popWindow.classList.add('modal', 'active');
    popWindow.innerHTML = 
    `<div class="modal-cont">
      <div class="canopy-nav">
        <h1 class="title1">${work.title}</h1>
        <i class="fa fa-times closeIcon" ></i>
      </div>
      <ul class="canopy1">
          <li class="can1"><b>${work.tags[0]}</b></li>
          <li class="dev1"><b>${work.tags[1]}</b></li>
          <li class="dev1"><b> ${work.tags[2]}</b></li>
      </ul>
      <div class="img-cont">
      <img id= "myimage" class="photo${i + 1}" src="${work.image}" />
      </div>
      <div class="part${i + 1}">
      <div class= present>
        <p class="presentation4">
          ${work.description}
        </p>
        <div class="lang-button">
        <div class="languages1">
          <ul>
           ${work.languages.map((item) => `<li class="lang">${item}</li>`).join('')}
          </ul>
        </div>
        <div class="btns">
         <a href="${work.live}"><button class="button" id="BTN">See live<i class="fa fa-external-link"></i></button></a>
         <a href="${work.repo}"> <button class="button-source" id="BTN">See source <i class="fa fa-github"></i></button></a>
        </div>
        </div>
      </div>
      </div></div>
    `;
    worksArr.push(popWindow);
  });

  return worksArr;
}

function forModal() {
  // here we make selector all to return an array value so we can iterate through it
  const showProBtn = document.querySelectorAll('.showProject');

  // define a variable to have the window details
  const popWindow = popUp();
  // loop throgh the projects buttons
  for (let i = 0; i < showProBtn.length; i += 1) {
    // add the event to each see project button
    showProBtn[i].addEventListener('click', () => {
      // remove the default classes
      popWindow[i].classList.add('active');

      // append the detail window to the work section
      worksSec.appendChild(popWindow[i]);

      const close = document.querySelectorAll('.closeIcon');

      close.forEach((btn) => {
        btn.addEventListener('click', () => {
          btn.parentElement.parentElement.parentElement.classList.remove('active');
        });
      });
    });
  }
}

forModal();