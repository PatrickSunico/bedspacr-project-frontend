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
        <Link to="/" className="gallery-col">
          <img className=" rounded-sm	" src={PropertyGallery1} alt="property" />
        </Link>
        <Link to="/" className="gallery-col">
          <img className=" rounded-sm	" src={PropertyGallery2} alt="property" />
        </Link>
        <Link to="/" className="gallery-col">
          <img className=" rounded-sm	" src={PropertyGallery3} alt="property" />
        </Link>
        <div className=" gallery-col flex-col">
          <Link
            to="/"
            className="flex view-all h-full primary-gray-color primary-gray-text items-center justify-center font-bold rounded-sm"
          >
            View All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardImageGallery;
