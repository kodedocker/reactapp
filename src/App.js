import { useState } from "react";

function App() {
  return (
    <div>
      <BootstrapStyling />
    </div>
  );
}

function BootstrapStyling() {
  let [primary, setPrimary] = useState("dark");
  let [secondary, setSecondary] = useState("light");
  let [list] = useState([1, 11, 11, 11, 1, 1, 1, 11]);

  let themeHandler = (primary, secondary) => {
    primary = primary || "dark";
    secondary = secondary || "light";

    setPrimary(primary);
    setSecondary(secondary);
  };

  return (
    <div>
      <h1 className={`bg-${primary} text-${secondary} p-3 mb-1 sticky-top`}>
        Hello Bootstrap
      </h1>

      <input
        type="button"
        value="P"
        className="btn btn-sm btn-primary"
        onClick={() => themeHandler("primary")}
      />
      <input
        type="button"
        value="P"
        className="btn btn-sm btn-secondary"
        onClick={() => themeHandler("secondary")}
      />
      <input
        type="button"
        value="P"
        className="btn btn-sm btn-info"
        onClick={() => themeHandler("info")}
      />
      <input
        type="button"
        value="P"
        className="btn btn-sm btn-warning"
        onClick={() => themeHandler("warning")}
      />
      <input
        type="button"
        value="P"
        className="btn btn-sm btn-danger"
        onClick={() => themeHandler("danger")}
      />

      {list.map((item, index) => (
        <div key={index} className={`alert alert-${primary} mb-1`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius,
          distinctio laboriosam. Ab natus tenetur consequuntur, at beatae
          laborum aperiam reprehenderit maxime libero, obcaecati incidunt
          aspernatur! Enim vel itaque dicta facere? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Omnis ipsa reiciendis dolorem velit
          deleniti dolore dolores? Nostrum placeat necessitatibus quod? Libero,
          dignissimos. Sapiente exercitationem quibusdam dolores distinctio
          cupiditate! Adipisci, illum!
        </div>
      ))}
    </div>
  );
}

export default App;
