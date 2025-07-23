import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type TExampleState = {
  exampleData: string;
};

const initialState: TExampleState = {
  exampleData: 'Initial data',
};

const exampleSlice = createSlice({
  name: 'ExampleSlice',
  initialState,
  reducers: {
    setExample: (state, action: PayloadAction<string>) => {
      state.exampleData = action.payload;
    },
    clear: state => {
      state.exampleData = 'cleared';
    },
  },
});

export const { setExample, clear } = exampleSlice.actions;
export default exampleSlice.reducer;
