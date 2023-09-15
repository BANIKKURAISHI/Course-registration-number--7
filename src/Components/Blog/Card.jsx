import PropTypes from 'prop-types'
import Title from './../Title/Title';


const Card = ({values,times,remaining}) => {
 
    return (
        
            <div className="card w:80 md:96 lg:w-96 bg-base-100 shadow-2xl rounded-2xl mx-16 my-12  p-10 text-justify">
            <div><h2 className="text-xl">Credit Hour Remaining{remaining}hr</h2>
                  <hr/>
                  
                   {
                   values.map(value=><Title key={value.id} value={value} remaining={remaining}></Title>)  
                     
                    }
                  <hr />
                 <div>
                    <h2>Total Credit Hour:{times}</h2>
                 </div>
                  <hr />
                  <h3 className="my-2">Total Price<span>:</span></h3>
            </div>
        </div>
    );
};
Card.propTypes={
     values:PropTypes.array.isRequired,
     times:PropTypes.number,
     remaining:PropTypes.number
}


export default Card;