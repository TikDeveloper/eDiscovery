import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { RootState } from 'store';
import { api } from 'utils/axios';
// import { toast } from 'react-toastify';
// import { api } from 'utils/axios';
import { AddDocumentsRequestArgs, CreateMatterRequestArgs, MatterState } from './matter.types';

const initialState: MatterState = {
  step: 0,
  loading: false,
  matterName: '',
  matterId: undefined,
  files: []
};

// // Create Matter //
export const createMatter = createAsyncThunk(
  'matter/create',
  async (args: CreateMatterRequestArgs, { rejectWithValue, getState }) => {
    const { auth } = getState() as RootState;
    try {
      api.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
      const response = await api.post('/matter/create/', { name: args.matter_name });
      toast.success('Matter added sucessfully...!');
      return response.data;
    } catch (err: any) {
      toast.error(err.response.data.detail);
      return rejectWithValue(err.response.data);
    }
  }
);

// // Add Documents //
export const addDocuments = createAsyncThunk(
  'documents/add',
  async (args: AddDocumentsRequestArgs, { rejectWithValue, getState }) => {
    const { auth, matter } = getState() as RootState;
    console.log(args);
    try {
      api.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
      const formData = new FormData();

      formData.append('matter', String(matter.matterId));

      for (let i = 0; i < args.files.length; i++) {
        formData.append('files', args.files[i]);
      }
      const response = await api.post('/document/create/', formData);
      toast.success('Documents added sucessfully...!');
      return response.data;
    } catch (err: any) {
      toast.error(err.response.data.detail);
      return rejectWithValue(err.response.data);
    }
  }
);

const matterSlice = createSlice({
  name: 'MatterSlice',
  initialState,
  reducers: {
    nextStep(state) {
      if (state.step !== 1) {
        state.step = state.step + 1;
      }
    },
    prevStep(state) {
      state.step = state.step - 1;
    },
    fillMatterName(state, { payload }: PayloadAction<{ matterName: string }>) {
      state.matterName = payload.matterName;
    },
    fillDocuments(state, { payload }: PayloadAction<{ files: File[] }>) {
      state.files = payload.files;
    }
  },
  extraReducers: (builder) => {
    builder

      // Create Matter //
      .addCase(createMatter.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMatter.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.matterId = payload.id;
        // console.log(payload, '>>>>>>>>>>> Matter Payload');
      })
      .addCase(createMatter.rejected, (state) => {
        state.loading = false;
        // console.error(payload, 'Error Responce Matter');
      })

      // Add Documents //
      .addCase(addDocuments.pending, (state) => {
        state.loading = true;
      })
      .addCase(addDocuments.fulfilled, (state, { payload }) => {
        state.loading = false;
        console.log(payload, '>>>>>>>>>>> Documents Payload');
      })
      .addCase(addDocuments.rejected, (state) => {
        state.loading = false;
        // console.error(payload, 'Error Responce Documents');
      });
  }
});

export const { nextStep, prevStep, fillMatterName, fillDocuments } = matterSlice.actions;

export default matterSlice.reducer;
