
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    const [value,setValue]=useState([])
    useEffect(()=>{
        fetch("blogData.json")
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])

const newButton=(power)=>{
  const newValue=[...value,power]
  setValue(newValue)
  console.log(power)
}


    return (
        <div>
            <div className="flex justify-between">
                <div className="grid grid-cols-3 gap-10">
                    {
                        blogs.map(blog=><Blog key={blog.title} newButton={newButton}  product={blog}></Blog>)
                    }
                </div>
                <div>

                </div>
            </div>

        </div>
    );
};



export default  Blogs;