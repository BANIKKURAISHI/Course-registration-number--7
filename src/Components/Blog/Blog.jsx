import PropTypes from 'prop-types'
import {FaBookmark ,FaDollarSign} from 'react-icons/fa';

const Blog= ({product,newButton}) => {
  const  {img,title,price,credit,details}=product;
  const a =()=>newButton(product,credit,price)
   return (
        <div >
           <div className="card w-80 bg-base-100 shadow-2xl rounded-3xl my-8">
                 <figure className="px-4 pt-4">
                 <img src={img} alt="Cover Picture" className='w-full'/>
                 </figure>
                 <div  className="card-body text-justify p-4 my-4">
                 <h2 className="card-title text-black-900 text-xl font-medium my-2">{title}</h2>
                 <p>{details}</p>
                 
                  <div className='flex justify-between my-4'>
                 <div className='flex text-xl font-medium'>
                    <h1><FaDollarSign className='my-1'></FaDollarSign></h1>
                    <h2 >Price:{price}</h2>
                </div>
                
                <div className='font-medium'>
                    <div className='flex text-xl'>
                        <h1><FaBookmark className='text-stone-400 my-1'></FaBookmark></h1>
                        <h2>Credit :{credit} hr</h2>
                    </div>
                 </div>
                </div>
            
                </div>
                <button onClick={a} className="btn bg-blue-500 text-3xl rounded-lg w-2/3 className='font-semibold' mb-8 p-2">Select</button>
                
    
            </div>

        </div>
        
    );
};


Blog.propTypes ={
    product:PropTypes.object.isRequired,
    newButton:PropTypes.func
    }

export default Blog;