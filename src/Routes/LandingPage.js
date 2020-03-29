import React from "react";
import NavBar from "../Components/Reusable/NavBar";
import Footer from "../Components/Reusable/Footer";
import background from '../assets/landing-bg.jpg'
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.705), rgba(0, 0, 0, 0.705)), url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom
`

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <HeaderContainer>

      </HeaderContainer>
      <Footer />
    </div>
  );
};

export default LandingPage;
