// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const location = useLocation();
  const [isCollection, setIsCollection] = useState(false);
  const { isSearchShown, setIsSearchShown, searchText, setSearchText } =
    useContext(ShopContext);

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setIsCollection(true);
    } else {
      setIsCollection(false);
    }
  }, [location]);

  return isSearchShown && isCollection ? (
    <div className="border-t border-b bg-gray-50 text-center ">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          className="flex-1 outline-none bg-inherit text-sm"
          onChange={(event) => setSearchText(event.target.value)}
        />
        <img src={assets.search_icon} alt="search" className="w-4" />
      </div>
      <img
        onClick={() => setIsSearchShown(false)}
        className="w-3 inline cursor-pointer"
        src={assets.cross_icon}
        alt="cross"
      />
    </div>
  ) : null;
};

export default SearchBar;
