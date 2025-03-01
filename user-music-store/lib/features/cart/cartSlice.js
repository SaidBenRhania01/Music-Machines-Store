import { createSlice } from "@reduxjs/toolkit";

const saveToLocalStorage = (state) => {
  localStorage.setItem("cart", JSON.stringify(state));
};

const loadFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const storedState = localStorage.getItem("cart");
    return storedState
      ? JSON.parse(storedState)
      : { itemList: [], totalQuantity: 0, showCart: false };
  }
  return { itemList: [], totalQuantity: 0, showCart: false };
};


const initialState = loadFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload; // Payload includes quantity
      const existingItem = state.itemList.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Update quantity and total price for existing item
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        // Add new item to the cart
        state.itemList.push({
          title: newItem.title,
          price: newItem.price,
          totalPrice: newItem.price * newItem.quantity,
          id: newItem.id,
          quantity: newItem.quantity,
          images: newItem.images,
        });
      }

      // Update the total quantity in the cart
      state.totalQuantity += newItem.quantity;

      // Save updated state to localStorage
      saveToLocalStorage(state);
    },
    removeFromCart(state, action) {
      const findItem = state.itemList.find((item) => item.id === action.payload.id);
      if (findItem) {
        if (findItem.quantity === 1) {
          state.itemList = state.itemList.filter((item) => item.id !== action.payload.id);
        } else {
          findItem.quantity--;
          findItem.totalPrice -= findItem.price;
        }
        state.totalQuantity--;

        saveToLocalStorage(state);
      }
    },
    incrementItem(state, action) {
      const existingItem = state.itemList.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
        state.totalQuantity++;

        // Save updated state to localStorage
        saveToLocalStorage(state);
      }
    },
    decrementItem(state, action) {
      const existingItem = state.itemList.find((item) => item.id === action.payload.id);
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.itemList = state.itemList.filter((item) => item.id !== action.payload.id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
        state.totalQuantity--;

        // Save updated state to localStorage
        saveToLocalStorage(state);
      }
    },
    setShowCart(state) {
      state.showCart = !state.showCart;

      // Save updated state to localStorage
      saveToLocalStorage(state);
    },
    resetCart(state) {
      state.itemList = [];
      state.totalQuantity = 0;
      state.showCart = false;

      saveToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, incrementItem, decrementItem, setShowCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
