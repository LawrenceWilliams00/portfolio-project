import React from "react";
import "./About.css";
import {
  PythonLogo,
  TypescriptLogo,
  ReactLogo,
  HTMLLogo,
  CSSLogo,
  TailwindLogo,
  CSharpLogo,
} from "./logos";

interface IAbout {
  darkMode: boolean;
}

const About = (props: IAbout) => {
  const darkMode = props.darkMode;
  const backgroundColor = darkMode ? "#3d348b" : "#d5ac4e";
  const foregroundColor = darkMode ? "#f9db6d" : "#6f1d1b";
  return (
    <div className="about">
      <div className="about-areas">
        <div className="about-info">
          <div className="about-title">About</div>
          {/* I'm Lawrence, a recent graduate of the University of Auckland, and I'm
          looking to start my career in web development. I've worked with a few tec */}
          I&apos;m Lawrence, a recent computer science graduate from the University
          of Auckland. My passion lies in technology and problem-solving, and I
          have a keen interest in all things technology. In my free time, I
          enjoy gaming and staying active through working out.
        </div>
        <div className="about-info">
          <div className="about-title">Education</div>I studied at the
          University of Auckland, starting with a double major in Psychology and
          biology, however in my second year I switched to Psychology and
          Computer Science. I finished my studies in November 2022, with my
          official graduation in May 2023
        </div>
        <div className="about-info">
          <div className="about-title">Skills</div>
          <div className="languages">
            <div className="language-item">
              <div className="logo">
                <PythonLogo
                  background={backgroundColor}
                  foreground={foregroundColor}
                />
              </div>
              <span>Python</span>
            </div>
            <div className="language-item">
              <div className="logo">
                <TypescriptLogo
                  background={backgroundColor}
                  foreground={foregroundColor}
                />
              </div>
              <span>
                Typescript <span className="sep">/</span> Javascript
              </span>
            </div>
            <div className="language-item">
              <div className="logo">
                <ReactLogo
                  background={backgroundColor}
                  foreground={foregroundColor}
                />
              </div>
              <span>React</span>
            </div>
            <div className="language-item">
              <div className="logo">
                <CSharpLogo
                  background={backgroundColor}
                  foreground={foregroundColor}
                />
              </div>
              <span>C Sharp</span>
            </div>
            <div className="language-item">
              <div className="logo">
                <HTMLLogo
                  background={backgroundColor}
                  foreground={foregroundColor}
                />
              </div>
              <span>HTML</span>
            </div>
            <div className="language-item">
              <div className="logo">
                <CSSLogo
                  background={backgroundColor}
                  foreground={foregroundColor}
                />
              </div>
              <span>CSS</span>
            </div>
            <div className="language-item">
              <div className="logo">
                <TailwindLogo
                  background={backgroundColor}
                  foreground={foregroundColor}
                />
              </div>
              <span>Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
