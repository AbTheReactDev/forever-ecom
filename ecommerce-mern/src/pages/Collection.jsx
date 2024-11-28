// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
  const { products, searchText, isSearchShown } = useContext(ShopContext);
  const [isFilterShown, setIsFilterShown] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [sortType, setSortType] = useState("");

  const toggleCategory = (event) => {
    if (categories.includes(event.target.value)) {
      setCategories((prev) =>
        prev.filter((category) => category !== event.target.value)
      );
    } else {
      setCategories((prev) => [...prev, event.target.value]);
    }
  };

  const toggleSubCategory = (event) => {
    if (subCategories.includes(event.target.value)) {
      setSubCategories((prev) =>
        prev.filter((category) => category !== event.target.value)
      );
    } else {
      setSubCategories((prev) => [...prev, event.target.value]);
    }
  };

  const applyFilters = () => {
    let productsCopy = products.slice();

    if (isSearchShown && searchText) {
      productsCopy = productsCopy.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );
    }
    if (categories.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        categories.includes(product.category)
      );
    }

    if (subCategories.length > 0) {
      productsCopy = productsCopy.filter((product) =>
        subCategories.includes(product.subCategory)
      );
    }
    setFilteredProducts(productsCopy);
  };

  const sortProducts = () => {
    let unsortedProducts = products.slice();
    switch (sortType) {
      case "low-high":
        setFilteredProducts(unsortedProducts.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilteredProducts(unsortedProducts.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilters();
        break;
    }
  };

  useEffect(() => {
    setFilteredProducts(products);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, subCategories, searchText, isSearchShown, products]);

  useEffect(() => {
    sortProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filters */}
      <div className="min-w-60">
        <p
          onClick={() => setIsFilterShown(!isFilterShown)}
          className="uppercase my-2 cursor-pointer text-xl flex items-center gap-2"
        >
          Filters
          <img
            className={`h-3 sm:hidden ${isFilterShown ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="dropdown"
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            isFilterShown ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="w-3 cursor-pointer"
                value="Men"
              />{" "}
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="w-3 cursor-pointer"
                value="Women"
              />{" "}
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleCategory}
                className="w-3 cursor-pointer"
                value="Kids"
              />{" "}
              Kids
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            isFilterShown ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                className="w-3 cursor-pointer"
                value="Topwear"
              />{" "}
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                className="w-3 cursor-pointer"
                value="Bottomwear"
              />{" "}
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                onChange={toggleSubCategory}
                className="w-3 cursor-pointer"
                value="Winterwear"
              />{" "}
              Winterwear
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1="All" text2="Collections" />
          <select
            onChange={(event) => setSortType(event.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavent">Sort By Relavent</option>
            <option value="low-high">Sort By Low to High</option>
            <option value="high-low">Sort By High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6  ">
          {filteredProducts?.map((product, index) => (
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

export default Collection;
