
import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import Card from "./Card";

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
            <div className="flex flex-col mx-auto md:flex-col max-w-7xl justify-between lg:flex-row ">
                <div className="grid mx-auto md:grid-cols-2  my-10 lg:grid-cols-3 gap-20 w-3/4">
                    {
                        blogs.map(blog=><Blog key={blog.title} newButton={newButton}  product={blog}></Blog>)
                    }
                </div>
                <div className="mx-auto  lg:w-1/5">
                  <Card></Card>
                </div>
            </div>

        </div>
    );
};



export default  Blogs;