import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState({});
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductData(product);
        setImage(product.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* Product Data */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt="image"
                onClick={() => setImage(image)}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="image" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_icon} alt="star" className="w-3" />
            <img src={assets.star_dull_icon} alt="star" className="w-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-3 text-2xl font-medium">
            {currency} {productData.price}{" "}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes?.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              onClick={() => addToCart(productData._id, size)}
              className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 w-1/2"
            >
              Add To Cart
            </button>
            <hr className="mt-8 sm:w-4/5" />
            <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
              <p>100% Original product</p>
              <p>Cash On Delivery is available on this product</p>
              <p>Easy Return and Exchange policy within 7 days</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews (122) </p>
        </div>
        <div className="flex flex-col gap-4 border p-5 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            exercitationem quod, eaque provident ex voluptas quia magnam debitis
            tenetur cupiditate a cumque inventore harum tempora necessitatibus
            eius. Neque, labore. Sequi eaque provident quibusdam quam nihil?
            Velit, provident fugiat atque ab rem tempora blanditiis et
            recusandae laboriosam distinctio, eaque vero natus neque fuga quas
            quisquam nulla saepe harum inventore sed quia. Possimus ducimus
            voluptas maxime. Ipsum cupiditate architecto odit eaque? Doloribus
            dolorum reiciendis esse sequi qui optio tempore assumenda
            praesentium veritatis illo deleniti unde excepturi laudantium maxime
            consequatur culpa a, perferendis minus repellendus deserunt
            exercitationem quaerat alias adipisci! Voluptas, fuga eum!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure,
            omnis!
          </p>
        </div>
      </div>
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;