let someImages = [
    "https://www.pinkvilla.com/imageresize/olivia_rodrigo_on_her_dating_app_experience.jpeg?width=752&format=webp&t=pvorg",
    "https://pyxis.nymag.com/v1/imgs/364/3c2/e4656d3f9875be246eaa54db802182533f-GettyImages-1328708163.rsquare.w700.jpg0",
    "https://i.ytimg.com/vi/jH4tYonmfk0/maxresdefault.jpg",
    "https://uproxx.com/wp-content/uploads/2021/05/olivia-rodrigo-sour-album-trailer-grid-1.jpg?w=710",
    "https://i.scdn.co/image/ab67706f00000003c9da2f125669d66439d8ba5c",
    "https://hips.hearstapps.com/vidthumb/images/olivia-rodrigo-courtney-love-1624912562.png?crop=1.00xw%3A1.00xh%3B0%2C0&resize=480%3A270",
];


const images = document.getElementsByTagName("img")

for (let i =0 ; i< images.length ; i++){

    const randomImg = Math.floor(Math.random() * someImages.length) 
    images[i].src = someImages[randomImg];

}

const headers = document.getElementsByTagName("h2")

for (let i =0 ; i< headers.length ; i++){

    
    headers[i].innerText = "listen to olivia";

}

const para = document.getElementsByTagName("p")

for (let i =0 ; i< para.length ; i++){

     
    para[i].innerText = "listen to olivia";

}