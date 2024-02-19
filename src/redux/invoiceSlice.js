import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  drawerOpen: false,
};

export const InvoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    toogleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});
export const { toogleDrawer } = InvoiceSlice.actions;
export default InvoiceSlice.reducer;
