import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to={"/page1"}>Page1 |</Link>
        <Link to={"/page2"}>Page2 |</Link>
        <Link to={"/page3"}>Page3 |</Link>
      </div>
      <Routes>
        <Route path="/" element={<h1>Page1</h1>} />
        <Route path="/page1" element={<h1>Page1</h1>} />
        <Route path="/page2" element={<h1>Page2</h1>} />
        <Route path="/page3" element={<h1>Page3</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
