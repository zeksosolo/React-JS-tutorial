//Cara yang benar menggunakan hooks yaitu state, dan menggunakan perintah useState

//import berfungsi untuk ambl library di react
import{useState} from "react";

export default function CounterTrue(){
//fungsi utama di react, angka (1) adalah nilai awal
    let[counter, setCounter]=useState(1);

//fungsi disini untuk menambah tiap klik akan nambah 1
    function handleClickIncrement(){
       setCounter(counter + 1);
       //jika terpaksa harus menggunakan update state yg berulang
       setCounter((c)=> c + 1);
        console.log(counter);
    }

    function handleClickDecrement(){
        setCounter(counter - 1);
        console.log(counter);
    }
    return(
        <div>
            <div>
                 <button onClick={handleClickIncrement}>Increment</button>
                 <button onClick={handleClickDecrement}>Decrement</button>
            </div>
           <h1>Counter = {counter}</h1>
        </div>
    )
}