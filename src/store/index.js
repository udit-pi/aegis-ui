import { configureStore } from '@reduxjs/toolkit';

// Dummy mode reducer
const modeReducer = (state = 'light', action) => {
  switch (action.type) {
    case 'SET_MODE':
      return action.payload;
    default:
      return state;
  }
};

// Configure the store
export const store = configureStore({
  reducer: {
    mode: modeReducer,  // Add reducers here
  }
});
