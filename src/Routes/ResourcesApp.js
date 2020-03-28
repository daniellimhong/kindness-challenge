import React from "react";
import NavBar from "../Components/Reusable/NavBar";
import Layout from "../Components/Resources/Layout";
import Footer from "../Components/Reusable/Footer";
import { Container, Button, Input, Text } from "../StyledComponents";
import styled from "styled-components";

const ResourcesApp = () => {
  return (
    <Container>
      <NavBar />
      <Layout />
      {/* <LocationSearch /> */}
      {/* <CategorySelector /> */}
      {/* <ResourcesContainer /> */}
      <Footer />
    </Container>
  );
};

export default ResourcesApp;

//! Main Application: Will hold majority of state
//* State: category, zip/location for map, isAddModal, resourcesData (holds at the supply cards and shit)
