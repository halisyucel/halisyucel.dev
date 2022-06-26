import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { Draft } from '@reduxjs/toolkit';

export interface SettingsState {
	theme: 'light' | 'dark';
	language: 'tr' | 'en';
}

const initialState: SettingsState = {
	theme: 'light',
	language: 'tr',
};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		toggleTheme: (state: Draft<SettingsState>) => {
			state.theme = state.theme === 'light' ? 'dark' : 'light';
		},
		toggleLanguage: (state: Draft<SettingsState>) => {
			state.language = state.language === 'tr' ? 'en' : 'tr';
		}
	},
});

export const { toggleTheme, toggleLanguage } = settingsSlice.actions;

export default settingsSlice.reducer;
