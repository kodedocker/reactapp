import { useState } from "react";

function App() {
  return (
    <div>
      <h1>List Assignment</h1>
      <ListDemo1 />
      <ListDemo />
    </div>
  );
}

function ListDemo1() {
  let [city, setCity] = useState("");
  let [list, setList] = useState(["delhi", "calcutta"]);

  const inputCityHandler = (e) => {
    setCity(e.target.value);
  };

  const addNewCity = () => {
    let newlist = [city, ...list];
    setList(newlist);

    // clear the box
    setCity("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={inputCityHandler}
      />
      <input type="button" value="Add New City" onClick={addNewCity} />

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

// JSX :: list of string
function ListDemo() {
  let [list, setList] = useState(["delhi", "calcutta"]);

  const addNewCity = () => {
    let newlist = [...list, "Mumbai"];
    setList(newlist);
  };

  return (
    <div>
      <hr />
      <input type="button" value="Add New City" onClick={addNewCity} />

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
