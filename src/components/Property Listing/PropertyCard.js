import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ img }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/4 flex flex-col p-3">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
        <div className="bg-cover h-64">
          <img src={img} alt="property-listing" />
        </div>
        <div className="flex-1 flex flex-col">
          <div className="px-4 py-3 border-b">
            <h3 className="text-2xl font-black">Address</h3>
            <h3 className="text-base font-medium">State</h3>
          </div>

          <div className="px-4 py-3 mb-4 text-grey-darker text-sm flex-1">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
          </div>

          <div className="px-4 py-3 border-t text-center">
            <Link
              to="/dashboard/property-listings"
              className=" border-grey-light pt-2 text-xs text-grey hover:text-red uppercase no-underline tracking-wide"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
