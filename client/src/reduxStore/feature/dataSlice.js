import { createSlice } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';

const initialState = {
  data: [{id:1,Name: 'Vijay', Description: 'College fee', Category: 'Education', DateOFExpense: '2/Aug/2018', ExpenseAmount: '600000'},{id:2,Name: 'Ajhay', Description: 'College fee', Category: 'Book', DateOFExpense: '4/Aug/2018', ExpenseAmount: '1000'},{id:3,Name: 'Raj', Description: 'Medicine', Category: 'Health', DateOFExpense: '2/Dec/2019', ExpenseAmount: '900000'},{id:4,Name: 'Pradeep', Description: 'Outing', Category: 'Travel', DateOFExpense: '28/Sep/2015', ExpenseAmount: '61500'},{id:5,Name: 'Samantha', Description: 'Air Cooler', Category: 'Electronics', DateOFExpense: '14/Apr/2020', ExpenseAmount: '50000'}],
};



const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addData(state, action) {
      state.data.push(action.payload);
    },
    removeData(state,action){
      state.data = state.data.filter(item => item.id !== action.payload);
    },
    updateItem(state, action) {
      state.data = state.data.map(item =>
        item.id === action.payload.id ? { ...item, ...action.payload 
           } : item
      );
    }
    
  },
});

export const { addData,removeData,updateItem } = dataSlice.actions;
export default dataSlice.reducer;