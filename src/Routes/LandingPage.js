import React from "react";
import NavBar from "../Components/Reusable/NavBar";
import Footer from "../Components/Reusable/Footer";
import background from "../assets/landing-bg.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 90vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.705), rgba(0, 0, 0, 0.705)),
    url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  .title-container {
    height: 300px;
    width: 800px;
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    color: white;
    word-wrap: break-word;
    padding: 15px;
    margin-left: 50px;
  }
  h1 {
    font-family: Lato;
    font-size: 4rem;
    font-weight: 800;
  }
  h2 {
    font-family: Lato;
    font-size: 1.5rem;
    font-weight: 400;
  }
  .gsbutton {
    height: 60px;
    width: 150px;
    margin-top: 40px;
    padding: 20px;
    background-color: #827fd9;
    color: white;
    border: none;
    border-radius: 1.5px;
    &:hover {
      cursor: pointer;
      color: #69e9f5;
      transition: ease 0.8s;
    }
  }
`;

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeaderContainer>
        <div className="title-container">
          <h1>The Kindness Challenge</h1>
          <h2>
            A community driven effort set to overcome COVID-19 by supplying
            everyday essentials to individuals and families.
          </h2>
          <Link to="/resources">
            <button className="gsbutton" type="button">
              Get Started
            </button>
          </Link>
        </div>
      </HeaderContainer>
      <Footer />
    </div>
  );
};

export default LandingPage;
