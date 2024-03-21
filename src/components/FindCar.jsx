import { Link } from 'react-router-dom';
import '../styles/FindCar.css'
import CarCard from './CarCard';
import { PRODUCTS } from './Product';

function FindCar(){

    const imgUrl ="https://www.mycarpaint.net/wp-content/uploads/proton-hatchback-gen2.jpg";

    return( 
        <div className='findcar-container'>
            <h2>Browse Car</h2>

            <div className="search-container">
                <input type="text" placeholder="Search for car model and brands"></input>
                <button>Search</button>
            </div>

            <div className='car-card-container'>

                {PRODUCTS.map((product)=>(
                    <Link className='link' to={`/Car-Dealing-Site/FindCar/car/${product.id}`}>
                        <CarCard img={product.imgUrl} name= {product.name} year={product.year} price={product.price} isStock={product.stock}></CarCard>
                    </Link>
                ))}
                       
            </div>

        </div>
    );

};

export default FindCar;