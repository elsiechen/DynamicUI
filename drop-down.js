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

export { RenderDropDown };
