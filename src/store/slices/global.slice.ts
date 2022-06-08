import { createSlice } from '@reduxjs/toolkit';

export type GlobalState = {
  isModalOpen: boolean;
};

const initialState: GlobalState = {
  isModalOpen: false
};

export const globalSlice = createSlice({
  name: 'GlobalSlice',
  initialState,
  reducers: {}
});
// export const {} = globalSlice.actions;

export default globalSlice.reducer;
