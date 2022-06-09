import { createSlice } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';
// import { api } from 'utils/axios';
import { MatterState } from './matter.types';

const initialState: MatterState = {
  step: 1,
  loading: false
};

// // Login Request //
// export const loginRequest = createAsyncThunk(
//   'auth/login',
//   async (args: LoginRequestArgs, { rejectWithValue }) => {
//     try {
//       const response = await api.post('/login/',args);
//       const { access } = response.data;
//       api.defaults.headers.common['Authorization'] = `Bearer ${access}`;
//       toast.success('Successfully logged in...!');

//       return response.data;
//     } catch (err: any) {
//       toast.error(err.response.data.detail);
//       return rejectWithValue(err.response.data);
//     }
//   }
// );

const matterSlice = createSlice({
  name: 'MatterSlice',
  initialState,
  reducers: {
    nextStep(state) {
      state.step = state.step + 1;
    },
    prevStep(state) {
      state.step = state.step - 1;
    }
  },
  extraReducers: (builder) => {
    builder;

    // Login //
    //   .addCase(loginRequest.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(loginRequest.fulfilled, (state, { payload }) => {
    //     state.loading = false;
    //     state.isLoggedIn = true;
    //     state.token = payload.access;
    //     // console.error(payload, '>>>>>>>>>>> Login Payload');
    //   })
    //   .addCase(loginRequest.rejected, (state) => {
    //     state.loading = false;
    //     // console.error(payload, 'Error Responce Login');
    //   })
  }
});

export const { nextStep, prevStep } = matterSlice.actions;

export default matterSlice.reducer;
