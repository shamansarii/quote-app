let celebrities = [
{
    name: "Abdul Sattar Edhi",
    title: "Founder, Edhi Foundation",
    moreInfoURL: "https://en.wikipedia.org/wiki/Abdul_Sattar_Edhi",
    imgURL: "edhi.jpg",
    quote: "No religion is higher than humanity."
}, 
{
    name: "Malala Yousufzai",
    title: "Female Education Activist",
    moreInfoURL: "https://en.wikipedia.org/wiki/Malala_Yousafzai",
    imgURL: "malala.jpg",
    quote: "One child, one teacher, one book, one pen can change the world."
},
{
    name: "Quaid-e-Azam",
    title: "Great Leader",
    moreInfoURL: "https://en.wikipedia.org/wiki/Muhammad_Ali_Jinnah",
    imgURL: "quaid-e-azam.jpg",
    quote: "I am proud of my work for my country."
},
{
    name: "Benazir Bhutto",
    title: "Prime Minister of Pakistan",
    moreInfoURL: "https://en.wikipedia.org/wiki/Benazir_Bhutto",
    imgURL: "benazir-bhutto.jpg",
    quote: "Freedom is not an end. Freedom is a beginning."
},
{
    name: "Allama Iqbal",
    title: "Best poet",
    moreInfoURL: "https://en.wikipedia.org/wiki/Muhammad_Iqbal",
    imgURL: "allama-iqbal.png",
    quote: "Words, without power, is mere philosophy."
},
{
    name: "Arfa Karim",
    title: "Microsoft Certified Professional",
    moreInfoURL: "https://en.wikipedia.org/wiki/Arfa_Karim",
    imgURL: "arfa-karim.jpg",
    quote: "If you think confident, you act confident."
},
{
    name: "Abdul Qadeer Khan",
    title: "Nuclear Physicist",
    moreInfoURL: "https://en.wikipedia.org/wiki/Abdul_Qadeer_Khan",
    imgURL: "abdul-qadir-khan.jpg",
    quote: "People go out of their way to show the love and respect for me. It is very gratifying."
}, 
{
    name: "Angelina-Jolie",
    title: "filmmaker, and humanitarian.",
    moreInfoURL: "https://en.wikipedia.org/wiki/Angelina_Jolie",
    imgURL: "angelina-jolie.jpg",
    quote: "I think if you make a good movie, people walk away arguing."
} 
]

function initialize() {
    // let bodyEl = document.querySelector("body");
    let celebritiesGroupEl = document.querySelector("#celebrities-list");
    for(let i = 0 ; i < celebrities.length; i++) {
        // bodyEl.innerHTML +=
        celebritiesGroupEl.innerHTML +=  `
        
        <div class="celebrity-img-div"
        style="background-image: url('images/${celebrities[i].imgURL}')" onclick="changeCeleb(${i})">
        <p class="celeb-img-text">${celebrities[i].name}</p>
        </div>
        `
    }
    changeCeleb(0);
}

function changeCeleb(celebIndex) {
    console.log(celebrities[celebIndex].name);
    document.querySelector("#celeb-name").innerHTML = celebrities[celebIndex].name;
    document.querySelector("#celeb-title").innerHTML = celebrities[celebIndex].title;
    // let rand1 = Math.floor(Math.random() * 255);
    // let rand2 = Math.floor(Math.random() * 255);
    // let rand3 = Math.floor(Math.random() * 255);
    // // document.querySelector("#")
    document.querySelector("#celebrity-img").style["background-image"] = `url(images/${celebrities[celebIndex].imgURL})`;
    document.querySelector("#celeb-quote").innerHTML = celebrities[celebIndex].quote;
    document.querySelector("#celeb-link a").href= celebrities[celebIndex].moreInfoURL;
}