import React from "react";
import Card from "./Card";

function UiProjects() {
  return (
    <div>
      <div
        className=" hidden mt-[74px] gap-[74px] flex  justify-center items-center md:hidden flex flex-wrap mx-[169px]"
        id="frontend-projects"
      >
        <Card
          image="./src/Graphics/FOOTBALL TICKET WEBSITE DESKTOP MOCKUP.jpg"
          heading="Football Ticketing App (Desktop)"
          description="The project was inspired by Arsenal FC's ticketing website, it was designed and prototyped using Adobe XD"
          icon="./src/Graphics/AdobeXD.svg"
          button="Preview"
        />

        <Card
          image="./src/Graphics/TRAILER BROWSING APP MOCKUP.jpg"
          heading="Mobile App UI For a Trailer Browsing App"
          description="The app UI was designed to create a Solution for movie lovers who want To search and preview movie trailers As they are released"
          icon="./src/Graphics/Figma.svg"
          button="Preview"
        />

        <Card
          image="./src/Graphics/Portfolio project UI.jpg"
          heading="Light & Dark Modes - Portfolio UI"
          description="The portfolio project showcases responsiveness and different modes for accessibility"
          icon="./src/Graphics/AdobeXD.svg"
          button="Preview"
        />

      </div>
    </div>
  );
}

export default UiProjects;
