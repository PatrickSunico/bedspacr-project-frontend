import React from "react";

import "./DashboardDetails.scss";

// Link
import { Link } from "react-router-dom";

// Global Components
import SideNav from "../../Global/SideNav/SideNav";
import DashboardSelector from "../../Global/DashboardSelector/DashboardSelector";
import Button from "../../Global/Button/Button";

// Dashboard Components
import DashboardImageGallery from "../DashboardListingDetails/DashboardImageGallery";
import DashboardAgentDetails from "../DashboardListingDetails/DashboardAgentDetails";
import DashboardTenants from "../DashboardListingDetails/DashboardTenants";
import AmenitiesList from "../DashboardListingDetails/AmenitiesList";

// Images
import PropertyDetailsImage from "../../../img/property-gallery/main-property-image.jpg";
// Icons
import { ReactComponent as Apartment } from "../../../img/icons/apartment.svg";
import { ReactComponent as Bathtub } from "../../../img/icons/bathtub.svg";
import { ReactComponent as Bedroom } from "../../../img/icons/bed.svg";
import { ReactComponent as SQFT } from "../../../img/icons/floor-plan.svg";

// Property Listing Card
import { ReactComponent as Plus } from "../../../img/plus.svg";

const DashboardDetails = () => {
 return (
  <div id="main-dashboard h-screen">
   <div className="flex flex-wrap">
    <SideNav />
    <div className="main-body w-full bg-gray-200 pl-0 lg:pl-64 min-h-screen">
     {/* px-6 sm:px-10 md:px-20 lg:px-30 */}
     <div className="max-w-max sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-4 md:px-4 lg:px-20 xl:px-20 py-10">
      <div className="flex flex-row border-gray-400 border-b justify-between pb-4">
       <DashboardSelector classNames="text-small sm:text-2xl md:text-2xl lg:text-2xl" />
       <Button className="h-10 text-white font-medium px-3 rounded primary-color-bg flex flex-row items-center font-small lg:font-lg">
        <Plus className="mr-2" />
        Add a Listing
       </Button>
      </div>

      {/* Property Details */}
      <div className="py-10">
       <div className="flex property-details-mainwrapper overflow-hidden justify-between flex-col lg:flex-col xl:flex-row">
        {/* Property Details Wrapper */}
        <div className="w-full property-details-container  xl:w-9/12 bg-white p-6 rounded-md sm:mr-4 sm:mr-4 md:mr-4 lg:mr-6 xl:mr-6">
         {/* Property Details */}
         <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row">
          <div className="fixed-image-container w-full">
           <img
            className="fixed-image"
            src={PropertyDetailsImage}
            alt="property-details"
           />
          </div>

          {/* Title Price, State */}
          <div className="px-6 flex-grow flex-col py-6 md:py-6 lg:py-0 xl:py-0">
           <div className="flex flex-row mb-4">
            <div className="w-full">
             <h2 className="font-semibold text-2xl primary-color-text">
              $ 2000
             </h2>
             <h3 className="font-semibold text-xl">Neil Avenue 6599</h3>
             <p className="font-light text-lg">New York, NY</p>
            </div>
            <span className="font-black text-lg primary-color-text flex-none">
             EDIT
            </span>
           </div>

           {/* Details Icons */}
           <div className="flex flex-row justify-between items-start">
            <div className="flex flex-col items-center h-16 px-2">
             <Apartment className="m-auto" />
             <h3>Apartment</h3>
            </div>
            <div className="flex flex-col items-center h-16 px-2">
             <Bathtub className="m-auto" />
             <h3>Bathroom</h3>
            </div>
            <div className="flex flex-col items-center h-16 px-2">
             <Bedroom className="m-auto" />
             <h3>Bedroom</h3>
            </div>
            <div className="flex flex-col items-center h-16 px-2">
             <SQFT className="m-auto" />
             <h3>Sqft</h3>
            </div>
           </div>
           {/* End */}
          </div>
         </div>
         {/* Gallery Component */}
         <DashboardImageGallery />
         {/* Amenities */}
         <AmenitiesList />
        </div>
        {/* Agent & Tenants Wrapper */}
        <div className="w-full agents-tenants-container xl:w-4/12">
         {/* Agent  */}
         <DashboardAgentDetails />
         {/* Tenants */}
         <DashboardTenants />
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default DashboardDetails;
