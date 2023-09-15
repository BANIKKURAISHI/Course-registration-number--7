import PropTypes from 'prop-types'

import {FaBookmark ,FaDollarSign} from 'react-icons/fa';

const Blog= ({product,newButton}) => {
  const  {img,title,price,credit,details}=product;

  const a =()=> newButton(product)

    return (
        <div >
           <div className="card w-80 bg-base-100 shadow-2xl rounded-3xl">
                 <figure className="px-4 pt-4">
                 <img src={img} alt="Cover Picture" className='w-full'/>
                 </figure>
                 <div  className="card-body text-justify p-4 my-4">
                 <h2 className="card-title text-xl font-medium ">{title}</h2>
                 <p>{details}</p>
                 
                 <div className='flex justify-between my-4'>
                 <div >
                    <FaDollarSign></FaDollarSign>
                    <span className='inline'>Price:{price}</span>
                </div>
                <div className='font-semibold'>
                    <h3><FaBookmark></FaBookmark>Credit:<span>{credit}</span>hr</h3>
                </div>
                </div>
            
                </div>
                <button onClick={a} className="btn bg-blue-500 text-3xl rounded-lg w-2/3 className='font-semibold' mb-2">Select</button>
          
    
            </div>

        </div>
        
    );
};


Blog.propTypes ={
    product:PropTypes.object.isRequired,
    newButton:PropTypes.func
    }

export default Blog;