import "../../styles/Banner.css";
import banner from "../../assets/Banner.png";
export default function Banner(props) {
  return (
    <div className="banner">
      <img src={banner} alt="banner" />
      <div className="banner-label mt-3">
        <h1>{props.label}</h1>
        <div />
        <div className="d-flex mt-4">
          <a href="/products/innovations">INNOVATIONS</a>
          <a href="/products/books">BOOKS</a>
          <a href="/products/souvenirs">SOUVENIRS</a>
        </div>
      </div>
    </div>
  );
}
