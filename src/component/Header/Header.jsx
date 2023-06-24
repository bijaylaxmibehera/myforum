import { NavLink } from "react-router-dom";
import "./Header.css";
export function Header() {
  return (
    <>
      <nav>
        <NavLink to="/">MyForum</NavLink>
      </nav>
    </>
  );
}
