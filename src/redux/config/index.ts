import configSlice from './configSlice';

export const { setFileAction, setIsInsideIframe } = configSlice.actions;
export default configSlice.reducer;
