import "./Header.css";
import { Button } from "../Button/Button";
import { navLinks } from "../../data/navLinks";
import { NavLink } from "../NavLink/NavLink";
import { Pets } from "../Pets/Pets";

export const Header = () => {
  const header = document.createElement("header");
  const app = document.querySelector("#app");

  const logo = document.createElement("h1");
  logo.textContent = "Compopets";
  logo.addEventListener("click", () => Pets(""));

  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  navLinks.forEach((navLink) => ul.append(NavLink(navLink)));

  const button = Button({
    text: "Log in",
    fnc: () => {
      console.log("Funciona!");
    },
    type: "secondary",
    size: "l"
  });

  header.append(logo, nav, button);
  nav.append(ul);
  app.append(header);
};
