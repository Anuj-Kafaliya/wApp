import React from "react";

const Card = (data) => {
  return(
        <div>
        <h2>{data?.datum?.name}</h2>
        <p>{data?.datum?.main?.temp}</p>
        <p>{data?.datum?.main?.feels_like}</p>
        <p>{data?.datum?.main?.humidity}</p>
    </div>
  )
};

export default Card;
