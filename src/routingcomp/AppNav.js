import { Link } from "react-router-dom";

function AppNav() {
  return (
    <div>
      <Link to={"/page1"}>Page1 |</Link>
      <Link to={"/page2"}>Page2 |</Link>
      <Link to={"/page3"}>Page3 |</Link>
    </div>
  );
}

export default AppNav;
