const artworks = [
    {
        author: "Marcel Russo",
        title: "Amur Hunting",
        details: "Canvas, oil (50x80)",
        price: "$210",
        image: "./img/01.png",
        country: "France"
    },
    {
        author: "Henri Céline",
        title: "Lady with a Dog",
        details: "Acrylic, paper (50x80)",
        price: "$240",
        image: "./img/02.png",
        country: "France"
    },
    {
        author: "François Dupont",
        title: "Procedure",
        details: "Color lithography (40x60)",
        price: "$290",
        image: "./img/03.png",
        country: "France"
    },
    {
        author: "Louis Detush",
        title: "Rose",
        details: "Paper, acrylic (50x80)",
        price: "$170",
        image: "./img/04.png",
        country: "France"
    },
    {
        author: "François Dupont",
        title: "Bird Banquet",
        details: "Color lithography (40x60)",
        price: "$340",
        image: "./img/05.png",
        country: "France"
    },
    {
        author: "Pierre Morange",
        title: "Landscape with Fish",
        details: "Color lithography (40x60)",
        price: "$290",
        image: "./img/06.png",
        country: "France"
    },
    {
        author: "Paul Smith",
        title: "Wild Beast",
        details: "Watercolor, paper (50x80)",
        price: "$19,500",
        image: "./img/11.png",
        country: "England"
    },
    {
        author: "John White",
        title: "Rocky Shore",
        details: "Color lithography (40x60)",
        price: "$17,500",
        image: "./img/12.png",
        country: "England"
    },
    {
        author: "Jim Watson",
        title: "River and Mountains",
        details: "Watercolor, paper (50x80)",
        price: "$20,500",
        image: "./img/13.png",
        country: "England"
    },
    {
        author: "Eugene Zillion",
        title: "White Parrot",
        details: "Color lithography (40x60)",
        price: "$15,500",
        image: "./img/14.png",
        country: "England"
    },
    {
        author: "Eric Gillman",
        title: "Night Fish",
        details: "Paper, acrylic (50x80)",
        price: "$12,500",
        image: "./img/15.png",
        country: "England"
    },
    {
        author: "Alfred Barr",
        title: "Ginger Cat",
        details: "Color lithography (40x60)",
        price: "$21,000",
        image: "./img/16.png",
        country: "England"
    },
    {
        author: "Kurt Werner",
        title: "Above the City",
        details: "Color lithography (40x60)",
        price: "$16,000",
        image: "./img/1.png",
        country: "Germany"
    },
    {
        author: "Max Richter",
        title: "Birds",
        details: "Canvas, oil (50x80)",
        price: "$14,500",
        image: "./img/2.png",
        country: "Germany"
    },
    {
        author: "Martin Mayer",
        title: "Among the Leaves",
        details: "Color lithography (40x60)",
        price: "$20,000",
        image: "./img/3.png",
        country: "Germany"
    },
    {
        author: "Herman Becker",
        title: "Bright Bird",
        details: "Color lithography (40x60)",
        price: "$13,000",
        image: "./img/4.png",
        country: "Germany"
    },
    {
        author: "Wolf Bauer",
        title: "Woodpeckers",
        details: "Paper, acrylic (50x80)",
        price: "$20,000",
        image: "./img/5.png",
        country: "Germany"
    },
    {
        author: "Walter Hartmann",
        title: "Great Waters",
        details: "Paper, acrylic (50x80)",
        price: "$23,000",
        image: "./img/6.png",
        country: "Germany"
    }
];

let replicasContent = document.querySelector('.replicas-content');
let navigation = document.querySelectorAll('.navigation');

if (replicasContent.childElementCount === 0) {
    getBlocks(artworks.filter(art => art.country === 'France'));
}

navigation.forEach(nav => {
    nav.addEventListener('click', () => {
        nav.classList.toggle('active', true);
        removeNavClasses(nav);
        let res = artworks.filter(art => art.country === nav.textContent);
        getBlocks(res);
    });
});

function removeNavClasses(activeNav) {
    navigation.forEach(nav => {
        if (nav !== activeNav) {
            nav.classList.remove('active');
        }
    });
}

function getBlocks(artBlock) {
    replicasContent.innerHTML = '';
    for (let i of artBlock) {
        let div = document.createElement('div');
        div.classList.add('replica-block');
        div.innerHTML = `<img class='replica-img' src=${i.image} alt="01">
        <p class='replica-author'>${i.author}</p>
        <h4 class='replica-title'>${i.title}</h4>
        <p class='replica-details'>${i.details}</p>
        <h3 class='replica-price'>${i.price}</h3>
        <a class="replica-button btn">In basket</a>`;
        replicasContent.appendChild(div);
    }
}