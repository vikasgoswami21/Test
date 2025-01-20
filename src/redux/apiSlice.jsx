import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    apiData: [],
  },
  reducers: {
    setApiData(state, action) {
      state.apiData = action.payload;
    },
  },
});

export const { setApiData } = apiSlice.actions;
export default apiSlice.reducer;