import React, { useState, useEffect } from "react";
import Modal from "react-responsive-modal";
import styled from "styled-components";
import { resourcesData } from "../../data";

const Container = styled.div``;

const Button = styled.button`
  margin-top: 5px;
  width: 6rem;
  height: 2rem;
  border-radius: 10px;
  transition: 0.5s ease;

  &:hover {
    background-color: #5edfff;
    color: white;
    border: none;
    cursor: pointer;
  }
`;

const ModalButton = styled(Button)`
  margin-top: 20px;
  width: 10rem;
`;

const TextArea = styled.textarea`
  height: 20vh;
  width: 300px;
`;

const AddModal = props => {
  const { isAddModal, setAddModal, setCategory } = props;

  const [resourceName, setResourceName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryToAdd, setCategoryToAdd] = useState("");
  const [addressToAdd, setAddressToAdd] = useState("");
  const [emoji, setEmoji] = useState("");

  const handleClick = () => {
    setAddModal(!isAddModal);
  };

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
  };

  //* Side Effect to Immediately Render New Resource
  useEffect(() => {
    if (isAddModal === true) {
      setCategory("other");
    } else {
      setCategory("all");
    }
  }, [isAddModal]);

  return (
    <Container>
      <Button onClick={handleClick}>Add</Button>
      <Modal open={isAddModal} onClose={handleClick} center>
        <h2>New Resource</h2>
        <Container>
          <p>Resource Name:</p>
          <input
            onChange={event => {
              setResourceName(event.target.value);
            }}
          />
        </Container>
        <Container>
          <p>Description:</p>
          <TextArea
            placeholder="Include as much details as possible (limitations, name of store)"
            onChange={event => {
              setDescription(event.target.value);
            }}
          />
        </Container>
        <Container>
          <p>Category:</p>
          <select onChange={event => setCategoryToAdd(event.target.value)}>
            <option></option>
            <option value="toiletries">Toiletries</option>
            <option value="food & water">Food & Water</option>
            <option value="hygiene">Hygiene</option>
            <option value="other">Other</option>
          </select>
        </Container>
        <Container>
          <p>Address: </p>
          <input
            placeholder="# Street, State, & Zip"
            onChange={event => setAddressToAdd(event.target.value)}
          />
        </Container>
        <Container>
          <p>Emoji:</p>
          <select onChange={event => setEmoji(event.target.value)}>
            <option value="🧻"> &#129531;</option>{" "}
            {/* toilet paper/paper towel */}
            <option value="🧼">&#x1f9fc;</option> {/* soap */}
            <option value="🍕">&#127829;</option> {/* fast food */}
            <option value="💧">&#x1f4a7;</option> {/* water */}
            <option value="😷">&#x1F637;</option> {/* mask */}
            <option value="💊">&#x1F48A;</option> {/* medicine */}
            <option value="🛒">&#x1f6d2;</option> {/* groceries */}
            <option value="🧤">&#x1f9e4;</option> {/* gloves  */}
            <option value="🥑">&#129361;</option> {/* veggies */}
            <option value="🥩">&#129385;</option> {/* meat */}
            <option value="🧽">&#x1f9fd;</option> {/* cleaning */}
            <option value="𝧽">&#x1FA79;</option> {/* other */}
            <option value="🧴">&#x1f9f4;</option> {/* bottle of something */}
            <option value="🥽">&#x1F97D;</option> {/* goggles? */}
          </select>
        </Container>
        <Container>
          <ModalButton onClick={addNewResourceClick}>Add Resource</ModalButton>
        </Container>
      </Modal>
    </Container>
  );
};

export default AddModal;
