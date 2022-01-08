const content = document.querySelector('#content');
const createContact = function(){

    const section = document.createElement("section");
    section.classList.add("content");
    content.appendChild(section);
    
    const container = document.createElement("div");
    container.classList.add("container-contact");
    section.appendChild(container);

    const divMap = document.createElement("div");
    divMap.classList.add("google-maps");
    container.appendChild(divMap);

    const divCard = document.createElement("div");
    divCard.classList.add("buisness-hours");
    container.appendChild(divCard);

    const iframe = document.createElement("iframe");
    iframe.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.4244510639287!2d-51.14821348518599!3d-23.300353884812996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb448502809699%3A0x6800226ff8215503!2sR.%20Trememb%C3%A9s%2C%20498%20-%20Vila%20Casoni%2C%20Londrina%20-%20PR%2C%2086026-410!5e0!3m2!1spt-BR!2sbr!4v1641416715568!5m2!1spt-BR!2sbr")
    iframe.setAttribute("width","400");
    iframe.setAttribute("height","300");
    iframe.setAttribute("style","border:0;");
    iframe.setAttribute("allowfullscreen","");
    iframe.setAttribute("loading","lazy");

    divMap.appendChild(iframe);

    const time = document.createElement("div");
    time.classList.add("time");
    divCard.appendChild(time);

    const hourTitle = document.createElement("h3");
    hourTitle.textContent = "Hours"
    hourTitle.setAttribute("id","h");
    time.appendChild(hourTitle);

    const hoursOfWork = document.createElement("h3");
    hoursOfWork.textContent = "19:30pm - 00:00 am";
    time.appendChild(hoursOfWork);

    const daysOfWOrk = document.createElement("h3");
    daysOfWOrk.textContent = "Tue - Sun";
    time.appendChild(daysOfWOrk);

    const dayOff = document.createElement("h3");
    dayOff.textContent = "Monday: day off";
    time.appendChild(dayOff);

    divCard.appendChild(time);

    const info = document.createElement("h3");
    info.textContent = "Only orders by Ifood";
    info.setAttribute("id","bottom");
    divCard.appendChild(info);
    
    
};

export default createContact;