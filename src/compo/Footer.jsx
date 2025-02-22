import React from 'react';

const Footer = () => {
    return (
        <div className="text-center bg-gray-900 text-white pt-10 pb-10 mt-10">
        <div>
          <p className="text-xl text-[#e6005c] flex items-center font-bold italic w-fit mx-auto mb-2">
            <span className="text-4xl">Libra Assistance</span>
          </p>
  
          <p className="text-gray-500">
            Learning the way in cutting edge tech and innovation
          </p>
        </div>
        <hr className="my-7 mx-20" />
        <div className="flex md:justify-between flex-col gap-y-8 md:flex-row md:px-52 lg:px-80">
          <ul>
            <h6 className="font-bold">Services</h6>
            <li className="text-sm text-gray-500 mt-1">Product Support</li>
            <li className="text-sm text-gray-500 mt-1">Order Tracking</li>
            <li className="text-sm text-gray-500 mt-1">Shipping & Delivery</li>
            <li className="text-sm text-gray-500 mt-1">Return</li>
          </ul>
          <ul>
            <h6 className="font-bold">Company</h6>
            <li className="text-sm text-gray-500 mt-1">About Us</li>
            <li className="text-sm text-gray-500 mt-1">Career</li>
            <li className="text-sm text-gray-500 mt-1">Contact</li>
          </ul>
          <ul>
            <h6 className="font-bold">Legal</h6>
            <li className="text-sm text-gray-500 mt-1">Terms of Service</li>
            <li className="text-sm text-gray-500 mt-1">Privacy Policy</li>
            <li className="text-sm text-gray-500 mt-1">Cookie Policy</li>
          </ul>
        </div>
      </div>
    );
};

export default Footer;