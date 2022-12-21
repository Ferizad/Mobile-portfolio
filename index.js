const hamburger = document.querySelector('.hamburger_img');
const closeHamburgerBtn = document.querySelector('.close_hamburger');
const modalMenuContainer = document.querySelector('.modal_menu_container');
const menuOption = document.querySelectorAll('.menu_option');
const seeProjectDetailsBtn = document.querySelector('#see-projects-btn');

const projectArr = [
  {
    id: 1,
    name: ['Tonic', "Tonic"],
    description:[
    "A daily selection of privately personalized reads; no accounts or sign-ups required.", "A daily selection of privately personalized reads; no accounts or sign-ups required."],
    image:[ 'media/jumbo1.jpg', "media/jumbo5.jpg" ],
    technologies: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Javascript', 'Bootstrap'],
    Source: 'https://github.com/Ferizad/Mobile-portfolio',
    liveLink: 'https://github.com/Ferizad/Mobile-portfolio',
  },
  {
    id: 2,
    name: ['Multi-Post Stories Gain+Glory'],
    description:
      ["2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"],
    image: ['media/card1.png'],
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Source: 'https://github.com/Ferizad/Mobile-portfolio',
    liveLink: 'https://github.com/Ferizad/Mobile-portfolio',
  },
  {
    id: 3,
    name:[ 'Multi-Post Stories Gain+Glory'],
    description:
      ["3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"],
    image: ['media/card1.png'],
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Source: 'https://github.com/Ferizad/Mobile-portfolio',
    liveLink: 'https://github.com/Ferizad/Mobile-portfolio',
  },
  {
    id: 4,
    name: ['Multi-Post Stories Gain+Glory'],
    description:
      ["4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"],
    image: ['media/card1.png'],
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Source: 'https://github.com/Ferizad/Mobile-portfolio',
    liveLink: 'https://github.com/Ferizad/Mobile-portfolio',
  },
  {
    id: 5,
    name: ['Multi-Post Stories Gain+Glory'],
    description:
      ["5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"],
    image: ['media/card1.png'],
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Source: 'https://github.com/Ferizad/Mobile-portfolio',
    liveLink: 'https://github.com/Ferizad/Mobile-portfolio',
  },
  {
    id: 6,
    name: ['Multi-Post Stories Gain+Glory'],
    description:
      ["6 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea"],
    image: ['media/card1.png'],
    technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Source: 'https://github.com/Ferizad/Mobile-portfolio',
    liveLink: 'https://github.com/Ferizad/Mobile-portfolio',
  },
];
const toggleMobileMenu = (e) => {
  e.preventDefault();
  modalMenuContainer.classList.toggle('hide1');
};

hamburger.addEventListener('click', toggleMobileMenu);
closeHamburgerBtn.addEventListener('click', toggleMobileMenu);

menuOption.forEach((e) => {
  e.onclick = () => {
    modalMenuContainer.classList.toggle('hide1');
  };
});
  
const openProjectDetailsModal = e => {
  e.preventDefault();
  const body = document.body;
}
seeProjectDetailsBtn.addEventListener('click', openProjectDetailsModal)


let myCard = '';
let uList = '';
for (let i = 0; i < projectArr.length; i += 1) {
  uList = '';
  const myObj = projectArr[i];
  const techArr = projectArr[i].technologies;
  for (let j = 0; j < techArr.length; j += 1) {
    uList += `
                <li>${techArr[j]}</li>
              `;
  }

  myCard += `<article class="work-card">
  <figure class="work-img">
    <img src="${myObj.image}" alt="work screenshot" />
  </figure>
  <div class="work-text">
    <header>
      <h2>${myObj.name}</h2>
    </header>
    <div class="work-tools">
    <ul>
      ${uList}
      </ul>
    </div>
    <div class="project-btn">
      <button type="button" class='work-btn' ownIndex=${i}>See Project</button>
    </div>
  </div>
</article>`;
}
cardContainer.innerHTML = myCard;