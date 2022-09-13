import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

import uiSlice from "./ui-slice";

const store = configureStore({
    reducer: {uiSlice: uiSlice.reducer, cartSlice: cartSlice.reducer}
});

export default store;