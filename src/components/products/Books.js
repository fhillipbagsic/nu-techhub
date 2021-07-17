import { useEffect, useState } from "react";
import { productData } from "../../mockdata/ProductsData";
import ProductItem from "./ProductItem";

export default function Books() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(
      productData
        .filter((item) => item.productType === "books")
        .map((item) => (
          <ProductItem
            productID={item.productID}
            productName={item.productName}
            productImage={item.productImage[0]}
            owner={item.owner}
          />
        ))
    );
  }, [setItems]);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        {items && (
          <>
            <div>
              <h2>Books</h2>
              <p>
                Showing 1-6 of {items.length}{" "}
                {items.length > 1 ? "results" : "result"}
              </p>
            </div>
            <div className="d-flex">
              <div>
                <p>Sort by</p>
                <select className="form-select form-select-lg mb-3">
                  <option selected value="Price Highest to Lowest">
                    Price Highest to Lowest
                  </option>
                  <option value="Price Lowest to Highest">
                    Price Lowest to Highest
                  </option>
                  <option value="Recent">Recent</option>
                  <option value="Relevance">Relevance</option>
                </select>
              </div>
              <div className="ml-3">
                <p>Genre</p>
                <select className="form-select form-select-lg mb-3">
                  <option selected value="Science">
                    Science
                  </option>
                  <option value="Medical">Medical</option>
                  <option value="Economics">Economics</option>
                  <option value="Engineering">Engineering</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5">
        {items}
      </div>
    </div>
  );
}
