// import { RenderDropDown } from "./drop-down";
const mobile = document.querySelector('.mobile');

// {href: '', name: ''},{href: '', name: ''}
const DropDown = (name,...args) => {
    const dropDownDiv = document.createElement('div');
    const dropBtn = document.createElement('button');
    const dropDownContent = document.createElement('div');
    dropBtn.textContent = name;
    for (let i = 0; i < args.length; i++) {
        const item = document.createElement('a');
        item.setAttribute('href', args[i].href);
        item.textContent = args[i].name;
        dropDownContent.appendChild(item);
    }
    
    dropDownDiv.classList.add('dropDownDiv');
    dropBtn.classList.add('dropBtn');
    dropDownContent.classList.add('dropDownContent');

    dropDownDiv.appendChild(dropBtn);
    dropDownDiv.appendChild(dropDownContent);
    
    return dropDownDiv;
};

const RenderDropDown = () => {
    const drop = document.querySelector('.drop-down');
    const fruits = DropDown( 
        'Fruits',
        {
            href: '#',
            name: 'Apple'
        },
        {
            href: '#',
            name: 'Kiwi'
        },
        {
            href: '#',
            name: 'Mango'
        },
    );

    const webs = DropDown( 
        'Webs',
        {
            href: 'https://tw.yahoo.com/',
            name: 'Yahoo TW'
        },
        {
            href: 'https://www.facebook.com/',
            name: 'FB'
        },
        {
            href: 'https://chat.openai.com/',
            name: 'ChatGPT'
        },
    );

    drop.appendChild(fruits);
    drop.appendChild(webs);
};

const Carousel = () => {
    const imgSlider = document.querySelector('.img-slider');
    const carouselDiv = document.createElement('div');
    carouselDiv.textContent = `
        <div class="imgContainer">
            <div class="imgDiv active" data-slide="0">
                <img class="img" src="a.jpb" alt="Kid">
            </div>
            <div class="imgDiv active" data-slide="1">
                <img class="img" src="b.jpeg" alt="Kid">
            </div>
            <div class="imgDiv active" data-slide="2">
                <img class="img" src="c.jpeg" alt="Kid">
            </div>
        </div>
        <div class="indicatorDiv">
            <img class="indicator" data-slide="0" src="minus.png" alt="Indicator">
            <img class="indicator" data-slide="1" src="minus.png" alt="Indicator">
            <img class="indicator" data-slide="2" src="minus.png" alt="Indicator">
        </div>
        <button class="prevBtn">
            <img class="prevImg" src="left-arrow.png" alt="Previous">
        </button>
        <button class="nextBtn">
            <img class="nextImg" src="right-arrow.png" alt="Next">
        </button>
    `;

    carouselDiv.classList.add('carouselDiv');
    imgSlider.appendChild(carouselDiv);
}; 

RenderDropDown();
