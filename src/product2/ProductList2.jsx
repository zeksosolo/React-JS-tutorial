import { useEffect, useState } from "react";
import Product2 from "./Product2.jsx";

export default function ProductList2() {
    const [products, setProducts] = useState([]);
    //ini gapake effect dependency
    //const loaded = useRef(false);

    //ini pake effect depenndecy
    const [load, setLoad] = useState(false);

    function handleClick() {
        console.info("Button Clicked");
        setLoad(true);
    }

    useEffect(() => {
        console.info('Call Use Effect');

        async function fetchProducts() {
            const response = await fetch("/products.json");
            const data = await response.json();
            setProducts(data);
        }
        if (load) {
            fetchProducts();
        }

        return () => {
            console.info("Product List Component ")
        }
    }, [load]);


    return (
        <>
            <h1>Product List</h1>
            <button onClick={handleClick}>Load Products</button>
            {products.map((product2) => (
                <Product2 key={product2.id} product={product2} />
            ))}
        </>
    )
}