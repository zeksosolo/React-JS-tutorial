//side effect pada komponen

export default function SayHelloForm(){

    function handleClick(e){
        e.preventDefault();
        const nama = document.getElementById("input_name").value;
        document.getElementById("text_hello").innerText =`Hello ${nama}`;
    }
    return(
        <div>
        <form>
            <input id="input_name" />
            <button onClick={handleClick}>Say Hellow</button>
        </form>  
        <h1 id="text_hello">Hello bro</h1>
        </div>
    )
}