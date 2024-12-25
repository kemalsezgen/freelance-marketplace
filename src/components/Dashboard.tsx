import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { fetchFreelancers } from '../redux/freelancersSlice';
import FreelancerCard from './FreelancerCard';
import {
  Grid,
  CircularProgress,
  Box,
  Typography,
  TextField,
} from '@mui/material';

const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { freelancers, loading, error } = useSelector((state: RootState) => state.freelancers);

  const [nameSearch, setNameSearch] = useState('');
  const [jobCountMin, setJobCountMin] = useState('');
  const [jobCountMax, setJobCountMax] = useState('');
  const [citySearch, setCitySearch] = useState('');

  useEffect(() => {
    console.log("freelancers", freelancers);
  }, [freelancers]);

  useEffect(() => {
    dispatch(fetchFreelancers());
  }, [dispatch]);

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error}</p>;

  const filteredFreelancers = freelancers.filter((freelancer) => {
    const matchesName = freelancer.name.toLowerCase().includes(nameSearch.toLowerCase());
    const matchesJobCount =
      (jobCountMin === '' || freelancer.finishedJobs >= parseInt(jobCountMin)) &&
      (jobCountMax === '' || freelancer.finishedJobs <= parseInt(jobCountMax));
    const matchesCity = freelancer.city.toLowerCase().includes(citySearch.toLowerCase());

    return matchesName && matchesJobCount && matchesCity;
  });

  return (
    <Box padding={3}>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ textAlign: 'center', fontWeight: 'bold' }}
      >
        Odine Freelance Marketplace
      </Typography>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={{ xs: "column", sm: "column", md: "row"}}
        sx={{
          width: '100%',
          maxWidth: '800px',
          margin: '20px auto',
          gap: 2,
        }}
      >
        <TextField
          label="Name"
          placeholder="Search by name"
          variant="outlined"
          value={nameSearch}
          onChange={(e) => setNameSearch(e.target.value)}
          fullWidth
        />
        <TextField
          label="Min Jobs"
          placeholder="Min"
          variant="outlined"
          type="number"
          value={jobCountMin}
          onChange={(e) => setJobCountMin(e.target.value)}
          fullWidth
        />
        <TextField
          label="Max Jobs"
          placeholder="Max"
          variant="outlined"
          type="number"
          value={jobCountMax}
          onChange={(e) => setJobCountMax(e.target.value)}
          fullWidth
        />
        <TextField
          label="City"
          placeholder="Search by city"
          variant="outlined"
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
          fullWidth
        />
      </Box>

      <Grid container spacing={3}>
        {filteredFreelancers.map((freelancer) => (
          <Grid item xs={12} sm={6} md={4} key={freelancer.id}>
            <FreelancerCard freelancer={freelancer} />
          </Grid>
        ))}
      </Grid>

      {filteredFreelancers.length === 0 && (
        <Typography variant="h6" sx={{ marginTop: 3, color: 'gray' }}>
          No freelancers found matching your criteria.
        </Typography>
      )}
    </Box>
  );
};

export default Dashboard;