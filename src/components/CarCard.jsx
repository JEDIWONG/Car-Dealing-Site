

function CarCard(props){

    return(

        <div>

            <div className='car-card-item'>

                <img src={props.img}></img>
                <h3>{props.name}</h3>
                <p>{props.year}</p>
                <p>RM {props.price}</p>
                <p>In stock : {props.isStock? "Yes":"No"}</p>

            </div>

        </div>
    );

};

export default CarCard;