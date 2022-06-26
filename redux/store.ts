import SettingsReducer from './features/settings';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		settings: SettingsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
