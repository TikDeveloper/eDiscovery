import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { api } from 'utils/axios';
import { AuthStateType, LoginRequestArgs, RegisterRequestArgs } from './auth.types';

const initialState: AuthStateType = {
  isLoggedIn: false,
  token: undefined,
  data: null,
  loading: false,
  isStepsCompleted: false
};

// Login Request //
export const loginRequest = createAsyncThunk(
  'auth/login',
  async (args: LoginRequestArgs, { rejectWithValue }) => {
    try {
      const response = await api.post('/login/', args);
      const { access } = response.data;
      api.defaults.headers.common['Authorization'] = `Bearer ${access}`;
      toast.success('Successfully logged in...!');

      return response.data;
    } catch (err: any) {
      toast.error(err.response.data.detail);
      return rejectWithValue(err.response.data);
    }
  }
);

// Registration Request //
export const registerRequest = createAsyncThunk(
  'auth/register',
  async (args: RegisterRequestArgs, { rejectWithValue }) => {
    try {
      const response = await api.post('/register/', {
        email: args.email,
        first_name: args.firstName,
        last_name: args.lastName,
        country: args.country,
        phone: args.phone,
        company_name: args.company,
        password: args.password
      });
      const { accses } = response.data;
      api.defaults.headers.common['Authorization'] = `Bearer ${accses}`;
      toast.success('Successfully done Registration..!');
      return response.data;
    } catch (err: any) {
      toast.error(err.response.data.detail);
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    logout(state) {
      state.isLoggedIn = false;
      state.token = undefined;
      state.isStepsCompleted = false;
    }
  },
  extraReducers: (builder) => {
    builder

      // Login //
      .addCase(loginRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginRequest.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.token = payload.access;
        // console.error(payload, '>>>>>>>>>>> Login Payload');
      })
      .addCase(loginRequest.rejected, (state) => {
        state.loading = false;
        // console.error(payload, 'Error Responce Login');
      })

      // Registration //
      .addCase(registerRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerRequest.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.token = payload.access;

        // console.error(payload, '>>>>>>>>>>> Register Payload');
      })
      .addCase(registerRequest.rejected, (state) => {
        state.loading = false;
        // console.error(payload, 'Error Responce Registration');
      });
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
