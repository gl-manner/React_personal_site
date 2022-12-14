import React, { Component } from "react";
import styled from "styled-components";
import Header from "./header";

const Wrapper = styled.div`
  .about_page {
    opacity: 0;
    animation: fadeIn 1s forwards 0s;
  }

  .about {
    display: flex;
    @media only screen and (max-width: 37.5em) {
      flex-direction: column;
    }
  }

  .text-box {
    padding: 3rem 5rem;
    color: #b9b9b9;

    @media only screen and (max-width: 80.5em),
      screen and (max-height: 56.25em) {
      padding: 1.5rem 2.5rem;
    }
  }

  .u-fade-in-element {
    animation: fadeIn 1s forwards;
  }

  .heading-tertiary {
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #ff3153;
  }

  .u-margin-bottom-small {
    margin-bottom: 1.5rem !important;
  }

  .paragraph {
    font-size: 1.6rem;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .about__skills {
    text-transform: uppercase;
    min-width: 40%;
    @media only screen and (max-width: 80.5em),
      screen and (max-height: 56.25em) {
      padding: 1.5rem 2.7rem;
    }
  }

  .progress-bar--90 {
    max-width: 90%;
    width: 0;
    opacity: 0;
    animation: load 2s forwards;
  }

  .progress-bar--95 {
    max-width: 95%;
    width: 0;
    opacity: 0;
    animation: load 2s forwards;
  }

  .progress-bar {
    position: relative;
    cursor: pointer;
    padding-left: 1.5rem;
    padding-top: 0.2rem;
    color: #141416;
    margin-bottom: 1.1rem;
    background-image: linear-gradient(to right, #f17a3a, #e84545);
    transition: transform 0.7s ease-out, width 0.7s ease-out;
    opacity: 0.8;
    letter-spacing: 0.4rem;
  }

  /* .progress-bar--90::before {
    color: #f17a3a;
    position: absolute;
    left: -2.5rem;
    content: "90%";
    animation: max_90 2s forwards;
    transform: rotate(270deg);
    font-size: 0.9rem;
  } */

  .progress-bar--80 {
    max-width: 80%;
    width: 0;
    opacity: 0;
    animation: load 2s forwards;
  }

  /* .progress-bar--80::before {
    color: #f17a3a;
    position: absolute;
    left: -2.5rem;
    content: "80%";
    animation: max_80 2s forwards;
    transform: rotate(270deg);
    font-size: 0.9rem;
  } */

  .progress-bar--75 {
    max-width: 75%;
    width: 0;
    opacity: 0;
    animation: load 2s forwards;
  }

  .progress-bar--70 {
    max-width: 70%;
    width: 0;
    opacity: 0;
    animation: load 2s forwards;
  }

  /* .progress-bar--70::before {
    color: #f17a3a;
    position: absolute;
    left: -2.5rem;
    content: "70%";
    animation: max_70 2s forwards;
    transform: rotate(270deg);
    font-size: 0.9rem;
  } */

  .progress-bar--60 {
    max-width: 60%;
    width: 0;
    opacity: 0;
    animation: load 2s forwards;
  }
  /* 
  .progress-bar--60::before {
    color: #f17a3a;
    position: absolute;
    left: -2.5rem;
    content: "60%";
    animation: max_60 2s forwards;
    transform: rotate(270deg);
    font-size: 0.9rem;
  } */

  .progress-bar--40 {
    max-width: 40%;
    width: 0;
    opacity: 0;
    animation: load 2s forwards;
  }

  /* .progress-bar--40::before {
    color: #f17a3a;
    position: absolute;
    left: -2.5rem;
    content: "40%";
    animation: max_40 2s forwards;
    transform: rotate(270deg);
    font-size: 0.9rem;
  } */
`;

class about extends Component {
  render() {
    return (
      <Wrapper>
        <div className="about_page">
          <Header />
          <div tabIndex="-1" role="group" style={{ outline: "none" }}>
            <section className="about">
              <div className="about__overview">
                <div className="text-box dev-details u-fade-in-element">
                  <h3 className="heading-tertiary u-margin-bottom-small">
                    Profile
                  </h3>
                  <p className="paragraph">
                    In one word, I am a passionate and experienced full-stack developer with over 8 years of experience in software engineering. Skilled in Javascript, React.js, Node.js and also experienced with an interest in data analytics, data visualization, and UI design. Seeking an opportunity to strengthen my skillset in the software engineering world while also adding positive contributions to the workplace.
                  </p>
                </div>
                <div>
                  <span>
                    <div className="text-box skill-details">
                      <h3 className="heading-tertiary u-margin-bottom-small">
                        Javascript/Typescript, React.js, Node.js, Angular 2+, Python
                      </h3>
                      <p className="paragraph">
                        DOM, MVC, SOAP, REST API, GraphQL, Client/Server-side
                        rendering, Micro-service architecture, Automation test,
                        TDD, Serverless, SQL-database, NoSQL-database,
                        Scrum/Agile Methodology
                      </p>
                    </div>
                  </span>
                </div>
              </div>
              <div className="about__skills">
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Programming Languages
                </h3>
                <div className="progress-bar progress-bar--95">JavaScript, 95%</div>
                <div className="progress-bar progress-bar--90">TypeScript, 90%</div>
                {/* <div className="progress-bar progress-bar--90">Python, 90%</div> */}
                <div className="progress-bar progress-bar--80">
                  Python, 80%
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Frameworks
                </h3>
                <div className="progress-bar progress-bar--95">
                  Node.js, 95%
                </div>
                <div className="progress-bar progress-bar--95">
                  React.js, 95%
                </div>
                <div className="progress-bar progress-bar--80">Angular 2+, 80%</div>
                <div className="progress-bar progress-bar--70">
                  Spring, 70%
                </div>
                {/* <div className="progress-bar progress-bar--75">Vue.js, 75%</div> */}
                <h3 className="heading-tertiary u-margin-bottom-small">
                  Databases
                </h3>
                <div className="progress-bar progress-bar--95">MySQL, 95%</div>
                <div className="progress-bar progress-bar--90">MSSQL, 90%</div>
                <div className="progress-bar progress-bar--80">
                  PostgreSQL, 80%
                </div>
                <div className="progress-bar progress-bar--90">Mongo, 90%</div>
              </div>
            </section>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default about;
