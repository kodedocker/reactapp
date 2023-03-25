function App() {
  // Data Variabl :: Modal
  let btnTitle = "Save Me";
  let title = "My Project";

  let saveMe = () => {
    console.log("SAVE ME");
  };

  return (
    <div>
      <h1>My View Areaaa</h1>
      <h1 id={title}> {title} </h1>
      <div name={title}>{title}</div>

      <input type="button" value={btnTitle} onClick={saveMe} />
    </div>
  );
}

export default App;
