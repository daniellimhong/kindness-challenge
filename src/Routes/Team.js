import React from "react";
import NavBar from "../Components/Reusable/NavBar";
import Footer from "../Components/Reusable/Footer";
import styled from "styled-components";
import Daniel from "../images/daniel.jpeg";
import Austin from "../images/austinpic.JPG";

const TeamContainer = styled.div`
  .card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 10px;
  }
  .daniel-img {
    height: 20rem;
    width: 20rem;
  }
  .daniel-card {
    height: 25rem;
    width: 20rem;
    word-wrap: break-word;
  }
  .austin-img {
    height: 20rem;
    width: 20rem;
  }
  ul {
    list-style-type: circle;
  }
`;

const TeamPage = () => {
  return (
    <div>
      <NavBar />
      <TeamContainer>
        <div className="card-container">
          <div className="daniel-card">
            <img src={Daniel} className="daniel-img" />
            <h2>Daniel Hong</h2>
            <ul>
              <li>Graduate from Arizona State University</li>
              <li>DevMountain Graduate</li>
              <li>Intern at GoPromo.io</li>
            </ul>
          </div>
          <div className="austin-card">
            <img src={Austin} className="austin-img" />
            <h2>Austin Chabaud</h2>
            <ul>
              <li>DevMountain Graduate</li>
              <li>Web-Developer at Global Special Effects</li>
            </ul>
          </div>
        </div>
      </TeamContainer>
      <Footer />
    </div>
  );
};

export default TeamPage;
