import React from "react";
import Card from "./Card";

function FrontendProjects() {
  return (
    <div>
      <div
        className="mt-[74px] gap-[74px] flex  justify-center items-center md:flex flex-wrap mx-[169px]"
        id="frontend-projects"
      >
        <Card
          image="./src/Graphics/To-do list app.png"
          heading="Simple To-do List App"
          description="This app was built using Javascript and simple CSS. It saves the user’s input on their local storage, for easy accessibility."
          icon="./src/Graphics/Github2.svg"
          button="Preview"
        />

        <Card
          image="./src/Graphics/Trafalgar.png"
          heading="Implementing a Figma Desktop View Webpage"
          description="The static landing page Figma design was implemented using React components"
          icon="./src/Graphics/Github2.svg"
          button="Preview"
        />

        <Card
          image="./src/Graphics/Responsive webpage.png"
          heading="A Responsive Webpage"
          description="The webpage was built using basic Basic CSS and Media Query"
          icon="./src/Graphics/Github2.svg"
          button="Preview"
        />

        <Card
          image="./src/Graphics/Portfolio webpage.png"
          heading="Responsive Portfolio Webpage"
          description="The webpage was built using Tailwindcss and Flowbite components"
          icon="./src/Graphics/Github2.svg"
          button="Preview"
        />
      </div>
    </div>
  );
}

export default FrontendProjects;
