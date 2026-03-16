//Berfungsi untuk menggunakan state 2 dan akan reset dari awal lagi
//hapus aja name nya
 
import {useState} from "react";
import Counter from "./Counter.jsx";

export default function CounterApp(){
    const [show2, setShow2] = useState(true);

    function handleChange(e){
        setShow2(e.target.checked);
    }

    //gunakan key di tiap counter berbeda untuk reset state 
    return (
      <div>
        {show2 ?<Counter key="1" name="Geda"/> : <Counter key="2" name="Gedi"/>}
      
        <input type="checkbox" checked={show2} onChange={handleChange}/> Tampilkan Counter 2
      </div>
    )
} 