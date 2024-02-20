import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

type SettingStateType = {
  showTotalPrice: boolean;
}

const initialState = {
  showTotalPrice: true
}


const slice = createSlice({
  name: 'settings',
  initialState: initialState,
  reducers: {
    toggleShowTotalPrice: (state) => {
      return {
        ...state,
        showTotalPrice: !state.showTotalPrice
      }
    }
  }
})


export const { toggleShowTotalPrice } = slice.actions;

export default slice.reducer;