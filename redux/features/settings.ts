import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { Draft } from '@reduxjs/toolkit';

export interface SettingsState {
	theme: 'light' | 'dark';
}

const initialState: SettingsState = {
	theme: 'light',
};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		toggleTheme: (state: Draft<SettingsState>) => {
			state.theme = state.theme === 'light' ? 'dark' : 'light';
		},
	},
});

export const { toggleTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
