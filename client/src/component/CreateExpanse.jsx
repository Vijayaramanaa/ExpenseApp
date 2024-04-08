import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import  {addData}  from '../reduxStore/feature/dataSlice';
import {useDispatch,useSelector} from "react-redux"
import { Link,useNavigate } from 'react-router-dom';

function CreateExpense() {
    const data = useSelector((state)=>state.data.data)
    const dlen = data.length
    const len = dlen > 0 ? dlen +1 : 1
    const [addExpense, setAddExpense] = useState({
        id:len, 
        Name: "",
        Description: "",
        Category: "",
        DateOFExpense: "",
        ExpenseAmount: "",
    });
    const handleSubmit =(e)=>{
        e.preventDefault();

    }
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddItem = ()=>{
       const {Name,Description,Category,DateOFExpense,ExpenseAmount} = addExpense
        if(Name !== "" || DateOFExpense !== ""|| Description !== "" || Category !== ""|| ExpenseAmount !== ""){
            dispatch(addData(addExpense))
            navigate("/")
            
        }else{
            alert("All fields Required")
        }
    }
    return (
        <div className="container mx-auto">
            <form className="max-w-md mx-auto p-6 bg-gray-100 mt-10 rounded-md shadow-md" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-6 text-center">Create New Expense</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        type='text'
                        id="name"
                        placeholder='Name the Expense'
                        value={addExpense.Name}
                        onChange={(e) => setAddExpense({ ...addExpense, Name: e.target.value })}
                        className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="description">Describe</label>
                    <input
                        type='text'
                        id="description"
                        placeholder='Describe the Expense'
                        value={addExpense.Description}
                        onChange={(e) => setAddExpense({ ...addExpense, Description: e.target.value })}
                        className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="category">Category</label>
                    <select
                        id="category"
                        value={addExpense.Category}
                        onChange={(e) => setAddExpense({ ...addExpense, Category: e.target.value })}
                        className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-400"
                    >
                        <option value="">Select a category</option>
                        <option value="Book">Book</option>
                        <option value="Travel">Travel</option>
                        <option value="Education">Education</option>
                        <option value="Health">Health</option>
                        <option value="Electronic">Electronic</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="date">Date of Expense</label>
                    <DatePicker
                        placeholderText='click here'
                        dateFormat="MM/dd/yyyy"
                        showYearDropdown
                        showMonthDropdown 
                        dropdownMode="select"
                        maxDate={new Date()}
                        id="date"
                        selected={addExpense.DateOFExpense}
                        onChange={(date) =>{
                            const getDate = date
                            const month = getDate.toLocaleString("default",{month:"short"})
                            const day = getDate.getDate()
                            const year = getDate.getFullYear()
                            setAddExpense({ ...addExpense, DateOFExpense: `${day}/${month}/${year}` })}
                        } 
                        className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-400"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="expenseAmount">Expense Amount</label>
                    <input
                        type='text'
                        id="expenseAmount"
                        placeholder='Expense Amount in INR'
                        value={addExpense.ExpenseAmount}
                        onChange={(e) => setAddExpense({ ...addExpense, ExpenseAmount: e.target.value })}
                        className="border rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-400"
                        required
                    />
                </div>
                <div className="flex justify-between">
                  <Link to={"/"}>
                   <button type="button" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md focus:outline-none hover:bg-gray-400 transition-colors">Cancel</button>
                  </Link> 
                  
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-blue-600 transition-colors" onClick={handleAddItem}>Create Expense</button>
                </div>
            </form>
        </div>
    );
}

export default CreateExpense;
