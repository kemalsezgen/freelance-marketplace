import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL: string = "https://jsonplaceholder.typicode.com";
const avatarURL: string = "https://i.pravatar.cc/150?img=";

interface Freelancer {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  finishedJobs: number;
  photo: string;
}

interface FreelancerState {
  freelancers: Freelancer[];
  loading: boolean;
  error: string | null;
}

const initialState: FreelancerState = {
  freelancers: [],
  loading: false,
  error: null,
};

export const fetchFreelancers = createAsyncThunk('freelancers/fetchFreelancers', async () => {
  const response = await axios.get(baseURL + '/users');
  return response.data.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    city: user.address.city,
    finishedJobs: Math.floor(Math.random() * 50),
    photo: avatarURL + `${user.id}`,
  }));
});

const freelancersSlice = createSlice({
  name: 'freelancers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFreelancers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFreelancers.fulfilled, (state, action) => {
        state.loading = false;
        state.freelancers = action.payload;
      })
      .addCase(fetchFreelancers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch freelancers';
      });
  },
});

export default freelancersSlice.reducer;