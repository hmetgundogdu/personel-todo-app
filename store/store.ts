import taskSlice from './slices/task/task.slice';

import { configureStore } from '@reduxjs/toolkit';

import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';

export const store = configureStore({
  reducer: {
    tasks: taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatchBase<AppDispatch>();

export const useAppSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected,
): TSelected => useSelectorBase<RootState, TSelected>(selector);
