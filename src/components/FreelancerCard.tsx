import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CallIcon from '@mui/icons-material/Call';

import { Card, CardContent, Typography, Avatar, Button, Box, Link } from '@mui/material';
import { ROUTES, COLOURS } from '../constants';

const ICON_STYLES = {
  color: COLOURS.DARK_BLUE,
  marginRight: 1,
  fontSize: { xs: '16px', sm: '18px' }
}

const ICON_TEXT_STYLES = {
  color: COLOURS.DARK_BLUE,
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
  return (
    <Card>
      <CardContent>
        <Box display="flex" alignItems="center" marginBottom={2}>
          <Avatar
            src={freelancer.photo}
            alt={freelancer.name}
            sx={{ marginRight: 2, width: 56, height: 56 }}
          />
          <Link href={ROUTES.PORTFOLIO(freelancer.id)} underline="none" sx={{ color: 'inherit' }}>
            <Typography variant="h6" component="span" sx={{fontSize: { xs: '24px', sm: '20px' }}}>
              {freelancer.name}
            </Typography>
          </Link>
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

        <Button
          variant="contained"
          color="primary"
          href={ROUTES.PORTFOLIO(freelancer.id)}
        >
          Portfolio
        </Button>
      </CardContent>
    </Card>
  );
};

export default FreelancerCard;
