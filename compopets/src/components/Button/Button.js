import "./Button.css";

export const Button = ({ text, fnc = () => {}, type, size = "m" }) => {
    const button = document.createElement("button");

    button.classList.add("common_button", type, size);
    button.textContent = text;
    button.addEventListener("click", fnc);

    return button;
}