//Menggunakan DOM(document object model) secara manual tidak sesuai saat button di click dan counter bertambah

export default function CounterWrong(){
    let counter = 0;

    function handleClick(){
        counter++;
        console.log(counter);
    }
    return(
        <div>
            <div>
                 <button onClick={handleClick}>Increment</button>
            </div>
           <h1>Counter =0 </h1>
        </div>
    )
}