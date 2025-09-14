import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchFilteredCars } from './carsOperations';

const initialState = {
  items: [],
  page: 1,
  limit: 12,
  totalCars: 0,
  totalPages: 0,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    resetCars: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        const { cars, totalCars, totalPages, page } = action.payload;
        state.items = [...state.items, ...cars];
        state.totalCars = totalCars;
        state.totalPages = totalPages;
        state.page = Number(page) + 1;
        state.isLoading = false;
      })

      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchFilteredCars.fulfilled, (state, action) => {
        state.items = action.payload;
        state.page = 2;
        state.isLoading = false;
      });
  },
});

export const { resetCars } = carsSlice.actions;
export default carsSlice.reducer;
