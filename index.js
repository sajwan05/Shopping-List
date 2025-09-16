const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", ()=> {
    let value = input.value;

    input.value = "";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button);

    span.textContent = value;
    span.setAttribute("style", "font-size: 1.8rem; font-weight: 400;")
    button.textContent = "Delete";
    button.style.backgroundColor = "Red";

    button.style.color = "white";

    ul.appendChild(li);

    button.addEventListener("click", () => {
        li.remove();
        button.remove();
    });

    input.focus();

})