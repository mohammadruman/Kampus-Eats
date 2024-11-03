import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import { useState } from "react"
import { account } from "../config/Appwrite";

const Register = () => {
  const [userData, SetUserData ]= useState({username:"", email:"",password:""});
  const RegisteruserButton= async()=>{
   //appwrite logic 
   const SignPromise =  account.create(
    userData.username,
    userData.email,
    userData.password
   )
   SignPromise.then(function(res){
    console.log(res);
   },function(err){
    console.log(err);
   })
    
   
    }

  return (
    <>
    <div className="w-full flex justify-center items-center h-[80vh] ">
      <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
         <h1 className="text-xl font-bold text-left">Create an account</h1>
         <input className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your username" onChange={(e)=> SetUserData({...userData,username:e.target.value})}/>
         <input className="w-full px-4 py-2 border-2 border-black outline-0" type="email" placeholder="Enter your email" onChange={(e)=>SetUserData({...userData,email:e.target.value})}/>
         <input  className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter your password"  onChange={(e)=>SetUserData({...userData,password:e.target.value})} />
         <button  className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black " onClick={RegisteruserButton}>Register</button>
         <div className="flex justify-center items-center space-x-3">
         <p>Already have an account?</p>
         <p className="text-gray-500 hover:text-black"><Link to="/login">Login</Link></p>
         </div>
       </div>
    </div>
    <Footer/>
    </>
  )
}
export default Register