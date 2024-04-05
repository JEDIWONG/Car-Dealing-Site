import { Link } from "react-router-dom";
import "../styles/Home.css"
import { Button, Card } from "@mui/material";
import CollapseCard from "./CollapseCard";

function Home(){
    
    return(
        <div>

            <div className="home-container">

                <div className="home-intro">

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
                        
                        <br/>
                        <p1>"Too weak walk all the way up to Genting Highlands right ?"</p1>
                        <p1>Keep Calm And Get A Car Just Right here</p1>

                    </div>

                    <h1>
                        What we Provide ? 
                    </h1>

                    <div style={{display:"flex", flexDirection:"row"}}>

                        <div className="home-intro-item" >
                            
                            <h2>
                                Buy Car
                            </h2>

                            <img src="https://blog-cdn.el.olx.com.pk/wp-content/uploads/2022/05/16120036/Untitled-2.jpg"
                                 style={{width:400,height:200}}
                            ></img>


                            <Link className="nav-findcar" to={"/Car-Dealing-Site/FindCar"}>
                                <Button variant="contained" color="primary">View All Car</Button>
                            </Link>
                        </div>

                        <div className="home-intro-item">
                            
                            <h2>
                                Sell Car 
                            </h2>

                            <img src="https://images.ctfassets.net/2sam6k0rncvg/zgmugJP3uQbNE8hWuV2cv/373e5dcae7e03404a7e56ccf1b3d3a77/how-to-sell-a-used-car-in-india.png?fm=webp&w=1200&q=75"
                                 style={{width:400,height:200}}
                            ></img>

                            <Link className="nav-findcar" to={"/Car-Dealing-Site/FindCar"}>
                                <Button variant="contained" color="primary">Sell Car</Button>
                            </Link>
                        </div>

                    </div>

                </div>

                <div className="home-intro">

                    <h1>Join Us Today</h1>

                    <div style={{display:"flex", flexDirection:"row"}}>

                        <div className="home-intro-item">
                            <h2>Customer</h2>
                            <p>Hoping to get buy a car, sell car and other services ?</p>
                            <p>Get in touch with us today</p>
                            <Link className="link">
                                <Button variant="contained" color="primary" size="large">Join as Customer</Button>
                            </Link>             
                        </div>

                        <div className="home-intro-item"> 
                            <h2>Dealer</h2>
                            <p>Interested in dealership?</p>
                            <p>Welcome to work with us anytime</p>
                            <Link className="link">
                                <Button variant="contained" color="primary" size="large">Sign Up as Dealer</Button>
                            </Link>             
                        </div>

                    </div>

                </div>

                <div className="home-intro">
                    <h2>FAQ</h2>
                    <CollapseCard title="1. What is this website for ?" desc="FrontEnd Car dealing site" title-font = "20"></CollapseCard>
                    <CollapseCard title="2. Material UI is good to use" desc="This is made using this lib oso"></CollapseCard>
                    <CollapseCard title="3. How to buy a Car ? " desc="Use brain, money and liver"></CollapseCard>
                    <br/>
                    <Link to={"/Car-Dealing-Site/faq"}>
                        <Button variant="contained" color="info" size="large">More</Button>
                    </Link>
                </div>
       
            </div>

        </div>
        
    );

};

export default Home;