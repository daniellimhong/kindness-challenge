import React from "react";
import NavBar from "../Components/Reusable/NavBar";
import Footer from "../Components/Reusable/Footer";
import background from "../assets/inspiration.jpg";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 200px;
  display: flex;
`;

const Picture = styled.div`
  width: 50%;
  height: 38vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.105), rgba(0, 0, 0, 0.105)),
    url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

`;

const TextBox = styled.div`
  width: 50%;
//   height: 38vh;
    margin: 0;
padding-bottom: 20px;
  margin-left: 1rem;
  text-indent: 3rem;
  letter-spacing: 3px;
  word-spacing: 4px;
  line-height: 2.8rem;
  font-weight: 500;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 20px
  }
`;

const InspirationPage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <TextBox>
          <h2>
            As we face a worldwide epidemic, we also face challenges that
            disrupt our livelihoods. This consists of the inability to find
            everyday essentials that we need in order to survive and maintain a
            profound quality of life. With the Kindness Challenge, our goal is
            to bring our communitues together to overcome these adversities by
            providing the resources needed to those that are struggling.
            Together, we set to overcome COVID-19 and improve the lives of many.
          </h2>
        </TextBox>
        <Picture />
      </Container>
    </>
  );
};

export default InspirationPage;
