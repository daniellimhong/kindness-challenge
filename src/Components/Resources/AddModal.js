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
            <p>Modal is open</p>
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
