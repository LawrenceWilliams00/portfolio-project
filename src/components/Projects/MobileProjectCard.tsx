import React, { useState } from "react";
import "./MobileProjectCard.css";

interface IProjectCard {
  image: string;
  title: string;
  description: string;
  link: string;
}

const MobileProjectCard = (props: IProjectCard) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="mobile-card-wrapper"
      onClick={() => setIsOpen(!isOpen)}
      onKeyDown={() => setIsOpen(!isOpen)}
      tabIndex={0}
      role={"button"}
    >
      <div className={`${isOpen ? "mobile-card-open" : ""} mobile-card `}>
        <div className={`front ${isOpen ? "front-open" : ""}`}>
          <div
            className="front-image"
            style={{ backgroundImage: `url(${props.image})` }}
          />
          <div className="mobile-card-title">{props.title}</div>
        </div>
        <div className={`${isOpen ? "back-open" : ""} back`}>
          <div className="mobile-card-back-text">
            <div className="project-mobile-card-title">{props.title}</div>
            <p
              className={`${
                document.body.classList.contains("light") ? "light" : "dark"
              } project-card-description`}
              dangerouslySetInnerHTML={{
                __html: props.description.replace(/\n/g, "<br>"),
              }}
            ></p>
            {props.link !== "" ? (
              <a href={props.link} className="mobile-card-link">
                Click here to view
              </a>
            ) : null}
            <div className={`${isOpen ? "hidden" : null} clickable-link`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProjectCard;
