import React from "react";
import SpaceShip1 from "../styling/images/spaceship1.gif";

const Banner = () => {
  return (
    <header className="relative h-screen flex flex-col items-center justify-center text-white">
      <div>
        <img src={SpaceShip1} alt="" className="absolute inset-0" />
        <img src={SpaceShip1} alt="" className="absolute top-1/3 left-2/3" />
        <img src={SpaceShip1} alt="" className="absolute top-3/4 left-1/3" />
        <img src={SpaceShip1} alt="" className="absolute bottom-0 right-0" />
        <img src={SpaceShip1} alt="" className="absolute top-1/4 left-1/3" />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      <div className="z-10 p-4 text-center">
        <section className="backdrop-filter backdrop-blur-sm bg-opacity-20 bg-gray-800 p-6 rounded-lg">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4">
            <span className="glitch" data-text="SPACE">
              SPACE
            </span>
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4">
            <span className="glitch" data-text="CAPSULES">
              CAPSULES
            </span>
          </h2>
          <p className="text-md sm:text-lg md:text-xl lg:text-xl">
            Exploring the possibilities of Space Travel by breaking free of the
            human limitations in transportation and co-habitation.
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-black rounded shadow hover:bg-gray-300 transition duration-300 ease-in-out">
            <a href="#explore_page">Explore</a>
          </button>
        </section>
      </div>
    </header>
  );
};

export default Banner;
