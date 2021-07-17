import banner from "../../assets/Banner.png";
import Image from "react-bootstrap/Image";
import { Container, Row } from "react-bootstrap";
import "../../styles/Banner.css";

export default function Banner(props) {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      <div className="banner-label">
        <h1>{props.label}</h1>
        <div />
      </div>
    </div>
  );
}
