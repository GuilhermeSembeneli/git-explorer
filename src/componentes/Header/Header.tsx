import { Input } from "../Input/Input";
import { Github } from "./Github";
import "../../styles/Header.scss";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="flexContainer">
        <Link to="/">
          <Github width="32" height="32" />
        </Link>
        <div>
          <Input type="text" placeholder="Insert any Username" />
        </div>
      </div>
    </header>
  );
}
