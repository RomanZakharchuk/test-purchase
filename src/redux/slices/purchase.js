import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchases: []
};

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    addPurchase: (state, action) => {
      state.purchases.push(action.payload);
    },
    removePurchaseById: (state, action) => {
      const idToRemove = action.payload;
      state.purchases = state.purchases.filter(purchase => purchase.id !== idToRemove);
    },
    editPurchaseById: (state, action) => {
      const updatedPurchase = action.payload;
      state.purchases = state.purchases.reduce((acc, purchase) => {
        if (purchase.id === updatedPurchase.id) {
          return [...acc, updatedPurchase];
        } else {
          return [...acc, purchase];
        }
      }, []);
    },
    sortByCategory: (state, action) => {
      const categoryToSort = action.payload;
      state.purchases.sort((a, b) => {
        if (a.category === categoryToSort && b.category !== categoryToSort) {
          return -1;
        } else if (a.category !== categoryToSort && b.category === categoryToSort) {
          return 1;
        } else {
          return 0;
        }
      });
    },
    filterPurchasesByName: (state, action) => {
      const nameToFilter = action.payload;
      state.purchases = state.purchases.filter(purchase =>
        purchase.name.toLowerCase().includes(nameToFilter.toLowerCase())
      );
    }
  },
});

const { reducer: purchaseReducer, actions: { addPurchase, removePurchaseById, editPurchaseById, sortByCategory, filterPurchasesByName } } = purchaseSlice;
const purchaseActions = { addPurchase, removePurchaseById, editPurchaseById, sortByCategory, filterPurchasesByName };

export { purchaseActions, purchaseReducer }