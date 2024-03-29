import { Link } from "react-router-dom";
import "../styles/Home.css"
import { Button } from "@mui/material";

function Home(){

    const imgUrl = "https://wrench.com/blog/content/images/size/w2000/2021/09/cars-in-lot.jpg";
    
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

                    <h2>
                        What we Provide ? 
                    </h2>

                    <div className="home-intro-item">
                        
                        <h2>
                            Hunting a Car? 
                        </h2>

                        <p>We have the best deal for our valued customer</p>

                        <Link className="nav-findcar" to={"/Car-Dealing-Site/FindCar"}>
                            <button>Take me there</button>
                            
                        </Link>
                    </div>
                    
                </div>

                <div className="home-intro">

                    <h2>FAQ</h2>
                    <Button variant="contained" color="primary" size="large">View</Button>

                </div>
       
            </div>

        </div>
        
    );

};

export default Home;