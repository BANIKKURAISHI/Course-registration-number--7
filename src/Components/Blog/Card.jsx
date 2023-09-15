import PropTypes from 'prop-types'
import Title from './../Title/Title';


const Card = ({values}) => {
 
    return (
        <div>
            <div className="card w:80 md:96 lg:w-96 bg-base-100 shadow-2xl rounded-2xl mx-16 my-12  p-10 text-justify">
                  <h2 className="text-xl">Credit Hour Remaining<span>:</span> hr</h2>
                  <hr/>
                  <h1 className="my-4">Course Name:{values.length}</h1>
                   {
                   values.map(value=><Title key={value.id} value={value}></Title>)  
                     
                    }
                  <hr />
                  <h3 className="my-2">Total Credit Hour<span>:</span></h3>
                  <hr />
                  <h3 className="my-2">Total Price<span>:</span></h3>
            </div>
        </div>
    );
};
Card.propTypes={
    values:PropTypes.array.isRequired
}


export default Card;