import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../config/apiConfig';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { page, limit } = getState().cars;
      const queryParams = `?page=${page}&limit=${limit}`;
      const fullURL = `${API_BASE_URL}${queryParams}`;

      const response = await fetch(fullURL);
      if (!response.ok) throw new Error('Failed to fetch cars');

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchFilteredCars = createAsyncThunk(
  'cars/fetchFilteredCars',
  async (filters, { rejectWithValue }) => {
    try {
      const query = new URLSearchParams();
      if (filters.brand) query.append('make', filters.brand);
      if (filters.price) query.append('rentalPrice', filters.price);
      if (filters.mileageFrom) query.append('mileageFrom', filters.mileageFrom);
      if (filters.mileageTo) query.append('mileageTo', filters.mileageTo);

      const response = await fetch(
        `https://car-rental-api.goit.global/cars?${query.toString()}`,
      );
      if (!response.ok) throw new Error('Failed to fetch filtered cars');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
