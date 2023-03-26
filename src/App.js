function App() {
  let project = "react wod";

  let handleClick1 = () => {
    console.log("Click 1");
  };

  // e -> this is optinal
  let handleClick2 = (e) => {
    console.log("Click 2", e);
  };

  // p1 - use defined, if userd pass this as arg.
  // else this will become e
  let handleClick3 = (p1) => {
    console.log("Click 3", p1);
  };

  let handleClick4 = (e, p1) => {
    console.log(e, p1);
  };

  return (
    <div>
      <h1>Hello Event Binding</h1>
      <input type="button" value="Option1" onClick={handleClick1} />
      <input type="button" value="Option2" onClick={handleClick2} />

      <input
        type="button"
        value="Option3"
        onClick={() => handleClick3(project)}
      />

      <input
        type="button"
        value="Option4"
        onClick={(e) => handleClick4(e, project)}
      />
    </div>
  );
}

export default App;
