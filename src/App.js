import { useState } from "react";

function App() {
  let counter1 = 0;
  let [counter, setCounter] = useState(0);

  let handleIncrment = () => {
    counter1++;
    console.log(counter1);

    setCounter(counter++);
  };

  return (
    <div>
      <h1>
        Counter Demo {counter1} / {counter}
      </h1>
      <input type="button" value="INC" onClick={handleIncrment} />
    </div>
  );
}

export default App;
