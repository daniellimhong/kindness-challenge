import React from "react";
import NavBar from "../Components/Reusable/NavBar";
import Footer from "../Components/Reusable/Footer";
import background from "../assets/landing-bg.jpg";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.705), rgba(0, 0, 0, 0.705)),
    url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
  }
  h1 {
    font-size: 50px;
    font-family: Lato;
  }
  h2 {
    font-family: Lato;
    font-size: 30px;
  }
`;

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeaderContainer>
        <div className="title-container">
          <h1>The Kindness Challenge</h1>
          <h2>A community driven effort to help those impacted by COVID-19</h2>
          <button></button>
        </div>
      </HeaderContainer>
      <Footer />
    </div>
  );
};

export default LandingPage;
