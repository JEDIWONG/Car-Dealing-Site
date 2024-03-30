import { Button } from '@mui/material';
import '../styles/Contact.css';
import { Link } from 'react-router-dom';

function Contact(){

    return(
        <div className="contact-container">
            <h1 style={{fontSize:"60px"}}><b>Contact us Now</b></h1>
            
            <div className='card-container'>
                <div className='contact-card'>
                    <h2>General Enquiry</h2>
                    <a href='' style={{textDecoration:"None"}}><b>1-888-88-8888</b></a>
                    <p>8:00 AM - 10:00 PM <br></br>(Mon-Sun)</p>
                    <a href=''><b>example@gmail.com</b></a>
                </div>

                <div className='contact-card'>
                    <h2>Message Us</h2>
                    <a href='' style={{textDecoration:"None"}}><b>011-6969 6969</b></a>
                    <p>(WhatsApp)</p>
                </div>
            
                <div className='contact-card'>
                    <h2>Opportunities</h2>
                    <p>Email us on</p>
                    <a href=""><b>example@example.my</b></a>
                    
                    
                </div>

                <div className='contact-card'>
                    <h2>Locate us on</h2>
                    <p>Level B1, Menara CSS, Jalan Java, Bercham, 25300 Ipoh, Perak, Malaysia</p>
                    <p><b>Car King HQ</b></p>
                    
                    
                </div>
                
                <div className='contact-card' style={{display:"block",width:"600px"}}>
                    <h2>Need Quick Answer ?</h2>
                    <p><b>Lets visit our FAQ page here</b></p>
                    
                    <Link to="/Car-Dealing-Site/faq">
                        <Button variant='contained' size='large'>Visit FAQ</Button>
                    </Link>
                </div>
            </div>
        
        </div>
    );

};

export default Contact;