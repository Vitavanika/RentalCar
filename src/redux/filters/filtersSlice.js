import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands, fetchPrices } from './filtersOperations';

const initialState = {
  brand: '',
  price: '',
  mileageFrom: '',
  mileageTo: '',
  brands: [],
  prices: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setBrand: (state, action) => {
      state.brand = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    setMileageFrom: (state, action) => {
      state.mileageFrom = action.payload;
    },
    setMileageTo: (state, action) => {
      state.mileageTo = action.payload;
    },
    setFilters: (state, action) => {
      state.brand = action.payload.brand;
      state.price = action.payload.price;
      state.mileageFrom = action.payload.mileageFrom;
      state.mileageTo = action.payload.mileageTo;
    },
    resetFilters: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
    });
    builder.addCase(fetchPrices.fulfilled, (state, action) => {
      state.prices = action.payload;
    });
  },
});

export const {
  setBrand,
  setPrice,
  setMileageFrom,
  setMileageTo,
  setFilters,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
