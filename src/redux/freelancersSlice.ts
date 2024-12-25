
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USERS_URL, POSTS_URL, MOCK_IMAGE_URL } from '../constants';

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
  hiredFreelancers: Freelancer[];
  loading: boolean;
  error: string | null;
}

const initialState: FreelancerState = {
  freelancers: [],
  hiredFreelancers: [],
  loading: false,
  error: null,
};

export const fetchFreelancers = createAsyncThunk('freelancers/fetchFreelancers', async () => {
  const usersResponse = await axios.get(USERS_URL);
  const users = usersResponse.data;

  const postsResponse = await axios.get(POSTS_URL);
  const posts = postsResponse.data;

  const finishedJobsMap: Record<number, number> = posts.reduce((acc: any, post: any) => {
    acc[post.userId] = (acc[post.userId] || 0) + 1;
    return acc;
  }, {});

  return users.map((user: any) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    city: user.address.city,
    finishedJobs: finishedJobsMap[user.id] || 0,
    photo: MOCK_IMAGE_URL + `${user.id}`,
  }));
});

const freelancersSlice = createSlice({
  name: 'freelancers',
  initialState,
  reducers: {
    hireFreelancer: (state, action) => {
      const freelancer = state.freelancers.find((f) => f.id === action.payload);
      if (!freelancer) {
        console.error(`Freelancer with ID ${action.payload} not found.`);
        return;
      }

      const isAlreadyHired = state.hiredFreelancers.some((f) => f.id === freelancer.id);

      if (!isAlreadyHired) {
        state.hiredFreelancers.push(freelancer);
      }
    },
    fireFreelancer: (state, action) => {
      const freelancer = state.freelancers.find((f) => f.id === action.payload);
      if (!freelancer) {
        console.error(`Freelancer with ID ${action.payload} not found.`);
        return;
      }
      const isAlreadyHired = state.hiredFreelancers.some((f) => f.id === freelancer.id);
      if (isAlreadyHired) {
        state.hiredFreelancers = state.hiredFreelancers.filter((f) => f.id !== freelancer.id);
      }
    }
  },

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

export const { hireFreelancer, fireFreelancer } = freelancersSlice.actions;
export default freelancersSlice.reducer;