import React,{useState} from 'react'
import ViewTable from './ViewTable';
import { Link } from 'react-router-dom';



function Home() {
  const [search,setSearch] = useState({
    Date : "",
    Sname : ""
  })
  return (
    <div className='flex flex-col justify-around gap-6'>
    <div className="flex flex-col sm:flex-row justify-between p-4 bg-gray-200">
      <h1 className="text-xl font-bold sm:text-2xl mb-4 sm:mb-0">MY EXPENSE MANAGER</h1>
      <div className="sm:flex sm:items-center">
            <input
            type="text"
            className="rounded-md border border-gray-400 p-2.5 focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500 mb-2 sm:mb-0"
            placeholder="Search Expense by Date"
            value={search.Date}
            onChange={(e)=>setSearch({...search,Date :e.target.value})}
          />
        <div className="flex flex-col sm:flex-row sm:items-center">
          <input
            type="text"
            className="rounded-md border border-gray-400 p-2.5 focus:outline-none focus:ring-1 focus:ring-opacity-50 focus:ring-blue-500 mb-2 sm:mb-0"
            placeholder="Search Expense by Name"
            value={search.Sname}
            onChange={(e)=>setSearch({...search,Sname :e.target.value})}
          />
         <Link to={"/edit"}> <button className="px-4 py-2.5 ml-2 text-white bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500">
            + New Expense
          </button> </Link>
        </div>
      </div>
    </div>
    <div className='w-[1200px] m-auto'>
      <ViewTable search={search} />
    </div>
    </div>
  );
  
    
}

export default Home;




