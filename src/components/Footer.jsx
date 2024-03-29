

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
                
                <li>About Us</li>
                <li>Our Contact</li>
                <li>FAQ</li>
                <li>Help</li>
            </ul>
        </div>
    );

};

export default Footer;