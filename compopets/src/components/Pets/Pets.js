import { pets } from "../../data/pets";
import { Button } from "../Button/Button";
import "./Pets.css";

export const Pets = (category) => {
  const sectionPets = document.querySelector(".pets");

  sectionPets.innerHTML = "";

  for (const pet of pets) {
    if (category === pet.tipo || !category) {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const divInfo = document.createElement("div");
      const edad = document.createElement("p");
      const raza = document.createElement("p");

      img.src = pet.imagen_url;
      edad.textContent = `Edad: ${pet.edad}`;
      raza.textContent = `Raza: ${pet.raza}`;

      divInfo.append(edad, raza, Button({ text: "Adóptame!" }));
      div.append(img, divInfo);
      sectionPets.append(div);
    }
  }
};
