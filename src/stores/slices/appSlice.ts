import { createSlice } from '@reduxjs/toolkit';

type TState = {
  isDarkTheme: boolean;
};

const initialState: TState = {
  isDarkTheme: false,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.isDarkTheme = !state.isDarkTheme;
    },
    setDarkTheme: (state, action) => {
      console.log('setDarkTheme action payload:', action.payload);
      state.isDarkTheme = action.payload;
    },
  },
});

export const { toggleTheme, setDarkTheme } = appSlice.actions;
export default appSlice.reducer;
