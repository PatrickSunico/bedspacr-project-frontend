import React from "react";
import "./DashboardDetails.scss";

// Global Components
import SideNav from "../Global/SideNav/SideNav";
import DashboardSelector from "../Global/DashboardSelector/DashboardSelector";
import Button from "../Global/Button/Button";

// Images
import PropertyDetailsImage from "../../img/property-gallery/main-property-image.jpg";
import PropertyGallery1 from "../../img/property-gallery/property-gallery-1.jpg";
import PropertyGallery2 from "../../img/property-gallery/property-gallery-2.jpg";
import PropertyGallery3 from "../../img/property-gallery/property-gallery-3.jpg";

// Icons
import { ReactComponent as Apartment } from "../../img/icons/apartment.svg";
import { ReactComponent as Bathtub } from "../../img/icons/bathtub.svg";
import { ReactComponent as Bedroom } from "../../img/icons/bed.svg";
import { ReactComponent as SQFT } from "../../img/icons/floor-plan.svg";

// Property Listing Card
import { ReactComponent as Plus } from "../../img/plus.svg";

const DashboardDetails = () => {
  return (
    <div id="main-dashboard h-screen">
      <div className="flex flex-wrap">
        <SideNav />

        <div className="main-body w-full bg-gray-200 pl-0 lg:pl-64 min-h-screen">
          <div className="px-6 sm:px-10 md:px-10 lg:px-20 py-10">
            <div className="flex flex-row border-gray-400 border-b justify-between pb-4">
              <DashboardSelector classNames="text-small sm:text-2xl md:text-2xl lg:text-2xl" />
              <Button className="h-10 text-white font-medium px-3 rounded primary-color-bg flex flex-row items-center font-small lg:font-lg">
                <Plus className="mr-2" />
                Add a Listing
              </Button>
            </div>

            {/* Property Details */}
            <div className="py-10">
              <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row overflow-hidden justify-between">
                {/* Property Details Wrapper */}
                <div className="w-full xl:w-8/12 bg-white p-6 rounded-md sm:mr-4 sm:mr-4 md:mr-4 lg:mr-6 xl:mr-6">
                  {/* Property Details */}
                  <div className="flex flex-row">
                    <div className="fixed-image">
                      <img src={PropertyDetailsImage} aLt="property-details" />
                    </div>

                    {/* Title Price, State */}
                    <div className="px-6 flex-grow flex-col">
                      <div className="flex flex-row mb-4">
                        <div className="w-full">
                          <h2 className="font-semibold text-2xl primary-color-text">
                            $ 2000
                          </h2>
                          <h3 className="font-semibold text-xl">
                            Neil Avenue 6599
                          </h3>
                          <p className="font-light text-lg">New York, NY</p>
                        </div>
                        <span className="font-black text-lg primary-color-text flex-none">
                          EDIT
                        </span>
                      </div>

                      {/* Details Icons */}
                      <div className="flex flex-row justify-between items-start">
                        <div className="flex flex-col items-center h-16">
                          <Apartment className="m-auto" />
                          <h3>Apartment</h3>
                        </div>
                        <div className="flex flex-col items-center h-16">
                          <Bathtub className="m-auto" />
                          <h3>Bathroom</h3>
                        </div>
                        <div className="flex flex-col items-center h-16">
                          <Bedroom className="m-auto" />
                          <h3>Bedroom</h3>
                        </div>
                        <div className="flex flex-col items-center h-16">
                          <SQFT className="m-auto" />
                          <h3>Sqft</h3>
                        </div>
                      </div>

                      {/* Gallery */}
                    </div>
                  </div>
                </div>

                {/* Agent & Tenants Wrapper */}
                <div className="w-full xl:w-4/12">
                  {/* Agent  */}
                  <div className="bg-white p-6 rounded-md mb-4 mt-4 md:mt-4 xl:mt-0 sm:mb-4 md:mb-4 lg:mb-6 xl:mb-6">
                    <h3 className="text-xl font-semibold text-gray-700">
                      Agents
                    </h3>
                  </div>
                  {/* Tenants */}
                  <div className="bg-white p-6 rounded-md">
                    <h3 className="text-xl font-semibold text-gray-700">
                      Tenants
                    </h3>
                  </div>
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
