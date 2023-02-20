import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface ConfigState {
  fileAction: 'running' | 'debugging' | null;
  isInsideIframe: boolean;
}

const initialState: ConfigState = {
  fileAction: null,
  isInsideIframe: false,
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setFileAction: (
      state,
      action: PayloadAction<ConfigState['fileAction']>,
    ) => {
      state.fileAction = action.payload;
    },
    setIsInsideIframe: (
      state,
      action: PayloadAction<ConfigState['isInsideIframe']>,
    ) => {
      state.isInsideIframe = action.payload;
    },
  },
});
export default configSlice;
