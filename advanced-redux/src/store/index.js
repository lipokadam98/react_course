import {configureStore} from "@reduxjs/toolkit";
import shoppingCart from "./shopping-cart";

const store = configureStore({
    reducer: {
        shoppingCart: shoppingCart,
    },
});

export default store;