import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilter,
  fetchSpaceXData,
  firstPage,
  nextPage,
  previousPage,
} from "../features/spaceXSlice";
import StatusBadge from "../utils/StatusBadge";
import SpaceShip1 from "../styling/images/spaceship1.gif";
import Error from "../extra/Error";
import Loading from "../extra/Loading";

const DataGrid = ({ onSelectCapsule }) => {
  // Accessing state from the Redux store
  const { capsules, isLoading, error, pagination } = useSelector(
    (state) => state.spaceX
  );
  const dispatch = useDispatch();

  // Fetch data when component mounts or pagination changes
  useEffect(() => {
    dispatch(fetchSpaceXData());
  }, [dispatch, pagination.offset]);

  // Handler functions for pagination
  const handleNextPage = () => {
    dispatch(nextPage());
  };

  const handlePreviousPage = () => {
    dispatch(previousPage());
  };

  const loadSpaceXData = () => {
    dispatch(clearFilter());
    dispatch(firstPage());
    dispatch(fetchSpaceXData());
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <Error onButtonClick={() => dispatch(fetchSpaceXData())} error={error} />
    );
  }

  if (capsules.length === 0) {
    return (
      <div
        className="text-center my-8 flex gap-2 flex-col justify-center items-center mx-24"
        data-testid="no-capsules-message"
      >
        <p className="text-white text-2xl">No capsules found.</p>
        <button
          className="rounded py-2 px-4 font-bold text-gray-900 bg-white"
          onClick={() => loadSpaceXData()}
        >
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
        <div className="z-999 flex justify-center mt-8 mb-16">
          <button
            onClick={handlePreviousPage}
            className="px-4 py-2 mr-2 bg-gray-800 text-white rounded hover:bg-gray-600 disabled:bg-gray-300"
            disabled={pagination.offset === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-600 disabled:bg-gray-300"
            // disabled={pagination.offset + pagination.limit >= pagination.total}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default DataGrid;
