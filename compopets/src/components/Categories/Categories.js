import { Pets } from "../Pets/Pets";
import "./Categories.css";

export const Categories = (categories) => {
  const divCategories = document.createElement("div");
  divCategories.classList.add("categories")
  for (const category of categories) {
    const button = document.createElement("button");
    button.innerHTML = `
            <img src="${category.img}" alt="${category.name}"/>
            <p>${category.name}</p>
        `;
    button.addEventListener("click", () => Pets(category.key));
    divCategories.append(button);
  }
  return divCategories;
};
