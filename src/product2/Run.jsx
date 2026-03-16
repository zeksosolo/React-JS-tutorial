import {createRoot} from "react-dom/client";
import {StrictMode} from "react";
import ProductList2 from "./ProductList2";

createRoot(document.getElementById("root"))
.render(    
    <StrictMode>
        <ProductList2/>
    </StrictMode>
)