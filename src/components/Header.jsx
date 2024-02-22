import { Outlet,Link} from "react-router-dom";

function Header(){

    const imgUrl = "data:image/png;base64,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"; 

    const navToHome=()=>{
        window.location.href = "/Car-Dealing-Site";
    }

    return(
        <>
        <div className="header-container" >
            <div className="header-logo" onClick={navToHome}>
                <p>F_inese U_nited C_ar K_ingdom</p>
            </div>
            

            <nav className="nav-container">

                <ul>

                    <li>
                        <Link to="/Car-Dealing-Site" className="nav-link">Home</Link>
                    </li>

                    <li>
                        <Link to="/Car-Dealing-Site/FindCar" className="nav-link">Find Car</Link>
                    </li>

                    <li>
                        <Link to="/Car-Dealing-Site/service" className="nav-link">Services</Link>
                    </li>

                    <li>
                        <Link to="/Car-Dealing-Site/about" className="nav-link">About</Link>
                    </li>

                    <li>
                        <Link to="/Car-Dealing-Site/contact" className="nav-link">Contact</Link>
                    </li>
                    
                </ul>
     
            </nav>

            <div className="menu-login">
                <img src={imgUrl}></img>
                <Link to="/Car-Dealing-Site/login" className="nav-link">Login/Sign Up</Link>
            </div>
            
        </div>
        <Outlet/>
        </>
    );


};

export default Header;