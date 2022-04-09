import React from "react";
import { Link } from "react-router-dom";

const DashboardListingCard = ({ img }) => {
  return (
    <Link
      to="/"
      className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 flex flex-col p-3"
    >
      <div className="bg-white rounded-lg hover:shadow-lg transition duration-100 ease-in-out overflow-hidden flex-1 flex flex-col">
        <div className="bg-cover h-64">
          <img src={img} alt="test" />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="px-4 py-3 border-b">
            <h3 className="text-2xl font-black">Address</h3>
            <h4 className="text-base font-medium">State</h4>
          </div>

          <div className="px-4 py-3 mb-4 text-grey-darker text-sm flex-1">
            <h4 className="text-xl font-semibold mb-2">Shared Apartment</h4>
            <p className="text-sm font-semibold">Tenants</p>
            <p className="text-sm font-light">
              Bobby Jackson, Jackson Samson, Johnson Simpson
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DashboardListingCard;
