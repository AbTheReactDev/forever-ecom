import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";
import Title from "./Title";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    let productCopy = products.slice();
    productCopy = productCopy.filter(
      (product) => product.category === category
    );
    productCopy = productCopy.filter(
      (product) => product.subCategory === subCategory
    );
    setRelatedProducts(productCopy.slice(0, 5));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, subCategory]);

  return (
    <div>
      <div className="my-10">
        <div className="text-center py-8 text-3xl">
          <Title text1="Related" text2="Products" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 ">
          {relatedProducts?.map((product, index) => (
            <ProductItem
              key={index}
              id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
