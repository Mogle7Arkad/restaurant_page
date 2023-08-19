

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    //create and append image element
    const image = document.createElement('img');
    image.src = './img/restaurant.jpeg';
    image.height = '300';
    pageContent.appendChild(image);

    //create and append text
    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Food City';
    pageContent.appendChild(headline);

    const slogan = document.createElement('p');
    slogan.textContent = '...satisfying your cravings!';
    pageContent.appendChild(slogan);

    content.appendChild(pageContent);
}

export default createRestaurantHomePage;