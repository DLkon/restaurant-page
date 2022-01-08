import Icon from './hamburguer.jpg';

const content = document.querySelector('#content');
const createHeader = function(){
    const header = document.createElement('header');
    content.appendChild(header);
    const Nav = document.createElement("div");
    Nav.classList.add("nav");
    
    const companyName = document.createElement("div");
    companyName.classList.add("company-name");

    const navegation = document.createElement("div");
    navegation.classList.add("navegation");

    const companyNameText = document.createElement("h1");
    companyNameText.textContent = "Dots Hamburgueria";
    companyNameText.classList.add("company-name-text");


    const NavBar = document.createElement("div");
    NavBar.classList.add("NavBar");
    const NavOptions = document.createElement("ul");
        NavOptions.classList.add("navegation-items");
    
        const Home = document.createElement('li');
            Home.classList.add("home");
                Home.textContent = "Home";

        const Menu = document.createElement('li');
            Menu.classList.add("menu");
                Menu.textContent = "Menu";

        const Contact = document.createElement('li');
         Contact.classList.add("contact");
            Contact.textContent = "Contact";

        NavOptions.appendChild(Home);
        NavOptions.appendChild(Menu);
        NavOptions.appendChild(Contact);
        NavBar.appendChild(NavOptions);
        navegation.appendChild(NavBar);

    companyName.appendChild(companyNameText);
    Nav.appendChild(companyName);
    Nav.appendChild(navegation);
    header.appendChild(Nav);

}; 
const createContent = function(){
        const section = document.createElement("section");
        section.classList.add("content");

        const container = document.createElement("div");
        container.classList.add("info");

        const description = document.createElement("div");
        description.classList.add("description");
        const descriptionTitle = document.createElement("h2");
            descriptionTitle.textContent = "Come Taste the Best Burguer in Londrina"
        const descriptionText = document.createElement('p');
            descriptionText.textContent = "We are a kitchen specializing in handmade burgers, our priority is the flavor and the customer"

        description.appendChild(descriptionTitle);
        description.appendChild(descriptionText);
         
        container.appendChild(description);

        const myIcon = new Image();
        myIcon.src = Icon;
        myIcon.classList.add("img");
        container.appendChild(myIcon);
        

        section.appendChild(container);
        content.appendChild(section);
    };

const init = function () {
    createContent();

};

export {createHeader, init};
