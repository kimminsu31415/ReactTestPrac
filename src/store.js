import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './example/counterSlice'; // example

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
