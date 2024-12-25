import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CallIcon from '@mui/icons-material/Call';

import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import { ROUTES } from '../constants';
import { useNavigate } from 'react-router-dom';

const ICON_STYLES = {
  marginRight: 1,
  fontSize: { xs: '16px', sm: '18px' }
}

const ICON_TEXT_STYLES = {
  fontSize: { xs: '16px', sm: '16px' }
}

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
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(ROUTES.PORTFOLIO(freelancer.id));
  };
  
  return (
    <Card onClick={handleCardClick} sx={{
      cursor: 'pointer',
      '&:hover': {
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      },
    }}>
      <CardContent>
        <Box display="flex" alignItems="center" marginBottom={2} gap={2}>
          <Avatar
            src={freelancer.photo}
            alt={freelancer.name}
            sx={{ width: 56, height: 56 }}
          />
          <Typography variant="h6" component="span" sx={{ fontSize: { xs: '24px', sm: '20px' } }}>
            {freelancer.name}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" marginBottom={1}>
          <EmailIcon sx={ICON_STYLES} />
          <Typography sx={ICON_TEXT_STYLES}>{freelancer.email}</Typography>
        </Box>

        <Box display="flex" alignItems="center" marginBottom={1}>
          <CallIcon sx={ICON_STYLES} />
          <Typography sx={ICON_TEXT_STYLES}>{freelancer.phone}</Typography>
        </Box>

        <Box display="flex" alignItems="center" marginBottom={1}>
          <LocationOnIcon sx={ICON_STYLES} />
          <Typography sx={ICON_TEXT_STYLES}>{freelancer.city}</Typography>
        </Box>

        <Box display="flex" alignItems="center" marginBottom={2}>
          <CheckCircleOutlineIcon sx={ICON_STYLES} />
          <Typography sx={ICON_TEXT_STYLES}>
            {freelancer.finishedJobs > 1 ? `${freelancer.finishedJobs} jobs` : `${freelancer.finishedJobs} job`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FreelancerCard;
