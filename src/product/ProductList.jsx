import { useEffect, useState } from "react";
import Product from "./Product.jsx";

export default function ProductList() {
    const [products, setProducts] = useState([]);
   //ini gapake effect dependency
    //const loaded = useRef(false);
  
    //ini pake effect depenndecy
    const [load,setLoad] = useState(false);

    function handleClick(){
        console.info("Button Clicked");
        setLoad(true);
    }
    useEffect(() => {
        if (load == false) {
            fetch("/products.json")
                .then((response) => response.json())
                .then((data) => setProducts(data))

        }
 
//use effect untuk eksternal seperti ajax

    return () => {
        console.info("Product List Component Unmounted");
    }
       },[load]);
    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Products</button>
            {products.map((product) => (
                <Product key={product.id} product={product} Stock={product.stock} />
            ))}
        </>
    )
}