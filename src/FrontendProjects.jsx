import React from "react";
import Card from "./Card";

function FrontendProjects() {
  return (
    <div id="frontend-projects">
      <div
        className="mt-[74px] gap-[74px] flex  justify-center items-center md:flex flex-wrap mx-[169px]"
       x
      >
        <Card
          image="./src/Graphics/To-do list app.png"
          heading="Simple To-do List App"
          description="This app was built using Javascript and simple CSS. It saves the user’s input on their local storage, for easy accessibility."
          icon={<a href="https://github.com/AfoDyDigitals/week9-Assignment" target="_blank"><img src="./src/Graphics/Github2.svg"/></a>}
          button={<a className text-black href="https://afodydigitals.github.io/week9-Assignment/" target="_blank">Preview</a>}
        />

        <Card
          image="./src/Graphics/Trafalgar.png"
          heading="Implementing a Figma Desktop View Webpage"
          description="The static landing page Figma design was implemented using React components"
          icon="./src/Graphics/Github2.svg"
          button={<a className text-black href="https://trafalgar-landing-page-hi86.onrender.com/ " target="_blank">Preview</a>}
        />

        <Card
          image="./src/Graphics/Responsive webpage.png"
          heading="A Responsive Webpage"
          description="The webpage was built using basic Basic CSS and Media Query"
          icon="./src/Graphics/Github2.svg"
          button={<a className text-black href="https://afodydigitals.github.io/Responsive-Webpage/" target="_blank">Preview</a>}
        />

        <Card
          image="./src/Graphics/Portfolio webpage.png"
          heading="Responsive Portfolio Webpage"
          description="The webpage was built using Tailwindcss and Flowbite components"
          icon="./src/Graphics/Github2.svg"
          button={<a className text-black href="https://afodydigitals.github.io/portfolio-webpage-project/src/index.html" target="_blank">Preview</a>}
        />
      </div>
    </div>
  );
}

export default FrontendProjects;
