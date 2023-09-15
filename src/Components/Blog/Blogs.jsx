
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import Card from "./Card";


const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    const [values,setValues]=useState([])
    const [times,setTimes]=useState(0)
    
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
  setTimes(newTime)
  console.log(newTime)

  
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
                 <Card values={values} times={times}></Card>
                
                </div>
            </div>

        </div>
    );
};



export default  Blogs;