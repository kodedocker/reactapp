import { useRef, useState } from "react";

function App() {
  return (
    <div>
      <HelloInputEvent2 />
      <HelloInputEvent1 />
    </div>
  );
}

function HelloInputEvent2() {
  let messageRef = useRef();
  let [message, setMessage] = useState("Option2");

  let saveMe = () => {
    console.log(messageRef.current.value);

    let newMessage = messageRef.current.value;
    setMessage(newMessage);

    messageRef.current.value = "";
  };

  return (
    <div>
      <h1>Option2 + Event Binding</h1>
      <input type="text" ref={messageRef} placeholder="Enter here...." />
      <input type="button" value="Save" onClick={saveMe} />

      <div>{message}</div>
      <hr />
    </div>
  );
}

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

export default App;
