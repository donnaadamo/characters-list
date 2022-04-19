import React from "react";
import moment from "moment";

const LastEpisode = (props) => {
  const lastEpisodeDate = moment(
    props.episodes[props.episodes.length - 1].air_date, 'MM-DD-YYYY'
  );
  const today = moment();
  const daysAmount = today.diff(lastEpisodeDate, "days");

  return <div style={{fontSize: "1.5rem"}}>Last episode aired {daysAmount} days ago.</div>;
};

export default LastEpisode;
