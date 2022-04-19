import React from "react";
import EpisodeList from "../EpisodeList/EpisodeList";
import "./styles.css";

const CustomModal = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <div className="modal-button-container">
          <button onClick={props.closeModal}>
            X
          </button>
        </div>
        <div className="modal-character">
          <div className="modal-img-div">
            <img src={props.data.img} className="modal-img" alt=""/>
          </div>
          <div className="modal-data">
            <span className="modal-attribute">
              <span>Name:</span> {props.data.name}
            </span>
            <span className="modal-attribute">
              <span>Birthday:</span> {props.data.birthday}
            </span>
            <span className="modal-attribute">
              <span>Occupation:</span> {props.data.occupation.join(" - ")}
            </span>
            <span className="modal-attribute">
              <span>Status:</span> {props.data.status}
            </span>
            <span className="modal-attribute">
              <span>Nickname:</span> {props.data.nickname}
            </span>
            <span className="modal-attribute">
              <span>Portrayed:</span> {props.data.portrayed}
            </span>
            <span className="modal-attribute">
              <span>Category:</span> {props.data.category}
            </span>
          </div>
        </div>
        <EpisodeList
          character={props.data}
          episodeList={props.episodes}
          className="modal-episodeList"
        />
      </div>
    </div>
  );
};

export default CustomModal;
