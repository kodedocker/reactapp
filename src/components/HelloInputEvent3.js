import { useState } from "react";

function HelloInputEvent3() {
  let [message, setMessage] = useState("");

  let messageHandler = (e) => {
    setMessage(e.target.value);
  };

  let saveMe = () => {
    // API CALL
  };

  return (
    <div>
      <h1>Option2 + Event Binding</h1>
      <input
        type="text"
        placeholder="Enter here...."
        value={message}
        onChange={messageHandler}
      />
      <input type="button" value="Save" onClick={saveMe} />

      <div>{message}</div>
      <hr />
    </div>
  );
}

export default HelloInputEvent3;
