//module for creating contact page

const createContactPage = () =>{
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add("page-content");

    const from = document.createElement("form");
    from.classList.add("contact-form");

    const headingInput = document.createElement("input");
    headingInput.type = "text";
    headingInput.placeholder = "Enter heading";
    from.appendChild(headingInput);

    const addressInput = document.createElement("input");
    addressInput.type = "text";
    addressInput.placeholder = "Enter address";
    from.appendChild(addressInput);

    const phoneInput = document.createElement("input");
    phoneInput.type = "text";
    phoneInput.placeholder = "Enter number";
    from.appendChild(phoneInput);

    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Submit";
    from.appendChild(submitButton);

    pageContent.appendChild(from);
    content.appendChild(pageContent);
};

export default createContactPage;