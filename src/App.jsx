import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from "./appwrite/auth.js"
import {login,logout} from "./store/authSlice.js"
import Header from "./components/Header/Header.jsx"
import Fotter from "./components/Fotter/Fotter.jsx"

function App() {
 // console.log(import.meta.env.VITE_APPWRITE_URL) 
 const [loading,setLoading]= useState(true)
 const dispatch = useDispatch();

 useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
    dispatch(login({userData}))}
    else{
      dispatch(logout())
    }
  })
  .finally(()=>setLoading(false))
 },[])

  return !loading ?(
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className='w-full block'>
        <Header/>
        <main>
          {/*<Outlet/>*/}
        </main>
        <Fotter/>
      </div>
    </div>
  ): null
}

export default App
