import React, { useState } from "react";
import "./styles.css";
import CustomModal from "../CustomModal/CustomModal";

const Character = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <>
      <div className="character" onClick={toggleModal}>
        <div>
          <img src={props.charData.img} className="profile-img" alt="" />
        </div>
        <div className="character-info">
          <p className="character-name">{props.charData.name}</p>
          <p className="character-occupation">
            {props.charData.occupation.join(" - ")}
          </p>
        </div>
      </div>
      {modalIsOpen && (
        <CustomModal
          closeModal={toggleModal}
          data={props.charData}
          episodes={props.epData}
        />
      )}
    </>
  );
};

export default Character;
