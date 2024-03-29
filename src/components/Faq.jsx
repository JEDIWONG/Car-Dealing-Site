import CollapseCard from "./CollapseCard";
import "../styles/Faq.css";


function Faq(){

    return ( 
        <div className="faq-container">

            <div className="faq-title">
                <h1>Frequently Asked Question</h1>
            </div>
            
            
            <CollapseCard title="1. What is this website for ?" desc="FrontEnd Car dealing site" title-font = "20"></CollapseCard>
            <CollapseCard title="2. Material UI is good to use" desc="This is made using this lib oso"></CollapseCard>
            <CollapseCard title="3. How to buy a Car ? " desc="Use brain, money and liver"></CollapseCard>
            <CollapseCard title="4. Why Hilux is nice " desc="Basically a tank on a road, it can run through everywhere.... Basically a tank on a road, it can run through everywhere...."></CollapseCard>
            <CollapseCard title="5. Does our website available globally ?  " desc="Maybe"></CollapseCard>

        </div>
    );
}

export default Faq; 
