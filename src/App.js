import { useState } from "react";

function App() {
  return (
    <div>
      <h1>List Assignment</h1>
      <ListDemo2 />

      <ConditionalDemo />
    </div>
  );
}

function ListDemo2() {
  let [city, setCity] = useState("");
  let [cityValidation, setCityValidatoin] = useState(false);
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
      setCityValidatoin(true);
      return;
    } else {
      setCityValidatoin(false);
    }

    let newlist = [city, ...list];
    setList(newlist);

    // clear the box
    setCity("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={inputCityHandler}
          onKeyUp={inputSubmitHandler}
        />
        <input type="button" value="Add New City" onClick={addNewCity} />
      </div>
      {cityValidation && <small>*City is not valid</small>}

      <ul>
        {list.map((item, index) => (
          <li key={index}>2.{item}</li>
        ))}
      </ul>
    </div>
  );
}

function ConditionalDemo() {
  const [morning, setMorning] = useState(false);
  const toggleMorningMessage = () => {
    let newMorning = !morning;

    // RERENDER
    setMorning(newMorning);
  };

  return (
    <div>
      {morning ? (
        <div>
          <h1>Good Morning</h1>{" "}
        </div>
      ) : (
        <h1>Good Evening</h1>
      )}

      {morning && <h1>Good Morning</h1>}

      <input type="button" value="Toggle" onClick={toggleMorningMessage} />
    </div>
  );
}

export default App;
