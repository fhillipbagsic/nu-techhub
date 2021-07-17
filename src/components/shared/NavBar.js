import NULogo from "../../assets/NU-Logo.png";
import "../../styles/NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand d-flex" href="/">
          <img src={NULogo} alt="" />
          <span className="ml-3 navbar-label">
            {" "}
            NU INNOVATION TECH HUB
            <br />
            <small>Center for Innovation &amp; Entrepreneurship</small>
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link " href="/products/innovations">
                PRODUCTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/innovators">
                INNOVATORS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contactus">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
