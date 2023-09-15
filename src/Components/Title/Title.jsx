
import PropTypes from 'prop-types';

const Title =({value}) =>{
    const {title}=value
   

    return (
        <div>
              
                <li>{title}</li>
                
                
        </div>
    );
};


Title.propTypes={
  value:PropTypes.object.isRequired,
  
}

export default Title;






