import React from "react";
import styled from "styled-components";
import NavBar from "../Components/Reusable/NavBar";
import Footer from "../Components/Reusable/Footer";
import Daniel from "../images/daniel.png";
import Austin from "../images/austinpic.png";

const TeamContainer = styled.div`
  width: 100%;
  // height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;

  h2{
    letter-spacing: 4px;
    font-size: 2rem;
    color: white;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;

  }

  .text-card{
    height: 350px;
    width: 80%;
    border: 2px solid #2aabe2;
    border-radius: 20px;
    text-align: center;
  }

  .header-card{
    width: 99.9%;
    border-radius: 20px 20px 0px 0px;
    background-color: #2aabe2;
    border: 1px solid #2aabe2;
  }

  .daniel-img {
    height: 30rem;
    width: 30rem;

  }

  .austin-img {

    height: 30rem;
    width: 30rem;
  }
  ul {
    list-style-type: circle;
    text-align: left;
    line-height: 30px;
  }

  a {
    font-size: 1.2rem;
    color: black;
    transition: 0.4s ease;
    text-decoration: underline;

    &:hover{
      color: #2aabe2;
      font-size: 1.25rem;
    }

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      // text-decoration: none;
    }
  }
`;

const TeamPage = () => {
  return (
    <div>
      <NavBar />
      <TeamContainer>
          <div className="card">
            <img src={Daniel} className="daniel-img" alt="daniel" />
            <div className="text-card">
              <div className="header-card">
                <h2>Daniel Hong</h2>
              </div>
              <ul>
                <li>Software Engineer Intern at GoPromo.io</li>
                <li>DevMountain Graduate</li>
                <li>Arizona State University Graduate</li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://app.enhancv.com/share/00b739a7?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic">Resume</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/daniellimhong">LinkedIn</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/daniellimhong">Github</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="mailto:daniellimhong@gmail.com">Email Daniel!</a></li>
              </ul>
            </div>
          </div>
          <div className="card">
            <img src={Austin} className="austin-img" alt="austin"/>
            <div className="text-card">
            <div className="header-card">
              <h2>Austin Chabaud</h2>
            </div>
              <ul>
                <li>Web-Developer at Global Special Effects</li>
                <li>DevMountain Graduate</li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/austin-chabaud/">LinkedIn</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/austinchabaud">Github</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="mailto:austinc1023@yhaoo.com">Email Austin!</a></li>
              </ul>
            </div>
          </div>
          <div className="card">
            <div className="text-card" style={{width: "100%"}}>
              <div className="header-card">
                <h2>Contributors</h2>
              </div>
              <ul>
                <li>Sean Parmar - Developer Consultant</li>
                <li>Andrew Nam - Developer Consultant</li>
                <li>Joshua Suos - Copywrite</li>
                <li>Michael Orbeta - Emoji Master</li>
              </ul>
            </div>
          </div>
      </TeamContainer>
      {/* <Footer /> */}
    </div>
  );
};

export default TeamPage;
