import React, { useState } from 'react';
import { Box, Typography, Avatar, Button } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PublicIcon from '@mui/icons-material/Public';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { COLOURS } from '../constants';
import HireFreelancerPopup from './HireFreelancerPopup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fireFreelancer, toggleSaveFreelancer } from '../redux/freelancersSlice';

interface UserInfoProps {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  photo: string;
}

const ICON_STYLES = {
  marginRight: 1,
  fontSize: { xs: '16px', sm: '18px' },
};

const ICON_TEXT_STYLES = {
  fontSize: { xs: '16px', sm: '18px' },
};

const UserInfo: React.FC<UserInfoProps> = ({ id, name, email, phone, website, photo }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const dispatch = useDispatch();

  const isHired = useSelector((state: RootState) =>
    state.freelancers.hiredFreelancers.some((freelancer) => freelancer.id === id)
  );

  const isSaved = useSelector((state: RootState) =>
    state.freelancers.savedFreelancers.some((freelancer) => freelancer.id === id)
  );

  const handleOpenPopup = () => {
    if (!isHired) {
      setPopupOpen(true);
    }
    dispatch(fireFreelancer(id));
  }

  const handleClosePopup = () => setPopupOpen(false);

  const handleSaveToggle = () => {
    dispatch(toggleSaveFreelancer(id));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
        justifyContent: 'space-between',
        padding: 3,
        borderRadius: 2,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 4 },
          width: { xs: '100%', sm: 'auto' },
          marginBottom: { xs: 2, md: 0 },
        }}
      >
        <Avatar
          src={photo}
          alt={name}
          sx={{
            width: { xs: 100, sm: 120 },
            height: { xs: 100, sm: 120 },
            border: `2px solid ${COLOURS.GREEN}`,
          }}
        />
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{ xs: 'center', sm: 'flex-start' }}
          gap={1}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              textAlign: { xs: 'center', sm: 'left' },
              fontSize: { xs: 24, sm: 32 },
            }}
          >
            {name}
          </Typography>
          <Box display="flex" gap={2}>
            <Button
              variant="outlined"
              onClick={handleOpenPopup}
              sx={{
                borderColor: isHired ? 'gray' : COLOURS.GREEN,
                color: isHired ? 'gray' : COLOURS.GREEN,
                textTransform: 'none',
                fontSize: { xs: '14px', sm: '16px' },
                '&:hover': {
                  borderColor: COLOURS.GREEN,
                  backgroundColor: 'rgba(15, 181, 108, 0.1)',
                },
              }}
            >
              {isHired ? 'Hired' : 'Hire Freelancer'}
            </Button>
            <Button onClick={handleSaveToggle}
              variant="outlined"
              sx={{
                '&:hover': {
                  borderColor: COLOURS.GREEN,
                  backgroundColor: 'rgba(15, 181, 108, 0.1)',
                },
                borderColor: "gray"
              }} >
              {isSaved ? (
                <TurnedInIcon />
              ) : (
                <TurnedInNotIcon />
              )}
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        textAlign={{ xs: 'center', sm: 'right' }}
        sx={{
          width: { xs: '100%', sm: 'auto' },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: 1, sm: 2 },
        }}
      >
        <Box display="flex" alignItems="center" justifyContent={{ xs: 'center', sm: 'flex-end' }}>
          <EmailIcon sx={ICON_STYLES} />
          <Typography sx={ICON_TEXT_STYLES}>{email}</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent={{ xs: 'center', sm: 'flex-end' }}>
          <CallIcon sx={ICON_STYLES} />
          <Typography sx={ICON_TEXT_STYLES}>{phone}</Typography>
        </Box>
        <Box display="flex" alignItems="center" justifyContent={{ xs: 'center', sm: 'flex-end' }}>
          <PublicIcon sx={ICON_STYLES} />
          <Typography sx={ICON_TEXT_STYLES}>
            <Box
              component="a"
              href={`https://${website}`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textDecoration: 'underline',
                color: 'inherit',
              }}
            >
              {website}
            </Box>
          </Typography>
        </Box>
      </Box>
      <HireFreelancerPopup open={popupOpen} onClose={handleClosePopup} freelancerId={id} />
    </Box>
  );
};

export default UserInfo;
