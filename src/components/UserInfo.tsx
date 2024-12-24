import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import PublicIcon from '@mui/icons-material/Public';

import { COLOURS } from '../constants';

interface UserInfoProps {
  name: string;
  email: string;
  phone: string;
  website: string;
  photo: string;
}

const ICON_STYLES = {
  color: COLOURS.DARK_BLUE,
  marginRight: 1,
  fontSize: { xs: '16px', sm: '18px' }
}

const ICON_TEXT_STYLES = {
  color: COLOURS.DARK_BLUE,
  fontSize: { xs: '16px', sm: '18px' }
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, phone, website, photo }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 3,
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        sx={{
          marginBottom: { xs: 2, sm: 3, md: 0 },
          width: { xs: '100%', sm: 'auto' },
          justifyContent: { xs: 'center', sm: 'flex-start' },
          gap: { xs: 2, sm: 5 },
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
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            color: COLOURS.DARK_BLUE,
            textAlign: { xs: 'center', sm: 'left' },
            marginTop: { xs: 2, sm: 0 },
            fontSize:  { xs: 32, sm: 32 },
          }}
        >
          {name}
        </Typography>
      </Box>

      <Box
        textAlign={{ xs: 'center', sm: 'right' }}
        sx={{
          width: { xs: '100%', sm: 'auto' },
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'column' },
          gap: { xs: 1, sm: 2, md: 0 }
        }}
      >
        <Box display="flex"
          alignItems="center"
          justifyContent={{ xs: 'center', sm: 'center' }}
          marginBottom={1}
        >
          <EmailIcon sx={ICON_STYLES} />
          <Typography sx={ICON_TEXT_STYLES}>{email}</Typography>
        </Box>

        <Box display="flex" alignItems="center" justifyContent={{ xs: 'center', sm: 'center' }} marginBottom={1}>
          <CallIcon sx={ICON_STYLES} />
          <Typography sx={ICON_TEXT_STYLES}>{phone}</Typography>
        </Box>

        <Box display="flex" alignItems="center" justifyContent={{ xs: 'center', sm: 'center' }}>
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
    </Box>
  );
};

export default UserInfo;
