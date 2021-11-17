import { VFC } from "react";
import { Link } from "react-router-dom";

interface Props {
  links: { to: string; label: string };
}

const Nav: VFC<Props> = ({ links }) => {
  return (
    <nav className="nav">
      <ul>
        {Object.entries(links).map(([to, label]) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
