const hamburger = document.querySelector('.hamburger_img');
const closeHamburgerBtn = document.querySelector('.close_hamburger');
const modalMenuContainer = document.querySelector('.modal_menu_container');
const menuOption = document.querySelectorAll('.menu_option');
const worksSection = document.querySelector('.works_section');

const cardsData = [
  {
    id: 0,
    name: ['Tonic', 'Tonic'],
    description: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'A daily selection of privately personalized reads; no accounts or sign-ups required.'],
    image: ['media/jumbo1.jpg', 'media/jumbo5.png'],
    technologies: ['html', ' css ', 'javaScript'],
    technologiesDesk: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologiesPop: ['html', ' css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    Source: 'https://github.com/Ferizad/Mobile-portfolio',
    liveLink: 'https://github.com/Ferizad/Mobile-portfolio',
  },

  {
    id: 1,
    name: ['Multi-Post Stories', 'Multi-Post Stories'],
    description: [
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'A daily selection of privately personalized reads; no accounts or sign-ups required.', 'Experimental content creation feature that allows users to add to an existing story over the course a day without spamming their friends.'],
    image: ['media/jumbo4.jpg', 'media/jumbo4b.jpg'],
    technologies: ['html', ' css ', 'javaScript'],
    technologiesDesk: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologiesPop: ['html', ' css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    Source: 'https://github.com/Ferizad/Mobile-portfolio',
    liveLink: 'https://github.com/Ferizad/Mobile-portfolio',
  },

  {
    id: 2,
    name: ['Tonic', 'Facebook 360'],
    description:
      ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR..."],
    image: ['media/jumbo3.jpg', 'media/jumbo1b.png'],
    technologies: ['html', ' css ', 'javaScript'],
    technologiesDesk: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologiesPop: ['html', ' css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
    Source: 'https://github.com/Ferizad/Mobile-portfolio',
    liveLink: 'https://github.com/Ferizad/Mobile-portfolio',
  },

  {
    id: 3,
    name: ['Multi-Post Stories', 'Uber Navigation'],
    description:
      ['Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent', 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.'],
    image: ['media/jumbo4.jpg', 'media/jumbo2b.png'],
    technologies: ['html', ' css ', 'javaScript'],
    technologiesDesk: ['html', 'Ruby on rails', 'css', 'javaScript'],
    technologiesPop: ['html', ' css', 'javaScript', 'github', 'ruby', 'Bootstraps'],
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

let displayCard = '';
for (let i = 0; i < cardsData.length; i += 1) {
  displayCard += `
  
  <article class="works_article bg_color7">
            <figure class="figure1">
                <a href="#"><img src="${cardsData[i].image[0]}" alt="Tonic_img"></a>
            </figure>
            <figure class="figure2">
                <a href="#"><img src="${cardsData[i].image[1]}" alt="Nature_img"></a>
            </figure>
            <div class="works_articlediv show1">
                <h3><a class="textdecoration font1" href="#">${cardsData[i].name[0]}</a></h3> 
                <ul>
                    <li><a class="textdecoration font2" href="#">CANOPY</a></li>
                    <li><a class="textdecoration" href="#"><img src="media/mid_dot.jpg" alt="mit_dot"></a></li>
                    <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
                    <li class="textdecoration"><a href="#"><img src="media/mid_dot.jpg" alt="mit_dot"></a></li>
                    <li><a class="textdecoration font3" href="#">2015</a></li>
                </ul> 
                <p>${cardsData[i].description[0]}</p>
                <ul class="gridbox1">
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologies[0]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologies[1]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologies[3]}</a></li>
                </ul>
                <button class="font5 textdecoration seepopup" type="button" index=${cardsData[i].id}>See Project</button>
            </div>
            <div class="works_articlediv show2">
                <h3><a class="textdecoration font1" href="#">${cardsData[i].name[0]}</a></h3>
                <ul class="ul1">
                    <li><a class="textdecoration font2" href="#">CANOPY</a></li>
                    <li><a class="textdecoration" href="#"><img src="media/mid_dot.jpg" alt=""></a></li>
                    <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
                    <li><a class="textdecoration" href="#"><img src="media/mid_dot.jpg" alt=""></a></li>
                    <li><a class="textdecoration font3" href="#">2015</a></li>
                </ul>
                <p>${cardsData[i].description[1]}</p>
                <ul class="gridbox1">
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[0]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[1]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[2]}</a></li>
                    <li class="background1"><a class="textdecoration font4" href="#">${cardsData[i].technologiesDesk[3]}</a></li>
                </ul>
                <button class="font5 textdecoration seepopup" type="button" index=${cardsData[i].id}>See Project</button>
            </div>
        </article>
  `;
}

worksSection.innerHTML = '';
worksSection.innerHTML = displayCard;

const showPopupBtn = document.querySelectorAll('.seepopup');
const popUpContainer = document.createElement('section');
popUpContainer.className = 'popup_section';
popUpContainer.classList.add('bg_color6');
showPopupBtn.forEach((e) => {
  e.addEventListener('click', () => {
    const btnIndex = e.getAttribute('index');

    const popupEle = `
  <article class="popup_article bg_color7">
<div class="popup_articlediv show1">
    <header class="popup_flex1">
        <h3><a class="textdecoration font1" href="#">${cardsData[btnIndex].name[0]}</a></h3>
        <button type="button" class="close_popup "><img src="media/closepopup.png" alt=""></button>
    </header>
    <ul class="list1">
        <li><a class="textdecoration font2" href="#">CANOPY</a></li>
        <li><a class="textdecoration" href="#"><img src="media/mid_dot.jpg" alt="mit_dot"></a></li>
        <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
        <li class="textdecoration"><a href="#"><img src="media/mid_dot.jpg" alt="mit_dot"></a></li>
        <li><a class="textdecoration font3" href="#">2015</a></li>
    </ul>
    <figure class="figure1">
        <a href="#"><img src="${cardsData[btnIndex].image[0]}" alt="Tonic_img"></a>
    </figure>
    <article class="desc1">
        <p>${cardsData[btnIndex].description[0]}</p>
        <ul class="gridbox1 gridbox1b">
            <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologies[0]}</a></li>
            <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologies[1]}</a></li>
            <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologies[2]}</a></li>
        </ul>
    </article>
    <footer>
        <button class="footer_btn textdecoration" id="see-projects-btn" type="submit">
            <span>See Source</span>
            <img src="media/live_icon.png" alt="">
        </button>
        <button class="footer_btn textdecoration" id="see-projects-btn" type="submit">
            <span>See Live</span>
            <img src="media/github_source.jpg" alt="">
        </button>
        
    </footer>
</div>
<div class="popup_articlediv show2">
    <header class="popup_flex1">
        <h3><a class="textdecoration font1" href="#">${cardsData[btnIndex].name[0]}</a></h3>
        <button type="button" class="close_popup"><img src="media/closepopup.png" alt=""></button>
    </header> 
    <ul class="list1 ul1">
        <li><a class="textdecoration font2" href="#">CANOPY</a></li>
        <li><a class="textdecoration" href="#"><img src="media/mid_dot.jpg" alt=""></a></li>
        <li><a class="textdecoration font3" href="#">Back End Dev</a></li>
        <li><a class="textdecoration" href="#"><img src="media/mid_dot.jpg" alt=""></a></li>
        <li><a class="textdecoration font3" href="#">2015</a></li>
    </ul>
    <figure class="figure2 ">
        <a href="#"><img src="${cardsData[btnIndex].image[1]}" alt="Nature_img"></a>
    </figure>
    <article class="popup_flex2">
        <p class="width80">${cardsData[btnIndex].description[1]}</p>
        <div>
            <ul class="gridbox2">
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[0]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[1]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[2]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[3]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[4]}</a></li>
                <li class="background1"><a class="textdecoration font4" href="#">${cardsData[btnIndex].technologiesPop[5]}</a></li>
            </ul>
            <footer>
                 <button class="align_3 footer_btn textdecoration" id="see-projects-btn" type="submit">
                    <span>See Live</span>
                    <img src="media/live_icon.png" alt="">
                </button>
                <button class="align_3 footer_btn textdecoration" id="see-projects-btn" type="submit">
                    <span>See Source</span>
                    <img src="media/github_source.jpg" alt="">
                </button>
                
            </footer>
            
        </div>
       
    </article>
 
    
</div>
</article>
`;

    const body = document.querySelector('body');
    body.appendChild(popUpContainer);
    const popUpBox = document.querySelector('.popup_section');
    popUpBox.innerHTML = popupEle;
    const closePopup = document.querySelectorAll('.close_popup');
    closePopup.forEach((e) => {
      e.addEventListener('click', () => {
        popUpContainer.remove();
      });
    });
  });
});