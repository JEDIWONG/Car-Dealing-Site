import { Link } from "react-router-dom";

function Footer(){

    const navToHome=()=>{
        window.location.href = "/Car-Dealing-Site";
    }

    return(

        <div className="footer-container">

            <div className="header-logo" onClick={navToHome}>
                    <p>F_inese U_nited C_ar K_ingdom</p>
            </div>

            <ul className="footer-nav">
                
                <li>
                    <Link to="/Car-Dealing-Site/about" className="nav-link">About</Link>
                </li>

                <li>
                    <Link to="/Car-Dealing-Site/contact" className="nav-link">Contact Us</Link>
                </li>
                <li>
                    <Link to="/Car-Dealing-Site/faq" className="nav-link">FAQ</Link>
                </li>

            </ul>
        </div>
    );

};

export default Footer;