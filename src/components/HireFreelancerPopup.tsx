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
import { useDispatch, useSelector } from 'react-redux';
import { hireFreelancer } from '../redux/freelancersSlice';
import { RootState } from '../redux/store';

interface HireFreelancerPopupProps {
  open: boolean;
  onClose: () => void;
  freelancerId: number;
}

const HireFreelancerPopup: React.FC<HireFreelancerPopupProps> = ({ open, onClose, freelancerId }) => {
  const [form, setForm] = useState({ name: '', subject: '', message: '' });
  const mode = useSelector((state: RootState) => state.theme.mode);

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
              fontWeight: 'bold',
              fontSize: '1rem',
              marginBottom: 1,
            }}
          >
            Fill out the form below to hire:
          </Typography>
          <TextField
            label="Your Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ justifyContent: 'center', gap: 2, padding: 3 }}>
        <Button
          onClick={onClose}
          variant="contained"
          sx={{
            color: COLOURS.WHITE,
            textTransform: 'none',
            backgroundColor: COLOURS.RED
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            color: 'white',
            textTransform: 'none',
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default HireFreelancerPopup;
