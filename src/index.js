import {createHeader,init} from "./modules/inital-page";
import createMenu from "./modules/menu-page";
import createContact from "./modules/contact-page";

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
 }
};

    createHeader();
    init();
    
    const Menu = document.querySelector(".menu");
    Menu.addEventListener('click',()=>{
        const content = document.querySelector(".content");
        content.remove();
        createMenu();
    });


    const Home = document.querySelector(".home");
    Home.addEventListener('click',()=> {
        const content = document.querySelector(".content");
        content.remove();
        init();
    });

    const Contact = document.querySelector(".contact");
    Contact.addEventListener("click",()=>{
        const content = document.querySelector(".content");
        content.remove();
        createContact();
        
    });









