import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.yearStarting || initialState;

export const selectYearStarting = createSelector(
  [selectDomain],
  yearStartingState => yearStartingState,
);
