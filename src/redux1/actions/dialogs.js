// import { dialogsApi } from "utils/api";

// const actions = {
//   setDialogs: items => ({
//     type: "DIALOGS:SET_ITEMS",
//     payload: items
//   }),
//   fetchDialogs: () => dispatch => {
//     dialogsApi.getAll().then(({ data }) => {
//       dispatch(actions.setDialogs(data));
//     });
//   }
// };

// export default actions;

import { createSlice } from '@reduxjs/toolkit';
import { fetchDialogs } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState: {
    items: [],
  },

  extraReducers: {
    [fetchDialogs.pending]: handlePending,
    [fetchDialogs.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.dialods = action.payload;
    },
    [fetchDialogs.rejected]: handleRejected,
    
    [fetchDialogs.rejected]: handleRejected,
    
  },
});

export const dialogsReducer = dialogsSlice.reducer;