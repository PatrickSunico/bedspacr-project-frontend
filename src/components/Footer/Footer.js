import React from "react";
import "./Footer.scss";

import { ReactComponent as BedspacrFooter } from "../../img/bedspacr-footer-logo.svg";

const Footer = () => {
  return (
    <footer className="py-24">
      {/* <div className="flex flex-col xl:flex-row"></div> */}
      <div className="mt-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col xl:flex-row justify-between">
        <div className="w-1/2">
          <BedspacrFooter className="mb-4" />
          <p className="text-white font-light">© 2020 Bedspacr</p>
        </div>
        {/* <h1 className="w-1/2">Test</h1> */}
        <ul className="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          <li>
            <div className="flex">
              <div className="ml-0 mt-4 xl:ml-4 xl:mt-0 flex flex-col">
                <h4 className="text-lg leading-6 font-semibold text-white">
                  Explore Bedspacr
                </h4>
                <a
                  href="/"
                  className="mt-2 text-base font-thin leading-6 text-white"
                >
                  Home
                </a>

                <a
                  href="/"
                  className="mt-2 text-base font-thin leading-6 text-white"
                >
                  Property Listings
                </a>

                <a
                  href="/"
                  className="mt-2 text-base font-thin leading-6 text-white"
                >
                  Rooms for Rent
                </a>

                <a
                  href="/"
                  className="mt-2 text-base font-thin leading-6 text-white"
                >
                  Houses for Rent
                </a>

                <a
                  href="/"
                  className="mt-2 text-base font-thin leading-6 text-white"
                >
                  Explore Cities
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div className="ml-0 mt-4 xl:ml-4 xl:mt-0 flex flex-col">
                <h4 className="text-lg leading-6 font-semibold text-white">
                  Landlords
                </h4>
                <a
                  href="/"
                  className="mt-2 text-base font-thin leading-6 text-white"
                >
                  Home
                </a>

                <a
                  href="/"
                  className="mt-2 text-base font-thin leading-6 text-white"
                >
                  Share your home
                </a>

                <a
                  href="/"
                  className="mt-2 text-base font-thin leading-6 text-white"
                >
                  Landlord Guidelines
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="flex">
              <div className="ml-0 mt-4 xl:ml-4 xl:mt-0 flex flex-col">
                <h4 className="text-lg leading-6 font-semibold text-white">
                  Support
                </h4>
                <a
                  href="/"
                  className="mt-2 text-base font-thin leading-6 text-white"
                >
                  FAQ
                </a>

                <a
                  href="/"
                  className="mt-2 text-base font-thin leading-6 text-white"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
