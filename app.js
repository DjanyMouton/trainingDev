// Animation header title //

let h1Header = document.querySelector("#h1_header");
const title = "trainingDev";
let limit = title.length;
let index = 0;

const titleInterval = setInterval(() => {
    if(index <= limit)
    h1Header.innerText = title.slice(0,index++);
    else{
        clearInterval(titleInterval)
    }
}, 100);

// Animation header menu apparition

let headerMenu = document.querySelector("#button_list");
console.log(headerMenu);
const appearButton = setTimeout(() => {
    headerMenu.classList.add("visible");
    
}, 1150)