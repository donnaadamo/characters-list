import React from "react";
import { Accordion } from "react-bootstrap";
import "./styles.css";

const EpisodeList = (props) => {
  const episodes = props.episodeList.filter(
    (i) =>
      i.characters.includes(`${props.character.name}`) ||
      i.characters.includes(`${props.character.nickname}`)
  );

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Episodes</Accordion.Header>
        <Accordion.Body>
          <div className="episode-list">
            {episodes.length > 0 ? (
              <ul>
                {episodes.map((i) => (
                  <li key={i.episode_id}>
                    {i.title} (season {i.season} - {i.series})
                  </li>
                ))}
              </ul>
            ) : (
              "No episodes data found."
            )}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default EpisodeList;
