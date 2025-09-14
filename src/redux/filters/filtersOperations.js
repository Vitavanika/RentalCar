import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_BASE_URL } from '../../config/apiConfig';

export const fetchBrands = createAsyncThunk(
  'filters/fetchBrands',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/brands`);
      if (!response.ok) throw new Error('Failed to fetch brands');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchPrices = createAsyncThunk(
  'filters/fetchPrices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/prices`);
      if (!response.ok) throw new Error('Failed to fetch prices');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
