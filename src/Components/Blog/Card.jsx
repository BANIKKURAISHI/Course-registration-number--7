const Card = () => {
    return (
        <div>
            <div className="card w:80 md:96 lg:w-96 bg-base-100 shadow-2xl rounded-2xl mx-16 my-12  p-10 text-justify">
                  <h2 className="text-xl">Credit Hour Remaining<span>:</span> hr</h2>
                  <hr/>
                  <h1 className="my-4">Course Name</h1>
                  <hr />
                  <h3 className="my-2">Total Credit Hour<span>:</span></h3>
                  <hr />
                  <h3 className="my-2">Total Price<span>:</span></h3>
            </div>
        </div>
    );
};

export default Card;