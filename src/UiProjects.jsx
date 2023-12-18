import React from "react";
import Card from "./Card";

function UiProjects() {
  return (
    <div id="ui-projects">
      <div
        className="mt-[74px] gap-[74px] flex  justify-center items-center md:flex flex-wrap mx-[169px]"
        
      >
        <Card
          image="./Graphics/FOOTBALL TICKET WEBSITE DESKTOP MOCKUP.jpg"
          heading="Football Ticketing App (Desktop)"
          description="The project was inspired by Arsenal FC's ticketing website, it was designed and prototyped using Adobe XD"
          icon="./Graphics/AdobeXD.svg"
          button={<a className text-black href="https://xd.adobe.com/view/81e661db-246f-4bc8-b744-6dab6c135422-d4b5/?fullscreen" target="_blank">Preview</a>}
        />

        <Card
          image="./Graphics/TRAILER BROWSING APP MOCKUP.jpg"
          heading="Mobile App UI For a Trailer Browsing App"
          description="The app UI was designed to create a Solution for movie lovers who want To search and preview movie trailers As they are released"
          icon="./Graphics/Figma.svg"
          button={<a className text-black href="https://www.figma.com/proto/b2fgTJn0Ljbpa3wb95QEa2/TRAILER-BROWSING-APP?node-id=107-3167&starting-point-node-id=107%3A3167&mode=design&t=XLkqtcwffWPM42WR-1" target="_blank">Preview</a>}
        />

        <Card
          image="./Graphics/Portfolio project UI.jpg"
          heading="Light & Dark Modes - Portfolio UI"
          description="The portfolio project showcases responsiveness and different modes for accessibility"
          icon="./Graphics/AdobeXD.svg"
          button={<a className text-black href="https://xd.adobe.com/view/e2fba9c8-9c7c-4c11-8f3d-e48355df21a4-b7a8/grid" target="_blank">Preview</a>}
        />

      </div>
    </div>
  );
}

export default UiProjects;
