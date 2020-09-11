import React, { useState, useEffect } from "react";
import * as uuid from "uuid";
import Character from "./Character";

const Characters = (props) => {
  const [charList, setCharList] = useState(null);
  console.log(props.charList);
  useEffect(() => {
    setCharList(props.charList);
  }, [props.charList]);

  return (
    <div className="row">
      {charList &&
        charList.map((char) => {
          return <Character key={uuid.v4()} charData={char} />;
        })}
    </div>
  );
};

export default Characters;
