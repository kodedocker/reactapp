import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppNav />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

function AppNav() {
  return (
    <div>
      <Link to={"/page1"}>Page1 |</Link>
      <Link to={"/page2"}>Page2 |</Link>
      <Link to={"/page3"}>Page3 |</Link>
    </div>
  );
}

function Page1() {
  return (
    <div>
      <h1 className="bg-primary">Page1</h1>
      <p>lorem</p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h1 className="bg-info">Page2</h1>
      <p>lorem</p>
    </div>
  );
}

function Page3() {
  return (
    <div>
      <h1 className="bg-danger">Page3</h1>
      <p>lorem</p>
    </div>
  );
}

export default App;
