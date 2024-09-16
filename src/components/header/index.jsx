import "./index.scss";
import { Link } from "react-router-dom";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import logo from "./image-removebg-preview.png";
function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="Logo" width={100} />
        </Link>
      </div>

      <nav className="header__nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Movie</Link>
          </li>
          <li>
            <Link to="/movie-management">Movie Management</Link>
          </li>
          <li>
            <SearchOutlined />
          </li>
          <li>
            <Link to="/login">
              <UserOutlined />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
