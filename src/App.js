import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
