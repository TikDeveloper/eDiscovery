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
      const { accses_token } = response.data;
      api.defaults.headers.common['Authorization'] = `Bearer ${accses_token}`;
      toast.success('Successfully logged in...!');

      return response.data;
    } catch (err: any) {
      toast.error(err.response.data.error);
      return rejectWithValue(err.response.data);
    }
  }
);

// Registration Request //
export const registerRequest = createAsyncThunk(
  'auth/register',
  async (args: RegisterRequestArgs, { rejectWithValue, dispatch }) => {
    dispatch(fakeLogin());
    try {
      const response = await api.post('/register/', args);
      const { accses_token } = response.data;
      api.defaults.headers.common['Authorization'] = `Bearer ${accses_token}`;
      toast.success('Successfully done Registration..!');
      return response.data;
    } catch (err: any) {
      toast.error(err.response.data.error);
      return rejectWithValue(err.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'AuthSlice',
  initialState,
  reducers: {
    fakeLogin(state) {
      state.isLoggedIn = true;
    }
    // logout(state) {
    //   state.isLoggedIn = false;
    //   state.token = null;
    //   state.data = null;
    //   state.loading = false;
    //   api.defaults.headers.Authorization = null;
    // }
  },
  extraReducers: (builder) => {
    builder

      // Login //
      .addCase(loginRequest.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginRequest.fulfilled, (state, { payload }) => {
        state.loading = false;
        // state.isLoggedIn = true;
        // state.token = payload.accses_token;
        // state.data = {
        //   firstName: payload.first_name,
        //   lastName: payload.last_name,
        //   email: payload.email
        // };
        console.error(payload, '>>>>>>>>>>> Login Payload');
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
        // state.isLoggedIn = true;
        // state.token = payload.accses_token;
        // state.data = {
        //   firstName: payload.first_name,
        //   lastName: payload.last_name,
        //   email: payload.email
        // };
        console.error(payload, '>>>>>>>>>>> Register Payload');
      })
      .addCase(registerRequest.rejected, (state) => {
        state.loading = false;
        // console.error(payload, 'Error Responce Registration');
      });
  }
});

export const { fakeLogin } = authSlice.actions;

export default authSlice.reducer;
