import React from "react";
import Character from "../Character/Character";
import './styles.css';

const CharacterList = (props) => {

  return (
    <div className="character-list">
      {props.characters
        .filter((i) => i.appearance.includes(5, 3))
        .sort((a, b) => b.name.localeCompare(a.name))
        .map((i) => (
          <Character charData={i} epData={props.episodes} key={i.char_id}/>
        ))}
    </div>
  );
};

export default CharacterList;
