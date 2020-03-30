import React, { useState } from "react";
import Modal from 'react-responsive-modal';
import styled from "styled-components";
import { resourcesData } from "../../data";

const Container = styled.div`
  
`;

const Button = styled.button`
  margin-top: 20px;
`

const TextArea = styled.textarea`
  height: 20vh;
  width: 300px
`

const AddModal = (props) => {
  const { isAddModal, setAddModal } = props;

  const [resourceName, setResourceName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryToAdd, setCategoryToAdd] = useState("");
  const [addressToAdd, setAddressToAdd] = useState("");
  const [emoji, setEmoji] = useState("")

  const handleClick = () => {
    setAddModal(!isAddModal)
  }

  const addNewResourceClick = () => {
    resourcesData.push({
    id: resourcesData.length + 1,
    resourceName: resourceName,
    description: description,
    category: categoryToAdd,
    address: addressToAdd,
    emoji: emoji
    });
    setAddModal(false);
  }

  return (
    <Container>
      {/* {!isAddModal 
        ? <Button onClick={handleClick}>Add</Button>
        : <ModalContainer>
          <Button onClick={handleClick}>Exit</Button>
        </ModalContainer>
      } */}
      <Button onClick={handleClick}>Add</Button>
      <Modal open={isAddModal} onClose={handleClick} center>
        <h2>New Resource</h2>
        <Container>
          <p>Resource Name:</p>
          <input/>
        </Container>
        <Container>
          <p>Description:</p>
          <TextArea placeholder="Include as much details as possible (limitations, name of store)"/>
        </Container>
        <Container>
          <p>Category:</p>
          <select>
            <option></option>
            <option value="toiletries">Toiletries</option>
            <option value="food & water">Food & Water</option>
            <option value="hygiene">Hygiene</option>
            <option value="other">Other</option>
          </select>
        </Container>
        <Container>
          <p>Address: </p>
          <input placeholder="# Street, State, & Zip"/>
        </Container>
        {/* {EMOJI!!!!!} */}
        {/* <Container>
          <p>Emoji:</p>
          <select>
            <option value="&#x1f9fc;">&#x1f9fc;</option>
            <option value="">Food & Water</option>
            <option value="">Hygiene</option>
            <option value="">Other</option>
          </select>
        </Container> */}
        <Container>
          <Button onClick={addNewResourceClick}>Add Resource</Button>
        </Container>
      </Modal>
    </Container>
    
  )






  // const outside = useRef();
  // const [isOpen, setIsOpen] = useState(false);

  // const handleClick = e => {
  //   if (outside.current.contains(e.target)) {
  //     return;
  //   }
  //   setIsOpen(false);
  // };

  // useEffect(() => {
  //   const getClick = document.addEventListener("click", handleClick);

  //   return () => {
  //     getClick();
  //   };
  // }, []);

  // return (
  //   <ModalContainer>
  //     <div className="modal" ref={outside}>
  //       <button onClick={() => setIsOpen(!isOpen)}>toggle modal</button>
  //       {isOpen ? (
  //         <div className="modal">
  //           <input placeholder="Name"></input>
  //           <input placeholder="Address"></input>
  //           <textarea placeholder="Description"></textarea>
  //         </div>
  //       ) : null}
  //     </div>
  //   </ModalContainer>
  // );
}

export default AddModal;


// const ModalContainer = styled.div`
//   .modal {
//     height: 100px;
//     width: 30vw;
//     background-color: red;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

      // {/* Dummy code */}
      // <input resourceName/>  
      // <textarea description/> 
      // <input address/> 
      // <select category>
      //   <option value="toiletries">Toiletries</option>
      //   <option value="food & water"></option>
      //   <option value="hygiene"></option>
      //   <option value="other"></option>
      // </select> 
      // {/* emoji */}
      // <button onClick={
      //   ADD THE INPUTS AS AN OBJECT TO RESOURCES STATE (ARRAY)}
      //   () =>  {
      //     setResources(
      //       ...resources,
      //       {
      //         id: resources.length + 1,
              
      //       }
      //     )
      //   }
      // >Add resource</button>
