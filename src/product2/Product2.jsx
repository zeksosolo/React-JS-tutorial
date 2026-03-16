export default function Product2({ product }) {

    return (
        <div>
            <h2>{product.id} : {product.name}</h2>
            <p>Harga : {product.price}</p>
            <p>Stock : {product.stock}</p>
        </div>
    )
}

