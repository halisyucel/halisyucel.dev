import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Draft } from '@reduxjs/toolkit';

export interface HistoryTab {
	name: string;
	path: string;
	isOpen: boolean;
}

export interface HistoryState {
	lastTab: HistoryTab | null;
	tabs: HistoryTab[];
	previousRoute: string | null;
}

const initialState: HistoryState = {
	lastTab: null,
	tabs: [],
	previousRoute: null,
};

export const historySlice = createSlice({
	name: 'history',
	initialState,
	reducers: {
		appendTab: (
			state: Draft<HistoryState>,
			action: PayloadAction<{ name: string; path: string }>,
		) => {
			if (state.lastTab && state.lastTab.name === action.payload.name) return;
			state.lastTab = {
				name: action.payload.name,
				path: action.payload.path,
				isOpen: true,
			};
			const isAlreadyInTabs = state.tabs.find((tab) => tab.name === action.payload.name);
			if (isAlreadyInTabs) {
				state.tabs = state.tabs.map((tab) => {
					if (tab.name === action.payload.name) tab.isOpen = true;
					else tab.isOpen = false;
					return tab;
				});
				return;
			}
			state.tabs = state.tabs.map((tab) => {
				tab.isOpen = false;
				return tab;
			});
			state.tabs.push({
				name: action.payload.name,
				path: action.payload.path,
				isOpen: true,
			});
		},
		closeTab: (state: Draft<HistoryState>, action: PayloadAction<string>) => {
			state.tabs = state.tabs.filter((tab) => {
				return tab.name !== action.payload;
			});
		},
	},
});

export const { appendTab, closeTab } = historySlice.actions;

export default historySlice.reducer;
