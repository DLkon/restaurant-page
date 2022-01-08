const content = document.querySelector('#content');

const createMenu = function() {
const section = document.createElement("section");
section.classList.add("content");
content.appendChild(section);

const container = document.createElement("div");
container.classList.add("container-cards");
section.appendChild(container);

const cardOne = document.createElement("div");
const cardTwo = document.createElement("div");
const cardThree = document.createElement("div");
const cardFour = document.createElement("div");

cardOne.classList.add("card");
cardTwo.classList.add("card");
cardThree.classList.add("card");
cardFour.classList.add("card");

container.appendChild(cardOne);
container.appendChild(cardTwo);
container.appendChild(cardThree);
container.appendChild(cardFour);

const burgCheddarImg = document.createElement("div");
burgCheddarImg.classList.add("burg-image");
    cardOne.appendChild(burgCheddarImg);
const burgCheddarDescription = document.createElement("div");
burgCheddarDescription.classList.add("burg-description");
    cardOne.appendChild(burgCheddarDescription);
const burgCheddarName = document.createElement("h3");
    burgCheddarName.textContent = "Smash Cheddar"
    burgCheddarDescription.appendChild(burgCheddarName);
const burgCheddarInfo = document.createElement("p");
    burgCheddarInfo.textContent = "A delicious burguer with cheddar cheese, purple Onion, Brioche Bread and especial sauces"
    burgCheddarDescription.appendChild(burgCheddarInfo);

const burgBaconImg = document.createElement("div");
burgBaconImg.classList.add("burg-image");
    cardTwo.appendChild(burgBaconImg);
const burgBaconDescription = document.createElement("div");
burgBaconDescription.classList.add("burg-description");
    cardTwo.appendChild(burgBaconDescription);
const burgBaconName = document.createElement("h3");
    burgBaconName.textContent = "Smash Bacon"
    burgBaconDescription.appendChild(burgBaconName);
const burgBaconInfo = document.createElement("p");
    burgBaconInfo.textContent = "A delicious burguer with cheddar cheese, caramelized onion,  Brioche Bread, crispy bacon and especial sauces"
    burgBaconDescription.appendChild(burgBaconInfo);

const burgClassicImg = document.createElement("div");
burgClassicImg.classList.add("burg-image");
    cardThree.appendChild(burgClassicImg);
const burgClassicDescription = document.createElement("div");
burgClassicDescription.classList.add("burg-description");
    cardThree.appendChild(burgClassicDescription);
const burgClassicName = document.createElement("h3");
    burgClassicName.textContent = "Classic"
    burgClassicDescription.appendChild(burgClassicName);
const burgClassicInfo = document.createElement("p");
    burgClassicInfo.textContent = "A delicious burguer with cheddar cheese, purple Onion, Brioche Bread, pickles and especial sauces"
    burgClassicDescription.appendChild(burgClassicInfo);

const burgPepperoniImg = document.createElement("div");
burgPepperoniImg.classList.add("burg-image");
    cardFour.appendChild(burgPepperoniImg);
const burgPepperoniDescription = document.createElement("div");
burgPepperoniDescription.classList.add("burg-description");
    cardFour.appendChild(burgPepperoniDescription);
const burgPepperoniName = document.createElement("h3");
    burgPepperoniName.textContent = "Smash Bacon"
    burgPepperoniDescription.appendChild(burgPepperoniName);
const burgPepperoniInfo = document.createElement("p");
    burgPepperoniInfo.textContent = "A delicious burguer with cheddar cheese, caramelized onion,  Brioche Bread, crispy bacon and especial sauces"
    burgPepperoniDescription.appendChild(burgPepperoniInfo);


};

export default createMenu;