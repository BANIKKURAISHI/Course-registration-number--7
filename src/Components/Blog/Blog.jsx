import PropTypes from 'prop-types'


const Blog= ({product,newButton}) => {
  const {img,title,price,credit,details}=product;
  const a =()=> newButton(product)
    return (
        <div>
           <div className="card w-96 bg-base-100 shadow-2xl rounded-3xl ">
                 <figure className="px-4 pt-4">
                 <img src={img} alt="" className='w-96'/>
                 </figure>
                 <div  className="card-body text-justify p-5 ">
                 <h2 className="card-title text-xl my-4 font-medium">{title}</h2>
                 <p>{details}</p>
                 <div className='flex justify-between my-4'>
                 <div className='font-semibold'>
                    <h3>Price:{price}</h3>
                </div>
                <div className='font-semibold'>
                    <h3>Credit: <span>{credit}</span> hr</h3>
                </div>
               </div>
                </div>
           <button onClick={a} className="btn bg-blue-500 text-3xl rounded-lg p-2 w-3/4 className='font-semibold'">Select</button>
    
            </div>

        </div>
        
    );
};


Blog.propType ={
    product:PropTypes.array.isRequired
  
        
    
}

export default Blog;