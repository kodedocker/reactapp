import { useState } from "react";

function App() {
  return (
    <div>
      <ListDemo />
    </div>
  );
}

// JSX :: list of string
function ListDemo() {
  let [list] = useState(["delhi", "calcutta"]);

  return (
    <div>
      <h1>List Demo</h1>

      {/** Example 3 */}
      {list.map((item) => (
        <div>
          <h1>3. {item}</h1>
        </div>
      ))}

      {/** Example 2 Multiline */}
      {list.map((item) => {
        return (
          <div>
            <h1>2. {item}</h1>
          </div>
        );
      })}

      {/** Example 1 */}
      {list.map((item) => {
        return <h1>1. {item}</h1>;
      })}

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
