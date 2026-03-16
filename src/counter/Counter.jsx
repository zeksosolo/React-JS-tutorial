import { useState } from "react";
// name disitu untuk mengubah nama counter
export default function Counter({name}){
    const [count, setCount] = useState(1);

    function handleClick(){
        setCount(count + 1);
    }
    return (
        <>
        <h1> Counter {name}: {count}</h1>
        <button onClick={handleClick}>Tambah</button>
        </>
    )
} 