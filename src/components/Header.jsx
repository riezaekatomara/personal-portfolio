import profilePicture from "../assets/png/pp.png";
import "../styles/Header.css";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Header() {
  return (
    <header>
      <div className="header-jumbotron">
        <img src={profilePicture} />
        <h3>Rieza Eka Tomara</h3>
        <p>Fullstack Web Developer</p>
        <div className="socialMedia">
          <a href="https://www.instagram.com/riezaekt">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/riezaekt">
            <FaInstagram />
          </a>
          <a href="">
            <FaXTwitter />
          </a>
          <a href="">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
