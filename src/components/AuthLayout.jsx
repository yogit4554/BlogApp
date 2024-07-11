import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({children,authentication=true}) {
    const naviagte = useNavigate();
    const[loader,setLoader]=useState(true)
    const authStatus=useSelector(state=>state.auth.status)

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            naviagte("/login");
        }else if(!authentication && authStatus !== authentication){
            naviagte("/");
        }
        setLoader(false);
    },[authStatus,naviagte,authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected