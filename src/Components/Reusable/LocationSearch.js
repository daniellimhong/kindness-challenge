import React from "react";
import { Container, Input, Button } from "../../StyledComponents";

const LocationSerach = props => {
  return (
    <Container>
      <Input onChange={props.setZip} />
      <Button>Search</Button>
    </Container>
  );
};

export default LocationSerach;
