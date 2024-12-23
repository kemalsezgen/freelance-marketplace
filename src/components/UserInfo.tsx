import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';

interface UserInfoProps {
  name: string;
  email: string;
  phone: string;
  website: string;
  photo: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email, phone, website, photo }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 3,
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Sol Tarafta Profil Fotoğrafı ve İsim */}
      <Box display="flex" alignItems="center">
        <Avatar
          src={photo}
          alt={name}
          sx={{
            width: 120,
            height: 120,
            marginRight: 3,
            border: '2px solid #0FB56C',
          }}
        />
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#001C2F' }}>
          {name}
        </Typography>
      </Box>

      {/* Sağ Tarafta Diğer Bilgiler */}
      <Box textAlign="right">
        <Typography>Email: {email}</Typography>
        <Typography>Phone: {phone}</Typography>
        <Typography>
          Website:{' '}
          <a href={`https://${website}`} target="_blank" rel="noopener noreferrer">
            {website}
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default UserInfo;