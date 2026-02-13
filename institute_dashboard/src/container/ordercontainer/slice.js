import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    data: [],
    singleOrder: null,
    loading: false,
    error: null
  },
  reducers: {

    // ================= CREATE ORDER =================
    createOrder: (state) => {
      state.loading = true;
      state.error = null;
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
      state.error = null;
    },
    createOrderFail: (state, action) => {
      state.loading = false;
      state.error = {
        message: action.payload?.message || "Create order failed",
        status: action.payload?.status || 500
      };
    },

    // ================= GET INSTITUTION ORDERS =================
    getInstitutionOrders: (state) => {
      state.loading = true;
      state.error = null;
    },
   getInstitutionOrdersSuccess: (state, action) => {
  state.loading = false;
  state.data = action.payload; 
  state.error = null;
},


    getInstitutionOrdersFail: (state, action) => {
      state.loading = false;
      state.error = {
        message: action.payload?.message || "Failed to fetch orders",
        status: action.payload?.status || 500
      };
    }

  }
});

export const {
  createOrder,
  createOrderSuccess,
  createOrderFail,
  getInstitutionOrders,
  getInstitutionOrdersSuccess,
  getInstitutionOrdersFail
} = orderSlice.actions;

export default orderSlice.reducer;
