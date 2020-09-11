import React, { useState, useEffect } from "react";
import axios from "axios";
import Characters from "./components/Characters";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const URL = "https://rickandmortyapi.com/api/";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios.get(URL + "character/").then((response) => {
        setData(response.data.results);
      });
    };
    if (!data) {
      fetchData();
    }
  }, [data]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data && <Characters charList={data} />}
    </div>
  );
};

export default App;
