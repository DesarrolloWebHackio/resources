import "./style.css";
import { Header } from "./src/components/Header/Header";
import { Categories } from "./src/components/Categories/Categories";
import { CategoriesData } from "./src/data/categories";
import { Pets } from "./src/components/Pets/Pets";
import { Footer } from "./src/components/Footer/Footer";

const app = document.querySelector("#app");

Header();
app.append(Categories(CategoriesData));

const sectionPets = document.createElement("section");
sectionPets.classList.add("pets");
app.append(sectionPets);
Pets();

Footer();