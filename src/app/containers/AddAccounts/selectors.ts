import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.addAccounts || initialState;

export const selectAddAccounts = createSelector(
  [selectDomain],
  addAccountsState => addAccountsState,
);
