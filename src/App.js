import { useState } from "react";

function App() {
  return (
    <div>
      <h1>List Assignment</h1>
      <ListDemo2 />
      <ListDemo1 />
      <ListDemo />
    </div>
  );
}

function ListDemo2() {
  let [city, setCity] = useState("");
  let [list, setList] = useState(["delhi", "calcutta"]);

  const inputCityHandler = (e) => {
    setCity(e.target.value);
  };

  const inputSubmitHandler = (e) => {
    if (e.keyCode == 13) {
      addNewCity();
    }
  };

  const addNewCity = () => {
    if (!city) {
      return;
    }

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
        onKeyUp={inputSubmitHandler}
      />
      <input type="button" value="Add New City" onClick={addNewCity} />

      <ul>
        {list.map((item, index) => (
          <li key={index}>2.{item}</li>
        ))}
      </ul>
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
          <li key={index}>1.{item}</li>
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
