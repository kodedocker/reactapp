import { useState } from "react";

function HelloInputEvent1() {
  let [message, setMessage] = useState("Hello World");

  let saveMe = () => {
    let newMessage = document.querySelector("#id1").value;
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>Option1 + Event Binding</h1>
      <input type="text" id="id1" placeholder="Enter here...." />
      <input type="button" value="Save" onClick={saveMe} />

      <div>{message}</div>
      <hr />
    </div>
  );
}

export default HelloInputEvent1;
