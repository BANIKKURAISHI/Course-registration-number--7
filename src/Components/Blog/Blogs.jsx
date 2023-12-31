
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import Card from "./Card";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    const [values,setValues]=useState([])
    const [times,setTimes]=useState(0)
    const [remaining,setRemaining]=useState(20)
    const [price,setPrice]=useState(0)
  

    useEffect(()=>{
        fetch("blogData.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

const newButton=(power,read,taka)=>{
    const newValue=[...values,power]
    const totalPrice=price+taka
    const newTime=times+read
    const remainingTime=remaining-read
    const newRemainingTime=parseFloat(20)-times
    if(values.includes(power)) {
        toast.error('Item is already selected!!', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
       }
   else{
    
    if(newTime<=20&&remainingTime>=0){
        setTimes(newTime)
        setRemaining(remainingTime)
        setPrice(totalPrice)
        setValues(newValue)
      }
      else{

        if(newRemainingTime===0){
            toast(` OPS!!!Your Total Credit Hour is full
                    Your remaining Credit Hour Finished
                    You do not add more Hour`) 
        }
          else{toast(` OPS!!!
            Your remaining time is  insufficient(${remainingTime}).You do not add more than 20.
           Now You can add only ${newRemainingTime}`)}
        
      }
   }


  }
  
 return (
        <div >
            <div className="flex my-16 flex-col mx-auto md:flex-col max-w-7xl justify-between lg:flex-row ">
                <div className="grid mb-32 md:grid-cols-2 gap-x-52  lg:grid-cols-3 gap-auto w-3/4">
                    {
                        blogs.map((blog,idx)=><Blog key={idx} newButton={newButton}  product={blog}></Blog>)
                    }
                </div>
                <div className="mx-auto md:-mx-16  lg:w-1/5">
                 <Card values={values} times={times} remaining={remaining} price={price}></Card>
                
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};



export default  Blogs;