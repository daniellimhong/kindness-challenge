import styled from "styled-components";
// import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: ${props => props.width},
    height: ${props => props.height},
    display: ${props => props.display},
    flex-direction: ${props => props.flexDirection},
    align-items: ${props => props.alignItems},
    justify-content: ${props => props.justifyContent}
    // border: ${props => props.testBorder === true ? "1px solid black" : ""}
`

export const Text = styled.p`
  font-size: ${props => props.size}px;
  color: ${props => props.color};
`

export const Heading = styled.h2`
  font-size: ${props => props.size};
`

export const Input = styled.input`
  width: ${props => props.width};
`;

export const Button = styled.button`
  width: ${props => props.width};
`;

