import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_BASE_URL } from '../../config/apiConfig';

axios.defaults.baseURL = API_BASE_URL;

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async ({ page, filters }, thunkAPI) => {
    try {
      const { brand, price, mileageFrom, mileageTo } = filters;
      const params = {
        page,
        limit: 12,
        brand: brand || undefined,
        rentalPrice: price || undefined,
        mileage: {
          from: mileageFrom || undefined,
          to: mileageTo || undefined,
        },
      };

      const response = await axios.get('/cars', { params });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const fetchCarById = createAsyncThunk(
  'cars/fetchCarById',
  async (carId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/cars/${carId}`);
      return response.data;
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
      const response = await fetch(`${API_BASE_URL}/cars?${query.toString()}`);
      if (!response.ok) throw new Error('Failed to fetch filtered cars');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
