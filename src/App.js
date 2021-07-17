import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/Global.css";

const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./components/products/ProductDetail"));
const Innovators = lazy(() => import("./pages/Innovators"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>loading...</div>}>
        <Switch>
          <Route path="/" component={Home} exact />

          <Route path="/products" component={Products} />

          <Route path="/innovators" component={Innovators} />

          <Route path="/aboutus" component={AboutUs} />

          <Route path="/contactus" component={ContactUs} />
        </Switch>
      </Suspense>
    </Router>
  );
}
