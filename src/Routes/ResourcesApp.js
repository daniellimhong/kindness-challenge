import React, { useState, useReducer } from "react";
import NavBar from "../Components/Reusable/NavBar";
import Layout from "../Components/Resources/Layout";
import AddModal from "../Components/Resources/AddModal";
import Footer from "../Components/Reusable/Footer";
import LocationSearch from "../Components/Reusable/LocationSearch";
import CategorySelector from "../Components/Resources/CategorySelector";
import { Container, Button, Input, Text } from "../StyledComponents";
import styled from "styled-components";

const ResourcesApp = () => {

const [zip, setZip] = useState(0);
const [isAddModal, setAddModal] = useState(false);
const [resources, setResources] = useState([]);
const [category, setCategory] = useState("all");


  return (
    <Container width="100%" display="flex" alignItems="center" justifyContent="center">
      <NavBar />
      <LocationSearch
        setZip={setZip}
      />
      {`Testing Category: ${category}`}
      <Layout />
      <Container style={{marginTop: "400px"}}>
        <CategorySelector 
          category={category}
          setCategory={setCategory}
          />
        {/* <AddModal /> */}
        {/* <ResourcesContainer /> */}
      </Container>
      <Footer />
    </Container>
  );
};

export default ResourcesApp;



//? UseState if we need it!

//! Notes!!
//* State List: category, zip for map, isAddModal, resourcesData (holds at the supply cards and shit)

//! State Tree
//* isAddModal: default: false. when true, the modal will appear | will controlled by AddModal
//* resources: default: [] | pass down to ResourcesConatainer to display the results
//* category: default: "All" filters resources by category| controlled by CategorySelector
//? Post MVP State needs
//? zipCode: default: zip for handling search -> to be used to find coordinates and currentLocation | will controlled by LocationSearch (input + button)
//? currentLocation: default: New York - string - will be used to hold state for currentLocation which will control area of supplies | will controlled by LocationSearch (input + button)


//? useReducer set-up for later



// const useAppReducer = () => {
//   const [state, dispatch] = useReducer(
//     (state, action) => {
//       switch (action.type) {
//         case "SET_ZIP": {
//           return {
//             ...state,
//             zipCode: action.zip
//           };
//         }
//         case "TOGGLE_ADD_MODAL": {
//           return {
//             ...state,
//             isAddModal: !state.isAddModal
//           };
//         }
//         case "SET_RESOURCES": {
//           return {
//             ...state,
//             resources: [action.value]
//           };
//         }
//         case "SET_CATEGORY": {
//           return {
//             ...state,
//             category: action.value
//           };
//         }
//         default: {
//           return state;
//         }
//       }
//     },
//     {
//       zipCode: 0,
//       currentLocation: "", //set this to new york zip as default
//       isAddModal: false,
//       resources: [],
//       category: "all"
//     }
//   );
//   return [state, dispatch];
// };

//! in app scope
// let [
//   { zipCode, curerntLocation, isAddModal, resources, category },
//   dispatch
// ] = useAppReducer();