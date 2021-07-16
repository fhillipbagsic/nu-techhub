import banner from "../../assets/Banner.png";
import Image from "react-bootstrap/Image";
import { Container, Row } from "react-bootstrap";
import "../../styles/Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      <h1>PRODUCTS</h1>
    </div>
  );
}
