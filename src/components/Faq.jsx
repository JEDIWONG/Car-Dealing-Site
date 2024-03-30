import CollapseCard from "./CollapseCard";
import "../styles/Faq.css";
import { useState } from "react";


function Faq(){

    const [open,setOpen] = useState(false);

    return ( 
        <div className="faq-container">

            <div className="faq-title">
                <h1>Frequently Asked Question</h1>
            </div>
            
            
            <CollapseCard title="1. What is this website for ?" desc="FrontEnd Car dealing site" title-font = "20"></CollapseCard>
            <CollapseCard title="2. Material UI is good to use" desc="This is made using this lib oso"></CollapseCard>
            <CollapseCard title="3. How to buy a Car ? " desc="Use brain, money and liver"></CollapseCard>
            <CollapseCard title="4. Why Hilux is nice " desc="Basically a tank on a road, it can run through everywhere...."></CollapseCard>
            <CollapseCard title="5. Does our website available globally ?  " desc="Maybe"></CollapseCard>
            <CollapseCard title="6. Multiline" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis amet consequuntur atque quaerat nesciunt minus qui aperiam facilis dolorum iure laborum sit recusandae molestiae, tenetur repudiandae possimus eveniet, vel tempore!"></CollapseCard>

        </div>
    );
}

export default Faq; 
