import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur blanditiis rerum, repellat ipsam optio iste suscipit
            magni nisi vitae tempora magnam libero possimus architecto
            accusamus?
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 uppercase">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li href="/">Home</li>
            <li href="/about">About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5 uppercase">Get in touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li href="/">+91 1234567890</li>
            <li href="/about">contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright 2024@ forever.com - All Rights Reservered{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
