import React from 'react';
import { Link } from 'react-router-dom';

// Images
import PropertyGallery1 from '../../img/property-gallery/property-gallery-1.jpg';
import PropertyGallery2 from '../../img/property-gallery/property-gallery-2.jpg';
import PropertyGallery3 from '../../img/property-gallery/property-gallery-3.jpg';

const DashboardImageGallery = () => {
  return (
    <div className="gallery-wrapper">
      <div className="gallery-container flex flex-row items-center align-center">
        <div className="gallery-col">
          <img className="" src={PropertyGallery1} alt="property" />
        </div>
        <div className="gallery-col">
          <img className="" src={PropertyGallery2} alt="property" />
        </div>
        <div className="gallery-col">
          <img className="" src={PropertyGallery3} alt="property" />
        </div>
        <div className=" gallery-col flex-col">
          <Link
            to="/"
            className="flex view-all h-full bg-gray-200 items-center justify-center"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardImageGallery;
