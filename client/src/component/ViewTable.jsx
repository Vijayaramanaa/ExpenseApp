import React, {useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { MdEdit, MdDeleteForever } from "react-icons/md";
import {useNavigate} from "react-router-dom"
import { removeData } from '../reduxStore/feature/dataSlice';

const ViewTable = ({search}) => {
    const data = useSelector((state) => state.data.data);
    const [Id,setId] = useState(null)
    const [isVisible, setIsVisible] = useState(false);
    let filterData = data.filter((item)=>{
      if(search.Sname){
      return(
        item.Category.toLowerCase().includes(search.Sname.toLowerCase())
        
      )
      }
      if(search.Date){
        return(
          item.DateOFExpense.includes(search.Date)
          
        )
      }
      if(search.Sname === "" || search.Date === ""){
      return(
        item.Category.toLowerCase().includes(search.Sname.toLowerCase())
      )
    }
      return(
          data
      )
      
    })
    const navigate = useNavigate()
    const handleEdit = (id)=>{
      navigate(`/update/${id}`)

    }
    const called =(id)=>{
        setId(id)
    }


    useEffect(()=>{
  
    },[data])
    return (
        <div className="-overflow-x scrollbar-hidden shadow rounded-lg overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-yellow-200">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Description
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Expense
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">

              { filterData.map((item) => (
                <tr key={item.id}>
                  <td className="px-4 py-4 text-left text-sm">{item.id}</td>
                  <td className="px-4 py-4 text-left text-sm">{item.Name}</td>
                  <td className="px-4 py-4 text-left text-sm">{item.Category}</td>
                  <td className="px-4 py-4 text-left text-sm">{item.Description}</td>
                  <td className="px-4 py-4 text-left text-sm">{item.DateOFExpense}</td>
                  <td className="px-4 py-4 text-left text-sm">INR {item.ExpenseAmount}</td>
                  <td className="px-4 py-4 text-left text-sm flex justify-start space-x-2">
                    <MdEdit onClick={()=>handleEdit(item.id)} className="text-blue-500 hover:text-blue-700 cursor-pointer w-6 h-6" />
                    <MdDeleteForever onClick={()=>{setIsVisible(!isVisible)
                      called(item.id)}} className="text-red-500 hover:text-red-700 cursor-pointer w-6 h-6" />
                  </td>
                </tr>
              ))
              }
          {filterData.length === 0 && (
            <tr>
              <td colSpan="7" className="text-center text-gray-500 py-4">
                No items found matching the search criteria.
              </td>
            </tr>
          )}
            </tbody>
          </table>
          <Alert isVisible={isVisible} setIsVisible={setIsVisible} Id={Id}/>
        </div>
      );

  };

export default ViewTable

const Alert = ({isVisible,setIsVisible,Id}) => {


  const handleYesClick = () => {
    setIsVisible(false);
  };

  const handleNoClick = () => {
    setIsVisible(false);
  };
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(removeData(Id));
  };

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-md p-6">
            <div className="mb-4">
              <p className="text-lg font-semibold">Are you sure you want to Delete this Expense?</p>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-4 py-2 mr-4 rounded-md focus:outline-none"
                onClick={handleNoClick}
              >
                NO
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none"
                onClick={()=>{handleYesClick() 
                  handleDelete()}}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


