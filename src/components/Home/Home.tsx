import React, { useEffect } from "react";
import { useState } from "react";
import "./Home.css";

interface IHome {
  setRef: (location: string) => void;
}

const Home = ({ setRef }: IHome) => {
  const [intro, setIntro] = useState("Hi!");

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 900
        ? setIntro("Hi, I'm Lawrence!")
        : window.innerWidth >= 650
        ? setIntro("Hello!")
        : setIntro("Hi!");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  const [boldIndex, setBoldIndex] = useState(-1);
  const [semiBoldIndex, setSemiBoldIndex] = useState([-1, -1]);
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <div className="intro">
          {intro.split("").map((c, i) => {
            return (
              <div
                className={`${
                  boldIndex === i
                    ? "bold"
                    : semiBoldIndex.includes(i)
                    ? "semi-bold"
                    : "normal"
                }`}
                key={i}
                onMouseEnter={() => {
                  setBoldIndex(i);
                  setSemiBoldIndex([i - 1, i + 1]);
                  // console.log(boldIndex, semiBoldIndex);
                }}
                onMouseLeave={() => {
                  setBoldIndex(-1);
                  setSemiBoldIndex([-1, -1]);
                }}
              >
                {c}
              </div>
            );
          })}
        </div>
        <p className="intro-text">
          I&apos;m<span className="home-name">{" Lawrence,"}</span> a software
          developer with a focus on TypeScript and React.
        </p>
        <p>
          Please feel free to{" "}
          <button
            className="email-link"
            onClick={() => setRef("contact")}
            onKeyDown={() => setRef("contact")}
          >
            contact me
          </button>{" "}
          and lets talk!
        </p>
        <a
          href={require("../../files/LawrenceWilliamsCV.pdf")}
          download="LawrenceWilliamsCV"
          className="download-cv"
        >
          Download my resume{" "}
          <div className="arrow-bucket-wrapper">
            <div className="arrow">???</div>
            <div className="bucket"></div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
