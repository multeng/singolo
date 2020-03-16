const MENU = document.getElementById('menu');
const MOBILELEFT = document.querySelector('.phone-left');
const MOBILERIGHT = document.querySelector('.phone-right');
const PORTFOLIO = document.querySelector('.container_wrapper');
const BUTTON = document.getElementById('button-form');
const CLOSEBUTTON = document.getElementById('close-btn');
const TAGS = document.querySelector('.tags');
const SLIDER = document.querySelector('.slider');

//MENU
MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(element => element.classList.remove('active'));
    event.target.classList.add('active');
});
// MOBILE IMAGE
MOBILELEFT.addEventListener('click', () => {
    document.querySelector('.phone-left-image').classList.toggle('img-off');
});

MOBILERIGHT.addEventListener('click', () => {
    document.querySelector('.phone-right-image').classList.toggle('img-off');
});
// PORTFOLIO
PORTFOLIO.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('img').forEach(element => element.classList.remove('bordered'));
    event.target.classList.add('bordered');
});
//FORM
BUTTON.addEventListener('click', (e) => {
    e.preventDefault();
    const subject = document.getElementById('subject').value.toString();
    const description = document.getElementById('description').value.toString();
    let resultSubj = document.getElementById('subject-result');
    let resultDescription = document.getElementById('description-result');
    if (subject != '') {
        resultSubj.innerText = subject;
    } else {
        resultSubj.innerText = 'Без темы';
    }
    if (description != '') {
        resultDescription.innerText = description;
    } else {
        resultDescription.innerText = 'Без описания';
    }
    document.getElementById('message-block').classList.remove('hidden');
});

CLOSEBUTTON.addEventListener('click', () => {
    document.getElementById('subject-result').innerText = '';
    document.getElementById('description-result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
    document.getElementById('form').reset();
});
// PORTFOLIOSHUFFFLE
data = ["./assets/images/ship.png", "./assets/images/girl.png", "./assets/images/castle.png", "./assets/images/robot.png", "./assets/images/rabbits.png", "./assets/images/green.png",
    "./assets/images/r2d2.png", "./assets/images/chikens.png", "./assets/images/beast.png", "./assets/images/letter.png", "./assets/images/Yeti.png", "./assets/images/table.png"];

TAGS.addEventListener('click', (event) => {
    TAGS.querySelectorAll('p').forEach(element => element.classList.remove('active-tag'));
    event.target.classList.add('active-tag');
    PORTFOLIO.innerHTML = ''
    PORTFOLIO.innerHTML = makeNewPortfolio(data);
});
function makeRandom(a, b) {
    return Math.random() - 0.5;
}

const makeNewPortfolio = (imageReferences) => {
    imageReferences.sort(makeRandom);
    let template = '';
    imageReferences.forEach(element => {
        template += `<div class="image"><img src=${element} alt="image"></div>`
    });
    return template;
}

// SLIDER
let items = document.querySelectorAll('.images-phone');
let currentItem = 0;
let isEnable = true;

document.querySelector('.left-button').addEventListener('click', () => {
    items[currentItem].classList.remove('slide-active');
    changeCurrentItem(currentItem+1);
    items[currentItem].classList.add('slide-active');
    document.querySelector('.slider').classList.toggle('color-slide');
})
document.querySelector('.right-button').addEventListener('click', () => {
    items[currentItem].classList.remove('slide-active');
    changeCurrentItem(currentItem+1);
    items[currentItem].classList.add('slide-active');
    document.querySelector('.slider').classList.toggle('color-slide');
})



function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}






