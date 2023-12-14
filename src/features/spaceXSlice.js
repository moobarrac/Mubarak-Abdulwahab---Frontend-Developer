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
    clearFilter: (state) => {
      state.filters = { status: "", original_launch: "", type: "" };
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpaceXData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSpaceXData.fulfilled, (state, action) => {
        state.loading = false;
        state.capsules = action.payload;
      })
      .addCase(fetchSpaceXData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const fetchSpaceXData = createAsyncThunk(
  "spaceX/fetchData",
  async (_, { getState, rejectWithValue }) => {
    const { filters, pagination } = getState().spaceX;
    const query = new URLSearchParams(filters).toString();
    const paginationQuery = `limit=${pagination.limit}&offset=${pagination.offset}`;

    try {
      const response = await fetch(
        `http://localhost:8000/capsules?${query}&${paginationQuery}`,
        {
          headers: {
            Authorization: `Bearer my_authorised_testing_token`,
          },
        }
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const { updateFilter, previousPage, nextPage, firstPage, clearFilter } =
  spaceXSlice.actions;
export default spaceXSlice.reducer;
