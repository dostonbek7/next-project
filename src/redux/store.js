import { configureStore } from "@reduxjs/toolkit";
import InvoiceSlice from '@/redux/invoiceSlice'


export const store = configureStore({
  reducer:{
    invoice:InvoiceSlice,
  }
})