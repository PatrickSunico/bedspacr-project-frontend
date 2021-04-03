import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import Landing from '../../img/landing.jpg';

// Images
// 420x225 3x3 Grid
import Chicago420 from '../../img/chicago-420x225.jpg';

// 314 x 520 Long
import CaliforniaLong from '../../img/california-314x520.jpg';
import DenverLong from '../../img/denver-314x520.jpg';

// 314x247 Smaller
import PittsburghSmall from '../../img/pittsburgh-314x247.jpg';
import DenverSmall from '../../img/denver-314x247.jpg';
import PittsBurghSmall from '../../img/pittsburgh-314x247.jpg';

// Logos
import { ReactComponent as Search } from '../../img/search.svg';
import { ReactComponent as House } from '../../img/house.svg';
import { ReactComponent as Check } from '../../img/check.svg';
import { ReactComponent as Share } from '../../img/share.svg';

// Components
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <div className="landing-container">
      <div
        className="landing-bg flex flex-col px-4 py-32 h-full lg:h-screen"
        style={{ backgroundImage: `url(${Landing})` }}
      >
        <div className="search-box mx-auto my-auto  md:w-4/4 lg:w-3/4 xl:w-2/4">
          <div className="">
            <h3 className=" text-3xl md:text-4xl lg:text-5xl font-black text-white ">
              The Perfect House for you
            </h3>
            <p className="text-base leading-6 lg:text-xl font-medium text-white pb-6">
              Find rooms and apartments for rent
            </p>
          </div>
          <form className="flex flex-row items-stretch">
            <input
              className="h-16 bg-gray-100 text-grey-darker font-normal text-grey-darkest border border-gray-100 font-bold w-full px-4 outline-none text-lg text-gray-600 rounded rounded-r-none"
              type="text"
              placeholder="Search For a Location"
            />
            <span className="flex items-stretch items-center bg-gray-100  rounded-r-lg border-0 font-bold text-grey-100 ">
              <button
                type="button"
                className=" py-2 px-6 text-lg text-white font-bold rounded-r-lg search-button"
              >
                <Search />
              </button>
            </span>
          </form>
        </div>
      </div>

      {/*  About */}
      <div className="py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <p className="text-base leading-6 font-semibold tracking-wide uppercase">
              ABOUT BEDSPACR
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              A Better way of finding your next home
            </h3>
          </div>
        </div>

        <div className="mt-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md primary-color-bg text-white">
                    <House />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Find a House
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md primary-color-bg text-white">
                    <Check />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Check a Room
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md primary-color-bg text-white">
                    <Share />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-gray-900">
                    Share the House
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Cities Grid */}
      <div className="py-24 image-grid-bg">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div>
            <p className="text-base leading-6 font-semibold tracking-wide uppercase">
              Find Properties in your cities
            </p>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Explore Cities
            </h3>
          </div>
        </div>
        <div className="masonry-gallery mx-auto mb-10 px-4 md:px-4 lg:px-4 xl:px-0">
          <Link to="/" className="card card--1">
            <img src={Chicago420} alt="Masonry Gallery" />
            <div className="bg-grid"></div>
            <figcaption>
              <h1 className="font-bold text-3xl">Chicago</h1>
              <p className="font-lg">Tinley Park</p>
            </figcaption>
          </Link>
          <Link to="/" className="card card--2">
            <img src={CaliforniaLong} alt="Masonry Gallery" />
            <div className="bg-grid"></div>
            <figcaption>
              <h1 className="font-bold text-3xl">California</h1>
              <p className="font-lg">Orange County</p>
            </figcaption>
          </Link>
          <Link to="/" className="card card--3">
            <img src={PittsburghSmall} alt="Masonry Gallery" />
            <div className="bg-grid"></div>
            <figcaption>
              <h1 className="font-bold text-3xl">Pittsburgh</h1>
              <p className="font-lg">Boggs Ave</p>
            </figcaption>
          </Link>
          <Link to="/" className="card card--4">
            <img src={DenverLong} alt="Masonry Gallery" />
            <div className="bg-grid"></div>
            <figcaption>
              <h1 className="font-bold text-3xl">Denver</h1>
              <p className="font-lg">Glendale</p>
            </figcaption>
          </Link>
          <Link to="/" className="card card--5">
            <img src={DenverSmall} alt="Masonry Gallery" />
            <div className="bg-grid"></div>

            <figcaption>
              <h1 className="font-bold text-3xl">California</h1>
              <p className="font-lg">San Francisco</p>
            </figcaption>
          </Link>
          <Link to="/" className="card card--6">
            <img src={PittsBurghSmall} alt="Masonry Gallery" />
            <div className="bg-grid"></div>

            <figcaption>
              <h1 className="font-bold text-3xl">Atlanta</h1>
              <p className="font-lg">Georgia</p>
            </figcaption>
          </Link>
        </div>
      </div>

      {/* Sign up Sign In  */}
      <div className="py-24 bg-white">
        <div className="bg-gray-50">
          <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex  lg:justify-between">
            <div className="users-sign-up-message">
              <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 mb-2">
                Sign up to Bedspacer <br />
              </h2>

              <span className="font-normal text-base">
                The Complete experience in finding your next place move with
                bedspacer
              </span>
            </div>

            <div className="w-full lg:w-1/2 mt-8 flex lg:flex-shrink-0 lg:mt-0">
              <div className="users-signup-grid">
                <div className="mt-4 ">
                  <Link
                    to="/register"
                    className="block mt-1 text-3xl leading-tight font-semibold primary-color-text hover:underline"
                  >
                    Tenants
                  </Link>
                  <p className="mt-2 text-gray-600">
                    Getting a new business off the ground is a lot of hard work.
                    Here are five ideas you can use to find your first
                    customers.
                  </p>
                </div>

                <div className="mt-4 ">
                  <Link
                    to="/register"
                    className="block mt-1 text-3xl leading-tight font-semibold primary-color-text hover:underline"
                  >
                    Landlords
                  </Link>
                  <p className="mt-2 text-gray-600">
                    Getting a new business off the ground is a lot of hard work.
                    Here are five ideas you can use to find your first
                    customers.
                  </p>
                </div>

                <div className="mt-4 ">
                  <Link
                    to="/register"
                    className="block mt-1 text-3xl leading-tight font-semibold primary-color-text hover:underline"
                  >
                    Agents
                  </Link>
                  <p className="mt-2 text-gray-600">
                    Getting a new business off the ground is a lot of hard work.
                    Here are five ideas you can use to find your first
                    customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
