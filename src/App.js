import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";

import CharacterList from "./Components/CharacterList/CharacterList";
import LastEpisode from "./Components/LastEpisode/LastEpisode";
import { makeRequest } from "./utils/api";

function App() {
  const [episodeData, setEpisodeData] = useState([]);
  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    const call = async () => {
      setCharacterData(await makeRequest("/character.json", 740));
      setEpisodeData(await makeRequest("/episodes.json", 1500));
    };
    call();
  }, []);

  return (
    <div className="App">
      {episodeData.length > 0 ? (
        <>
          <CharacterList episodes={episodeData} characters={characterData} />
          <LastEpisode episodes={episodeData} />
        </>
      ) : (
        <div className="spinner-container">
          <Spinner animation="border" variant="light" className="spinner" />
        </div>
      )}
    </div>
  );
}

export default App;
