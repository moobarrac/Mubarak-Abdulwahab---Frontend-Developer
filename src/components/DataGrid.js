import React from "react";
import StatusBadge from "../utils/StatusBadge";
import SpaceShip1 from "../styling/images/spaceship1.gif";
import Error from "../extra/Error";
import Loading from "../extra/Loading";

const DataGrid = ({ onSelectCapsule }) => {
  const isLoading = false;
  const error = null;
  const capsules = [
    {
      capsule_serial: "C101",
      capsule_id: "dragon1",
      status: "retired",
      original_launch: "2010-12-08T15:43:00.000Z",
      missions: [
        {
          name: "COTS 1",
          flight: 7,
        },
      ],
      landings: 0,
      type: "Dragon 1.0",
      details: "Reentered after three weeks in orbit",
      reuse_count: 0,
    },
    {
      capsule_serial: "C102",
      capsule_id: "dragon1",
      status: "retired",
      original_launch: "2012-05-22T03:44:00.000Z",
      missions: [
        {
          name: "COTS 2",
          flight: 8,
        },
      ],
      landings: 1,
      type: "Dragon 1.0",
      details: "First Dragon spacecraft to dock with the ISS",
      reuse_count: 0,
    },
    {
      capsule_serial: "C103",
      capsule_id: "dragon1",
      status: "active",
      original_launch: "2014-09-21T05:52:00.000Z",
      missions: [
        {
          name: "CRS-4",
          flight: 14,
        },
      ],
      landings: 1,
      type: "Dragon 1.1",
      details: "Carried science and research to the ISS",
      reuse_count: 1,
    },
    {
      capsule_serial: "C104",
      capsule_id: "dragon1",
      status: "unknown",
      original_launch: null,
      missions: [],
      landings: 0,
      type: "Dragon 1.1",
      details: "Scheduled for future missions",
      reuse_count: 0,
    },
  ];

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (capsules.length === 0) {
    return (
      <div
        className="text-center my-8 flex gap-2 flex-col justify-center items-center mx-24"
        data-testid="no-capsules-message"
      >
        <p className="text-white text-2xl">No capsules found.</p>
        <button className="rounded py-2 px-4 font-bold text-gray-900 bg-white">
          Refresh
        </button>
      </div>
    );
  }

  return (
    <>
      <section className="sm:mx-12 md:mx-16 my-24">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 ">
          {capsules.map((capsule) => (
            <div
              key={capsule.capsule_serial}
              className="relative bg-gray-800 text-white rounded-lg shadow-lg p-8 hover:bg-gray-700 transform hover:scale-105 transition duration-500 ease-in-out cursor-pointer"
              onClick={() => onSelectCapsule(capsule)}
            >
              <h3 className="text-2xl font-bold mb-2">
                {capsule.capsule_serial} - {capsule.type}
              </h3>
              <div className="mb-2">
                <StatusBadge status={capsule.status} />
              </div>
              <p className="text-sm text-gray-400 mb-1">
                Landings: <span className="text-white">{capsule.landings}</span>
              </p>
              <p className="text-sm text-gray-400 mb-1">
                Details:{" "}
                <span className="text-white">{capsule.details || "None"}</span>
              </p>
              <img
                src={SpaceShip1}
                alt=""
                className="absolute inset-0 w-16"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DataGrid;
