import { useParams } from "react-router-dom";
import { PRODUCTS } from "./Product";
import "../styles/UseProduct.css";

function UseProducts(){

    const {id} = useParams();

    const item =(

        {
            imgUrl : PRODUCTS[id-1].imgUrl,
            name : PRODUCTS[id-1].name,
            year : PRODUCTS[id-1].year,
            price : PRODUCTS[id-1].price,
            stock : PRODUCTS[id-1].stock
        }

    );

    return(

        <div className="product-container">

            <img src={item.imgUrl}></img>

            <div className="product-detail">
                <h3>
                    {item.name}
                </h3>
                <p>
                    Rm {item.price}
                </p>
                <p>
                    {item.year}
                </p>
                <p>
                    {item.stock}
                </p>

            </div>
            
        </div>
    )
};

export default UseProducts;


