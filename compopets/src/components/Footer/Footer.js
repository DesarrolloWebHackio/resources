import { rrss } from "../../data/rrss";
import { Button } from "../Button/Button";
import "./Footer.css";

export const Footer = () => {
  const app = document.querySelector("#app");
  const footer = document.createElement("footer");

  const div = document.createElement("div");

  for (const rs of rrss) {
    const img = document.createElement("img");
    img.src = rs.logo;
    div.append(img);
  }

  footer.append(
    div,
    Button({
      text: "Adiós!",
      fnc: () => alert("Hasta aquí la clase de componentes!"),
      type: "secondary"
    })
  );

  app.append(footer);
};
