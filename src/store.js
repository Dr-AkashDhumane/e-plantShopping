// Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';
// Import the cartReducer to manage cart state
import cartReducer from './CartSlice';

// Create the Redux store
const store = configureStore({
    reducer: {
        cart: cartReducer, // 'cart' slice managed by cartReducer
    },
});

// Export the store for use in the app
export default store;
