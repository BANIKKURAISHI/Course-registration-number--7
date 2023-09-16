
import PropTypes from 'prop-types';

const Title =({value,idx}) =>{
    const {title}=value
   

    return (
        <div>
          
          <li className='list-none ' > {idx}.{title}</li>
          
               
               
                
                
        </div>
    );
};


Title.propTypes={
  value:PropTypes.object.isRequired,
  idx:PropTypes.number,
  
}

export default Title;






