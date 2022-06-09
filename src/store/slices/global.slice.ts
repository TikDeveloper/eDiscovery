import { createSlice } from '@reduxjs/toolkit';
import { GlobalState } from './global.types';

const initialState: GlobalState = {
  isModalOpen: false
};

export const globalSlice = createSlice({
  name: 'GlobalSlice',
  initialState,
  reducers: {}
});
// export const {  } = globalSlice.actions;

export default globalSlice.reducer;
