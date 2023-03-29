import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      {/* <InStylingDemo /> */}
      <ExternalStylingDemo />
    </div>
  );
}

function ExternalStylingDemo() {
  return (
    <div>
      <div className="beautify">Hello CSS!</div>
    </div>
  );
}

function InStylingDemo() {
  let [color, setColor] = useState("blue");
  let [styleRef, setStyleRef] = useState({ color: "orange" });

  let themeHandler = (inputColor) => {
    inputColor = inputColor || "red";
    setColor(inputColor);
  };

  let computeStyle = () => {
    console.log("Compute Style");
    return { background: "tomato", color: "white" };
  };

  return (
    <div>
      <h1 style={{ color: "green" }}>Hello Styling</h1>
      <h1 style={{ color: color }}>Hello Styling</h1>
      <h1 style={styleRef}>Hello Styling</h1>

      <h1 style={computeStyle()}>Hello Styling</h1>

      <input
        type="button"
        value="Red Theme"
        onClick={(e) => themeHandler("red")}
      />
      <input
        type="button"
        value="Blue Theme"
        onClick={(e) => themeHandler("blue")}
      />
      <input
        type="button"
        value="Green Theme"
        onClick={(e) => themeHandler("green")}
      />
    </div>
  );
}

export default App;
