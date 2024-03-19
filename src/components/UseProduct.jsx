import { useParams } from "react-router-dom";
import { PRODUCTS } from "./Product";

function UseProducts(){

    const {id} = useParams();

    const item =(

        {
            name : PRODUCTS[id-1].name,
            year : PRODUCTS[id-1].year,
            price : PRODUCTS[id-1].price,
            stock : PRODUCTS[id-1].stock
        }

    );

    return(

        <div>
            {item.name}
        </div>
    )
};

export default UseProducts;


