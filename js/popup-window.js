const works = [{
    title: "Tonic",
    image: 'images/tonic project.png',
    tags: ['CANOPY', 'Back End Dev', 2015],
    description: `A daily selection of privately personalized reads; no accounts or
          sign- ups required.`,
    languages: ['HTML', 'CSS', 'Bootstrap'],
    live: '#',
    repo: '#'
}, {
    title: "Tonic",
    image: 'images/multipost project.png',
    tags: ['CANOPY', 'Back End Dev', 2015],
    description: `A daily selection of privately personalized reads; no accounts or
          sign- ups required.`,
    languages: ['HTML', 'CSS', 'Bootstrap'],
    live: '#',
    repo: '#'
}, {
    title: "Tonic",
    image: 'images/gym project.png',
    tags: ['CANOPY', 'Back End Dev', 2015],
    description: `A daily selection of privately personalized reads; no accounts or
          sign- ups required.`,
    languages: ['HTML', 'CSS', 'Bootstrap'],
    live: '#',
    repo: '#'
},
{
    title: "Tonic",
    image: 'images/printing project.png',
    tags: ['CANOPY', 'Back End Dev', 2015],
    description: `A daily selection of privately personalized reads; no accounts or
          sign- ups required.`,
    languages: ['HTML', 'CSS', 'Bootstrap'],
    live: '#',
    repo: '#'
},]

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
`
    worksSec.appendChild(card);
})

// modal functionality
function popUp() {
    // define empty array to add the details to it
    const worksArr = [];

    const popWindow = document.createElement('div');
    popWindow.classList.add('modal', 'works1');
    works.forEach((work) => {
        popWindow.innerHTML = `
      <div class="canopy-nav">
        <h1 class="title">${work.title}</h1>
        <i class="fa fa-times closeIcon"></i>
      </div>
      <ul class="canopy">
          <li class="can"><b>${work.tags[0]}</b></li>
          <li class="dev"><b>${work.tags[1]}</b></li>
          <li class="dev"><b> ${work.tags[2]}</b></li>
      </ul>
      <img class="photo1" src="${work.image}" />
      <div class="part1">
        <p class="presentation3">
          ${work.description}
        </p>
        <div class="languages">
          <ul>
           ${work.languages.map((item) => `<li class="lang">${item}</li>`).join('')}
          </ul>
        </div>
        <div class="btns">
         <a href="${work.live}"><button class="button" id="BTN">See live<i class="fa fa-external-link"></i></button></a>
         <a href="${work.repo}"> <button class="button" id="BTN">See source <i class="fa fa-github"></i></button></a>
        </div>
      </div>
    `;
    })
    worksArr.push(popWindow);

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
            console.log(popWindow[i])
            // remove the default classes
            popWindow[i].classList.add('active');

            // append the detail window to the work section
            worksSec.appendChild(popWindow[i]);

            const close = document.querySelectorAll('.closeIcon');

            close.forEach((btn) => {
                btn.addEventListener('click', () => {
                    btn.parentElement.parentElement.classList.remove('active');
                });
            });
        });
    }
}

forModal()