import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';
import { COLOURS } from '../constants';
import { useDispatch } from 'react-redux';
import { hireFreelancer } from '../redux/freelancersSlice';

interface HireFreelancerPopupProps {
  open: boolean;
  onClose: () => void;
  freelancerId: number;
}

const HireFreelancerPopup: React.FC<HireFreelancerPopupProps> = ({ open, onClose, freelancerId }) => {
  const [form, setForm] = useState({ name: '', subject: '', message: '' });
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    dispatch(hireFreelancer(freelancerId));
    setForm({ name: '', subject: '', message: '' });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle
        sx={{
          color: COLOURS.DARK_BLUE,
          fontWeight: 'bold',
          fontSize: '1.5rem',
          textAlign: 'center',
        }}
      >
        Hire Freelancer
      </DialogTitle>
      <DialogContent
        sx={{
          padding: 3,
        }}
      >
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography
            sx={{
              color: COLOURS.DARK_BLUE,
              fontWeight: 'bold',
              fontSize: '1rem',
              marginBottom: 1,
            }}
          >
            Please fill out the form below:
          </Typography>
          <TextField
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: COLOURS.DARK_BLUE,
                },
                '&:hover fieldset': {
                  borderColor: COLOURS.GREEN,
                },
                '&.Mui-focused fieldset': {
                  borderColor: COLOURS.GREEN,
                },
              },
            }}
          />
          <TextField
            label="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: COLOURS.DARK_BLUE,
                },
                '&:hover fieldset': {
                  borderColor: COLOURS.GREEN,
                },
                '&.Mui-focused fieldset': {
                  borderColor: COLOURS.GREEN,
                },
              },
            }}
          />
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: COLOURS.DARK_BLUE,
                },
                '&:hover fieldset': {
                  borderColor: COLOURS.GREEN,
                },
                '&.Mui-focused fieldset': {
                  borderColor: COLOURS.GREEN,
                },
              },
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', gap: 2, padding: 3 }}>
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderColor: COLOURS.DARK_BLUE,
            color: COLOURS.DARK_BLUE,
            textTransform: 'none',
            '&:hover': {
              borderColor: COLOURS.GREEN,
              backgroundColor: 'rgba(15, 181, 108, 0.1)',
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            backgroundColor: COLOURS.GREEN,
            color: 'white',
            textTransform: 'none',
            '&:hover': {
              backgroundColor: 'rgba(15, 181, 108, 0.9)',
            },
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HireFreelancerPopup;
