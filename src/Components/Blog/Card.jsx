import PropTypes from 'prop-types'
import Title from './../Title/Title';


const Card = ({values,times,remaining,price}) => {
    
    return (
        
            <div className="card w:80 md:96 lg:w-96 bg-base-100 shadow-2xl rounded-2xl mx-16 my-12  p-10 text-justify">
            <div><h2 className="text-xl p-6">Credit Hour Remaining {remaining} hr</h2>
                  <hr/>
                  <h1 className="text-xl p-6">Course name </h1> 
                  <div className="text-xl p-2">
                   
                   {
                   values.map((value,idx)=><Title key={idx} value={value} idx={idx+1}  remaining={remaining}></Title>)  
                  
                     
                    }
                    </div>
                  <hr />
                 <div>
                    <h2 className="text-xl p-6">Total Credit Hour:{times}</h2>
                 </div>
                  <hr />
                  <h3 className="my-4 p-6">Total Price:{price}</h3>
            </div>
        </div>
    );
};
Card.propTypes={
     values:PropTypes.array.isRequired,
     times:PropTypes.number,
     remaining:PropTypes.number,
     price:PropTypes.number,
}


export default Card;