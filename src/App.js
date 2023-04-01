import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNav from "./routingcomp/AppNav";
import Page1 from "./routingcomp/Page1";
import Page2 from "./routingcomp/Page2";
import Page3 from "./routingcomp/Page3";

function App() {
  return (
    <BrowserRouter>
      {/* <AppNav /> */}
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
