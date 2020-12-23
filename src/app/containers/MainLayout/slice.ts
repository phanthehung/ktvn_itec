import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the MainLayout container
export const initialState: ContainerState = {};

const mainLayoutSlice = createSlice({
  name: 'mainLayout',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = mainLayoutSlice;
