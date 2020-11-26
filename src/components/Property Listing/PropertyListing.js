import React from "react";
import "./PropertyListing.scss";

// Global Components
import SideNav from "../Global/SideNav/SideNav";
import DashboardSelector from "../Global/DashboardSelector/DashboardSelector";
import Button from "../Global/Button/Button";

// Property Listing Card
import PropertyCard from "./PropertyCard";

import { ReactComponent as Plus } from "../../img/plus.svg";
// Houses
import House1 from "../../img/house-1.jpg";
import House2 from "../../img/house-2.jpg";
import House3 from "../../img/house-3.jpg";
import House4 from "../../img/house-4.jpg";

const PropertyListing = () => {
  return (
    <div id="main-dashboard h-screen">
      <div className="flex flex-wrap">
        <SideNav />
        {/* Main Content */}
        <div className="main-body w-full bg-gray-200 pl-0 lg:pl-64 min-h-screen">
          <div className="px-2 sm:px-2 md:px-10 lg:px-20 py-10">
            <div className="flex flex-row border-gray-400 border-b justify-between pb-4">
              <DashboardSelector classNames="text-small sm:text-2xl md:text-2xl lg:text-2xl" />
              <Button className="h-10 text-white font-medium px-3 rounded primary-color-bg flex flex-row items-center font-small lg:font-lg">
                <Plus className="mr-2" />
                Add a Listing
              </Button>
            </div>

            <div className="py-10">
              <div className="flex flex-wrap -m-2 overflow-hidden">
                <PropertyCard img={House1} />
                <PropertyCard img={House2} />
                <PropertyCard img={House3} />
                <PropertyCard img={House4} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;
