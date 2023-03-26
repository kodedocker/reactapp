import { useRef, useState } from "react";

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

export default HelloInputEvent2;
