import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchFilteredCars, fetchCarById } from './carsOperations';

const initialState = {
  items: [],
  page: 1,
  limit: 12,
  totalCars: 0,
  totalPages: 0,
  isLoading: false,
  selectedCar: null,
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
        const { cars } = action.payload;
        state.items = Array.isArray(cars) ? cars : [];
        state.totalCars = action.payload.totalCars || 0;
        state.totalPages = action.payload.totalPages || 0;
        state.page = Number(action.payload.page) || 1;
        state.isLoading = false;
      })

      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.selectedCar = action.payload;
        state.isLoading = false;
      })

      .addCase(fetchFilteredCars.fulfilled, (state, action) => {
        const { cars } = action.payload;
        if (Array.isArray(cars)) {
          state.items = cars;
        } else {
          state.items = [];
          console.warn('Expected array, got:', action.payload);
        }
        state.page = 1;
        state.totalCars = action.payload.totalCars || 0;
        state.totalPages = action.payload.totalPages || 0;
        state.isLoading = false;
      });
  },
});

export const { resetCars } = carsSlice.actions;
export default carsSlice.reducer;
