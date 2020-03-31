import React, { useState, useEffect } from "react";
import Modal from 'react-responsive-modal';
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../Components/Reusable/NavBar";
import Footer from "../Components/Reusable/Footer";
import background from "../assets/landing.jpg";

const HeaderContainer = styled.div`
  width: 100%;
  height: 85vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.305), rgba(0, 0, 0, 0.305)),
    url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  z-index: -1;
  
  .title-container {
    height: 400px;
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    color: white;
    word-wrap: break-word;
    padding: 15px;
    margin-left: 50px;
    line-height: 50px;
    // border: 1px solid white;
  }

  h2 {
    font-size: 1.8rem;
    letter-spacing: 3px;
    // font-weight: 100;
  }
  .gsbutton {
    height: 60px;
    width: 150px;
    margin: 10px 30px 0 0;
    padding: 20px;
    background-color: #2aabe2;
    font-size: 1.2rem;
    color: white;
    border: none;
    border-radius: 1.5px;
    transition: ease 0.4s;
    &:hover {
      cursor: pointer;
      background-color: #5edfff;
    }
  }
`;

const LandingFooter = styled(Footer)`
  z-index: 100000;
`

const LandingPage = () => {

  const [isWelcome, setWelcome] = useState(false);

  const handleClick = () => {
    setWelcome(!isWelcome)
  }

  return (
    <div>
      <NavBar />
      <Modal open={isWelcome} onClose={handleClick} center>
        <h2>Welcome to The Kindness Project!</h2>
        <h3>Please note: </h3>
        <ul>
          <li><h3>The depiction of the data, brands and addresses are for demonstration purposes only and in no way indicates that the developers is sponsored or approved by, or otherwise affiliated with, the owner of any such rights.</h3></li>
          <li><h3>Due to time constraints, this demo is not yet responsive. Sorry mobile users!</h3></li>
          <li><h3>Practice social distancing and be mindful of your community.</h3></li>
          <li><h3>Hang in there. We'll get through this!</h3></li>
          <li><h3>Scaling "The Kindness Project" is currently in consideration.</h3></li>
          <li><h3>Lastly, Thank you for visiting!</h3></li>
        </ul>
        <h4>- Daniel</h4>
      </Modal>
      <HeaderContainer>
        <div className="title-container">
          <h2>
            A community driven effort to help <br/>overcome pandemic-related 
            shortages <br/>by sharing essentials resources
          </h2>
          <div>
            
          </div>
          <div className="button-container">
            <Link to="/resources">
              <button className="gsbutton" type="button">
                Start Here
              </button>
            </Link>
              <button className="gsbutton" type="button" onClick={handleClick}>
                Read This!
              </button>
          </div>
        </div>
      </HeaderContainer>
      <Footer/>
      {/* <LandingFooter/> */}
    </div>
  );
};

export default LandingPage;
