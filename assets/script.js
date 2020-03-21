//SCROLL

document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const currentPisition = window.scrollY + 300;
    const paths = document.querySelectorAll('body > div');
    const links = document.querySelectorAll('#menu a');
    paths.forEach((element) => {
        if (element.offsetTop <= currentPisition && (element.offsetTop + element.offsetHeight) > currentPisition) {
            links.forEach((a) => {
                a.classList.remove('active-nav');
                if (element.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active-nav');
                }
            });
        }
    });
}

// MOBILE IMAGE

const MOBILELEFT = document.querySelector('.phone-left')
const MOBILERIGHT = document.querySelector('.phone-right')
MOBILELEFT.addEventListener('click', () => {
    document.querySelector('.phone-left-image').classList.toggle('img-off');
});

MOBILERIGHT.addEventListener('click', () => {
    document.querySelector('.phone-right-image').classList.toggle('img-off');
});
// SLIDER

let items = document.querySelectorAll('.phones');
let currentItem = 0;
let isEnable = true;

function hideItem(direction) {
    isEnable = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('slide_active', direction)
    });
}
function showItem(direction) {
    items[currentItem].classList.add('next', direction);
    items[currentItem].addEventListener('animationend', function () {
        this.classList.remove('next', direction)
        this.classList.add('slide_active')
        isEnable = true;
    });
}

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}
function previosItem(n) {
    hideItem('to-right');
    changeCurrentItem(n - 1);
    showItem('from-left');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-right');
}

document.querySelector('.left-arrow').addEventListener('click', function () {
    if (isEnable) {
        previosItem(currentItem);
    }
    document.querySelector('.slider').classList.toggle('color-slide');
})
document.querySelector('.right-arrow').addEventListener('click', function () {
    if (isEnable) {
        nextItem(currentItem);
    }
    document.querySelector('.slider').classList.toggle('color-slide');
})
// PORTFOLIO

const PORTFOLIO = document.querySelector('.portfolio-images')

PORTFOLIO.addEventListener('click', (event) => {
    PORTFOLIO.querySelectorAll('img').forEach(element => element.classList.remove('bordered'));
    if (event.target.classList.contains('portfolio-content')) {
        event.target.classList.add('bordered');
    }
});
// PORTFOLIOSHUFFFLE
ImagesContent = ["./assets/images/portfolio/ship.png", "./assets/images/portfolio/girl.png", "./assets/images/portfolio/castle.png", "./assets/images/portfolio/robot.png", "./assets/images/portfolio/rabbits.png", "./assets/images/portfolio/green.png",
    "./assets/images/portfolio/r2d2.png", "./assets/images/portfolio/chikens.png", "./assets/images/portfolio/beast.png", "./assets/images/portfolio/letter.png", "./assets/images/portfolio/Yeti.png", "./assets/images/portfolio/table.png"];

const TAGS = document.querySelector('.tags');

TAGS.addEventListener('click', (event) => {
    TAGS.querySelectorAll('.tag').forEach(element => element.classList.remove('active-tag'));
    if (event.target.classList.contains('tag')) {
        event.target.classList.add('active-tag');
        removePortfolioImages();
        addPortfolioImage(generatePortfolioImage(ImagesContent));
    }
})
function removePortfolioImages() {
    PORTFOLIO.querySelectorAll('.portfolio-image').forEach(element => {
        element.remove();
    })
}
function makeRandom(a, b) {
    return Math.random() - 0.5;
}
function generatePortfolioImage(imageReferences) {
    let wrapper = new DocumentFragment();
    imageReferences.sort(makeRandom);
    for (let i = 0; i < 12; i++) {
        let div = document.createElement('div')
        div.classList.add('portfolio-image');
        div.insertAdjacentHTML("afterbegin",`<img class="portfolio-content" src=${imageReferences[i]} alt="image">`)
        wrapper.append(div);
    }
    return wrapper;
}
function addPortfolioImage(funct) {
    PORTFOLIO.append(funct);
}

// MODALWINDOW

const BUTTON = document.getElementById('button-form');
const CLOSEBUTTON = document.getElementById('close-btn');


BUTTON.addEventListener('click', (event) => {
    event.preventDefault();
    let subject = document.getElementById('subject').value.toString();
    let description = document.getElementById('description').value.toString();
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
    document.querySelector('.form').reset();
});