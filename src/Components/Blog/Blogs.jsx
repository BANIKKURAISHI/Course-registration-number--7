
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import Card from "./Card";


const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    const [values,setValues]=useState([])
    const [times,setTimes]=useState(0)
    const [remaining,setRemaining]=useState(20)
    useEffect(()=>{
        fetch("blogData.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

const newButton=(power,read)=>{
  const newValue=[...values,power]
  setValues(newValue)
 // console.log(power)
 const newTime=times+read
  if(newTime<=20){
    
    setTimes(newTime)
    // console.log(newTime)
  }
  else{
    alert('Your reding time is finished')
  }
  const remainingTime=remaining-read
  if(remainingTime>=0){
    setRemaining(remainingTime)
  }
  else{
    alert('Your time is finished')
  }

  
  
  
}




    return (
        <div>
            <div className="flex flex-col mx-auto md:flex-col max-w-7xl justify-between lg:flex-row ">
                <div className="grid mx-auto md:grid-cols-2  my-10 lg:grid-cols-3 gap-20 w-3/4">
                    {
                        blogs.map(blog=><Blog key={blog.id} newButton={newButton}  product={blog}></Blog>)
                    }
                </div>
                <div className="mx-auto  lg:w-1/5">
                 <Card values={values} times={times} remaining={remaining}></Card>
                
                </div>
            </div>

        </div>
    );
};



export default  Blogs;