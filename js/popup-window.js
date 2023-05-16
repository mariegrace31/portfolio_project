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
        <button class="button ">See project</button>
      </div>
`
    worksSec.appendChild(card);
})