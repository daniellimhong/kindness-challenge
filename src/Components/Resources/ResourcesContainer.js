import React from "react";
import ResourceCard from "./ResourceCard";
import styled from "styled-components";
// import { Container, Button, Input, Text } from "../../StyledComponents";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ResourcesContainer = props => {
  const { resources, category, filteredResources } = props;

  return (
    <Container>
      {category === "all"
        ? resources.map(card => {
            return <ResourceCard key={card.id} category={card.category}/>;
          })
        : filteredResources.map(card => {
            return <ResourceCard key={card.id} category={card.category}/>;
          })}
    </Container>
  );
};

export default ResourcesContainer;
