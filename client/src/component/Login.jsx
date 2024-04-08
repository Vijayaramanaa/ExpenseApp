import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"

function Login() {
    const [login,setLogin] = useState({
        Email : "",
        Password : "",
    });
    const navi = useNavigate()
    const error = "Email or password empty"
    const handelsubmit = (e)=>{
        e.preventDefault();

            if(login.Email.trim()=== "" || login.Password.trim()=== ""){
                alert(error)
            }else{
              localStorage.setItem("UserLogin",JSON.stringify(login))
              navi("/")
            }
    }
    useEffect(()=>{
      if(localStorage.getItem("UserLogin")){
        navi("/")
      }
    },[])

  return (
<div class="flex min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 justify-center items-center">
  <div class="w-full max-w-md p-8 rounded-lg bg-white shadow-md">
    <h1 class="text-3xl font-bold text-center mb-8">Login</h1>
    <form onSubmit={(e) => handelsubmit(e)}>
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="Email"
          class="shadow-sm focus:ring-indigo-500 focus:outline-none w-full sm:text-sm rounded-md border border-gray-300 p-2.5"
          placeholder="Enter your email address"
          value={login.Email}
          onChange={(e) => setLogin({ ...login, Email: e.target.value })}
        />
      </div>
      <div class="mb-6">
        <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <input
          type="password"
          id="password"
          name="Password"
          class="shadow-sm focus:ring-indigo-500 focus:outline-none w-full sm:text-sm rounded-md border border-gray-300 p-2.5"
          placeholder="Enter your password"
          value={login.Password}
          onChange={(e) => setLogin({ ...login, Password: e.target.value })}
        />
      </div>
      <button
        type="submit"
        class="w-full flex justify-center items-center px-4 py-2 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-sm"
      >
        Login
      </button>
    </form>
  </div>
</div>

  )
}

export default Login