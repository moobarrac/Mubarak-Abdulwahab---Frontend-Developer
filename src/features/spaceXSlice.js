import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  capsules: [],
  filters: {
    status: "",
    original_launch: "",
    type: "",
  },
  pagination: {
    limit: 6,
    offset: 0,
    total: 0,
  },
  loading: false,
  error: null,
};

const spaceXSlice = createSlice({
  name: "spaceX",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      const { filterName, value } = action.payload;
      state.filters[filterName] = value;
    },
    nextPage: (state) => {
      state.pagination.offset += state.pagination.limit;
    },
    previousPage: (state) => {
      if (state.pagination.offset > 0) {
        state.pagination.offset -= state.pagination.limit;
      }
    },
    firstPage: (state) => {
      state.pagination.offset = 0;
    },
  },
});

export const { updateFilter, previousPage, nextPage, firstPage } =
  spaceXSlice.actions;
export default spaceXSlice.reducer;
