import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchFilteredCars, fetchCarById } from './carsOperations';

const initialState = {
  items: [],
  page: 1,
  limit: 12,
  isLoading: false,
  selectedCar: null,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    resetCars: (state) => {
      state.items = [];
      state.page = 1;
      state.isLoading = false;
      state.error = null;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        const newCars = action.payload.cars;
        if (state.page === 1) {
          state.items = newCars;
        } else {
          state.items = [...state.items, ...newCars];
        }
      })

      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
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
      })

      .addCase(fetchCarById.fulfilled, (state, action) => {
        console.log(
          'Reducer: fetchCarById fulfilled. Payload:',
          action.payload,
        );
        state.isLoading = false;
        state.selectedCar = action.payload;
      })

      .addCase(fetchCarById.rejected, (state, action) => {
        console.log('Reducer: fetchCarById rejected. Error:', action.payload);
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCars, setPage, setSelectedCar } = carsSlice.actions;
export default carsSlice.reducer;
