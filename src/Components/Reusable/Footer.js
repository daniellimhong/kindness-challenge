import React from "react";
import styled from "styled-components";
import { Text } from "../../StyledComponents";

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  text-align: center;
  margin-top: 20px;
  // border-top: 1px solid black;
  overflow: hidden;
`;

const ExternalLink = styled.a`
  color: #d3d3d3;
  transition: 0.4s ease;

  &:hover{
    color: grey;
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Footer = () => {
  const chooseGithub = function() {
    const currentDate = new Date().getHours();
    return currentDate % 2 === 1 ? "daniellimhong" : "austinchabaud";
  };
  const githubUser = chooseGithub();

  return (
    <FooterContainer>
      <Text style={{userSelect: "none"}} color="#D3D3D3">
        Built with kindness &#8212;
        &nbsp; 
        <ExternalLink href={`https://github.com/${githubUser}/kindness-challenge/`}>
          View Source
        </ExternalLink>
      </Text>


    </FooterContainer>
  );
};

export default Footer;
