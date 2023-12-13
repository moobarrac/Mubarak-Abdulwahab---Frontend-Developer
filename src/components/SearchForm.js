import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormInput } from "../utils/FormInput";
import {
  fetchSpaceXData,
  updateFilter,
  firstPage,
} from "../features/spaceXSlice";

const SearchForm = () => {
  const dispatch = useDispatch();
  const { filters } = useSelector((state) => state.spaceX);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(firstPage());
    dispatch(fetchSpaceXData());
  };

  const handleFilterChange = (filterName) => (event) => {
    dispatch(updateFilter({ filterName, value: event.target.value }));
  };

  return (
    <div className="flex flex-col items-center my-8 mb-16 animate-opacity">
      <h2 className="text-xl md:text-2xl lg:text-3xl text-center text-white font-bold mb-4 uppercase">
        Filter Capsules
      </h2>
      <form className="w-[90%] max-w-xl space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-wrap items-center justify-center gap-3 md:space-x-3">
          {/* Status Select */}
          <select
            id="status"
            value={filters.status}
            onChange={handleFilterChange("status")}
            className="h-12 flex-grow p-2 border-2 border-transparent rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all duration-300 text-black"
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="retired">Retired</option>
            <option value="unknown">Unknown</option>
            <option value="destryed">Destryed</option>
          </select>

          {/* Original Launch Input */}
          <FormInput
            type="date"
            placeholder="Original Launch"
            value={filters.originalLaunch}
            onChange={handleFilterChange("original_launch")}
          />

          {/* Type Input */}
          <FormInput
            type="text"
            placeholder="Type e.g Dragon 1.0"
            value={filters.type}
            onChange={handleFilterChange("type")}
          />
        </div>

        {/* Search Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors duration-300"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
