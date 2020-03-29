import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
function AddModal() {
  const outside = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = e => {
    if (outside.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const getClick = document.addEventListener("click", handleClick);

    return () => {
      getClick();
    };
  }, []);

  return (
    <ModalContainer>
      <div className="modal" ref={outside}>
        <button onClick={() => setIsOpen(!isOpen)}>toggle modal</button>
        {isOpen ? (
          <div className="modal">
            <input placeholder="Name"></input>
            <input placeholder="Address"></input>
            <textarea placeholder="Description"></textarea>
          </div>
        ) : null}
      </div>
    </ModalContainer>
  );
}

export default AddModal;

const ModalContainer = styled.div`
  .modal {
    height: 100px;
    width: 30vw;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

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
