import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../store/todos/todoSlice';

export default configureStore({
  reducer: {
      todo: todoReducer,
  },
});