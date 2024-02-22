

function CarCard(props){

    return(

        <div>

            <div className='car-card-item'>

                <img src={props.img}></img>
                <h3>{props.name}</h3>
                <p>{props.year}</p>
                <p style={{color:"red", fontWeight:"bold",fontSize:25}}>RM {props.price}</p>
                <p>In stock : <div style={{color:"green", display:"inline-block"}}>{props.isStock? "Yes":"No"}</div></p>

            </div>

        </div>
    );

};

export default CarCard;