import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // cart items array
  },
  reducers: {
    // ADD ITEM TO CART
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;

      // Check if item already exists
      const existingItem = state.items.find(
        (item) => item.name === name
      );

      if (existingItem) {
        // Increase quantity if already exists
        existingItem.quantity += 1;
      } else {
        // Add new item with quantity 1
        state.items.push({
          name,
          image,
          cost,
          quantity: 1,
        });
      }
    },

    // REMOVE ITEM FROM CART
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
    },

    // UPDATE ITEM QUANTITY
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;

      const itemToUpdate = state.items.find(
        (item) => item.name === name
      );

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
