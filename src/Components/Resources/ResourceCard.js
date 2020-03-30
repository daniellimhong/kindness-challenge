import React from "react";
import styled from "styled-components";
import { Container, Button, Input, Text } from "../../StyledComponents";

const Card = styled.div`
  height: 15rem;
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px;
  background-image: linear-gradient(#ebedee, #fdfbfb);
  flex-wrap: wrap;
  border: 0.2rem solid lightgrey;
  border-radius: 0.5rem;
  box-shadow: 5px 2px 5px 0px lightgrey;
`;

const ResourceCard = props => {
  return (
    <Card>
      {props.resourceName}
      {props.description}
      {props.category}
      {props.address}
    </Card>
  );
};

export default ResourceCard;
