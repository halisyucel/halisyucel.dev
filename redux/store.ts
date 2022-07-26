import HistoryReducer from './features/history';
import SettingsReducer from './features/settings';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		settings: SettingsReducer,
		history: HistoryReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
