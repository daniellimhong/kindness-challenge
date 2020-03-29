import React from "react";
import { Container, Input, Button } from "../../StyledComponents";

const LocationSerach = props => {
  return (
    <Container>
      <Input onChange={(event) => props.setZip(event.target.value) } />
      <Button>Search</Button>
    </Container>
  );
};

export default LocationSerach;
