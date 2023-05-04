import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
  name: 'status',
  initialState: {
    status: '' //sending sent
  },
  reducers: {
    onChecking: (state) => {
      state.status = 'sending';
    },
    onSuccess: (state) => {
      state.status = 'sent'
    },
    onClear: (state) => {
      state.status = '';
    }
  }
});

export const {
  onChecking,
  onSuccess,
  onClear
} = statusSlice.actions;