import {PageNav} from "../components/PageNav.jsx";
import {Link} from "react-router-dom";
import {AppNav} from "../components/AppNav.jsx";

export function Home() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1>WorldWise</h1>

      <Link to="/app">App</Link>
    </div>
  );
}