import '../styles/FindCar.css'
import CarCard from './CarCard';

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

                <CarCard img={imgUrl} name="Proton Gen 2" year={2023} price={20000} isStock={true}></CarCard>
                <CarCard img={imgUrl} name="Proton Gen 2" year={2023} price={20000} isStock={true}></CarCard>
                <CarCard img={imgUrl} name="Proton Gen 2" year={2023} price={20000} isStock={true}></CarCard>
                <CarCard img={imgUrl} name="Proton Gen 2" year={2023} price={20000} isStock={true}></CarCard>
                <CarCard img={imgUrl} name="Proton Gen 2" year={2023} price={20000} isStock={true}></CarCard>
                <CarCard img={imgUrl} name="Proton Gen 2" year={2023} price={20000} isStock={true}></CarCard>
                <CarCard img={imgUrl} name="Proton Gen 2" year={2023} price={20000} isStock={true}></CarCard>
                <CarCard img={imgUrl} name="Proton Gen 2" year={2023} price={20000} isStock={true}></CarCard>
                <CarCard img={imgUrl} name="Proton Gen 2" year={2023} price={20000} isStock={true}></CarCard>

            </div>

        </div>
    );

};

export default FindCar;