import { Facebook, Instagram, Twitter } from "./SocialIcons";
import "./Navbar.css";
import logo from "/src/assets/logo.png";

const Logo = () => {
  return (
    <a href="https://samorzad.p.lodz.pl/">
      <img src={logo} alt="logo" />
    </a>
  );
};

export const Navbar = () => {
  return (
    <header className="container">
      <nav>
        <div className="logo">
          <Logo />
        </div>
        <div className="social-icon">
          <ul className="list-inline mb-0 d-flex align-items-center">
            <li className="list-inline-item">
              <Facebook />
            </li>
            <li className="list-inline-item">
              <Twitter />
            </li>
            <li className="list-inline-item">
              <Instagram />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
