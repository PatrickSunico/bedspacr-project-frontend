import React from 'react';

// Icons
import { ReactComponent as Washer } from '../../img/amenities/washer.svg';
import { ReactComponent as Pool } from '../../img/amenities/swimming-pool.svg';
import { ReactComponent as DishWasher } from '../../img/amenities/dishwasher.svg';
import { ReactComponent as Wifi } from '../../img/amenities/wifi.svg';
import { ReactComponent as DisabledParking } from '../../img/amenities/disabled-parking.svg';
import { ReactComponent as Cooling } from '../../img/amenities/cooling.svg';
import { ReactComponent as Balcony } from '../../img/amenities/balcony.svg';
import { ReactComponent as PetsAllowed } from '../../img/amenities/pets-allowed.svg';
import { ReactComponent as Parking } from '../../img/amenities/parking.svg';
import { ReactComponent as Heating } from '../../img/amenities/heating.svg';
import { ReactComponent as Utilities } from '../../img/amenities/utilities.svg';
import { ReactComponent as Furnished } from '../../img/amenities/furnished.svg';

const AmenitiesList = () => {
  return (
    <div className="amenities-wrapper flex flex-row pt-2 pb-1 w-full">
      <div className="amenities-container w-full amenities-container">
        {/* Amenities */}
        <h2 className="text-2xl font-black border-gray-400 border-b mb-4">
          Amenities
        </h2>
        <div className="amenities-grid grid grid-cols-4 gap-2  mt-2 mb-2">
          <div className="amenity flex flex-row text-sm">
            <Washer className="mr-2" />
            Washer
          </div>
          <div className="amenity flex flex-row text-sm">
            <Pool className="mr-2" />
            Swimming Pool
          </div>
          <div className="amenity flex flex-row text-sm">
            <DishWasher className="mr-2" />
            Dishwasher
          </div>
          <div className="amenity flex flex-row text-sm">
            <Wifi className="mr-2" />
            Wifi
          </div>

          <div className="amenity flex flex-row text-sm">
            <DisabledParking className="mr-2" />
            Disabled Parking
          </div>
          <div className="amenity flex flex-row text-sm">
            <Cooling className="mr-2" />
            Cooling
          </div>
          <div className="amenity flex flex-row text-sm">
            <Balcony className="mr-2" />
            Balcony
          </div>
          <div className="amenity flex flex-row text-sm">
            <PetsAllowed className="mr-2" />
            Pets Allowed
          </div>

          <div className="amenity flex flex-row text-sm">
            <Parking className="mr-2" />
            Parking
          </div>
          <div className="amenity flex flex-row text-sm">
            <Heating className="mr-2" />
            Heating
          </div>
          <div className="amenity flex flex-row text-sm">
            <Utilities className="mr-2" />
            Utilities Included
          </div>
          <div className="amenity flex flex-row text-sm">
            <Furnished className="mr-2" />
            Furnished
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesList;
