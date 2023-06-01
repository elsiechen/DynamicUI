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

const RenderCarousel = () => {
    const imgSlider = document.querySelector('.img-slider');
    const carouselDiv = document.createElement('div');
    carouselDiv.innerHTML = `
        <div class="imgContainer">
            <div class="imgDiv active" data-slide="0">
                <img class="img" src="a.jpg" alt="Kid" width="100%" height="100%">
            </div>
            <div class="imgDiv" data-slide="1">
                <img class="img" src="b.jpeg" alt="Kid" width="100%" height="100%">
            </div>
            <div class="imgDiv" data-slide="2">
                <img class="img" src="c.jpeg" alt="Kid" width="100%" height="100%">
            </div>
            <div class="imgDiv" data-slide="3">
                <img class="img" src="d.jpeg" alt="Kid" width="100%" height="100%">
            </div>
            <div class="imgDiv" data-slide="4">
                <img class="img" src="e.jpeg" alt="Kid" width="100%" height="100%">
            </div>
        </div>
        <div class="indicatorDiv">
            <img class="indicator" data-slide="0" src="minus.png" alt="Indicator">
            <img class="indicator" data-slide="1" src="minus.png" alt="Indicator">
            <img class="indicator" data-slide="2" src="minus.png" alt="Indicator">
            <img class="indicator" data-slide="3" src="minus.png" alt="Indicator">
            <img class="indicator" data-slide="4" src="minus.png" alt="Indicator">
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
    ShowIndicator();
}; 


const ShowIndicator = () => {
    const activeImg = document.querySelector('.active');
    const activeSlide = activeImg.getAttribute('data-slide');
    const indicators = document.querySelectorAll('.indicator');
    const activeIndicator = document.querySelector(`img[data-slide="${activeSlide}"]`);
    console.log(activeSlide)
    console.log(activeIndicator)
    // Remove active-indicator class from all indicators , and add 
    indicators.forEach(indicator => {
        if (indicator.classList.contains('active-indicator')) indicator.classList.remove('active-indicator');
    });
    // active-indicator class to activeIndicator
    activeIndicator.classList.add('active-indicator');
};

const NextEvent = () => {
    const nextBtn = document.querySelector('.nextBtn');
    const slides = document.querySelectorAll('.imgDiv');
    const slidesQty = slides.length;
    
    nextBtn.addEventListener('click', () => {
        const activeImg = document.querySelector('.active');
        let activeSlide = activeImg.getAttribute('data-slide');
        // Move activeSlide number to the next one
        if (activeSlide < slidesQty - 1) activeSlide++;
        else activeSlide = 0;
        // Get updated activeImg
        const updatedActiveImg = document.querySelector(`div[data-slide="${activeSlide}"]`);
        // Remove active class from current image and add it to the next image
        activeImg.classList.remove('active');
        updatedActiveImg.classList.add('active');
        ShowIndicator();
    });
};

const PrevEvent = () => {
    const prevBtn = document.querySelector('.prevBtn');
    const slides = document.querySelectorAll('.imgDiv');
    const slidesQty = slides.length;
    
    prevBtn.addEventListener('click', () => {
        const activeImg = document.querySelector('.active');
        let activeSlide = activeImg.getAttribute('data-slide');
        // Move activeSlide number to the next one
        if (activeSlide > 0) activeSlide--;
        else activeSlide = slidesQty - 1;
        // Get updated activeImg
        const updatedActiveImg = document.querySelector(`div[data-slide="${activeSlide}"]`);
        // Remove active class from current image and add it to the next image
        activeImg.classList.remove('active');
        updatedActiveImg.classList.add('active');
        ShowIndicator();
    });
};

// const ShowSlide = index => {
//     const slides = document.querySelectorAll('.imgDiv');
//     let currentIndex = 
//     slides
// };

const CarouselEvents = () => {
    NextEvent();
    PrevEvent();
};

RenderDropDown();
RenderCarousel();

CarouselEvents();
