import React from 'react';
import { Card, CardContent, Typography, Avatar, Button, Box, Link } from '@mui/material';
import { ROUTES } from '../constants';

interface Freelancer {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  finishedJobs: number;
  photo: string;
}

interface Props {
  freelancer: Freelancer;
}

const FreelancerCard: React.FC<Props> = ({ freelancer }) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Avatar src={freelancer.photo} alt={freelancer.name} sx={{ marginRight: 2, width: 56, height: 56 }} />
          <Link href={ROUTES.PORTFOLIO(freelancer.id)} underline="none" sx={{ color: 'inherit' }}>
            <Typography variant="h6" component="span">
              {freelancer.name}
            </Typography>
          </Link>
        </Box>

        <Typography>Email: {freelancer.email}</Typography>
        <Typography>Phone: {freelancer.phone}</Typography>
        <Typography>City: {freelancer.city}</Typography>
        <Typography>Finished Jobs: {freelancer.finishedJobs}</Typography>

        <Button
          variant="contained"
          color="primary"
          href={ROUTES.PORTFOLIO(freelancer.id)}
          sx={{ marginTop: 2 }}
        >
          Portfolio
        </Button>
      </CardContent>
    </Card>
  );
};

export default FreelancerCard;