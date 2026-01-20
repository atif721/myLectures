import { configureStore } from "@reduxjs/toolkit";
import bagSlice from "./bagSlice";
import fetchStatus from "./fetchStatusSlice";
import itemsSlice from "./itemsSlice";

const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
    fetchStatus: fetchStatus.reducer,
    bag: bagSlice.reducer,
  },
});

export default myntraStore;
