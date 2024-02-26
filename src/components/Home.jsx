import { Link } from "react-router-dom";
import "../styles/Home.css"

function Home(){
    
    return(
        <div>
            <div className="home-container">

                <div className="home-title">
                    
                    <h1>
                        <div >
                            F
                        </div>  
                        _inese 
                        <div>
                            U
                        </div>
                        _nited 
                        
                        <div>
                            C
                        </div>_ar 
                        
                        <div>
                            K
                        </div>
                        _ingdom 
                    </h1>

                    <p>"Now everyone can drive"</p>
                    <p>Own a car now ...</p>

                </div>

                <div className="home-intro">

                    <ul className="home-intro-item">

                        <h2>
                            What we Provide ? 
                        </h2>

                        <li>
                            Buying car
                        </li>

                        <li>
                            Selling car
                        </li>

                        <li>
                            Finding car
                        </li>

                        <li>
                            Dealers Partnerships
                        </li>
                    </ul>

                    <div className="home-intro-item">

                        <h2>
                            Hunting a Car ? 
                        </h2>

                        <p>We have the best deal for our valued customer</p>

                        <Link className="nav-findcar" to={"/Car-Dealing-Site/FindCar"}>
                            <button>Take me there</button>
                        </Link>
                    </div>

                </div>

                
                
            </div>

        </div>
        
    );

};

export default Home;