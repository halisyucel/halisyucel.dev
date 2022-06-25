import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Draft } from '@reduxjs/toolkit';

export interface SettingsState {
	theme: 'light' | 'dark';
}

const initialState: SettingsState = {
	theme: 'light',
}

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setTheme: (state: Draft<SettingsState>, action: PayloadAction<'light' | 'dark'>) => {
			state.theme = action.payload;
		}
	},
})

export const { setTheme } = settingsSlice.actions;

export default settingsSlice.reducer;