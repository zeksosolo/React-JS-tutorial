export default function Container({children}){

    return(
        <div>
            <h1>Ini bisa di isi dan dihitung comp dalam comp</h1>
            {children}
            <footer>
                <p>ini footer</p>
            </footer>
        </div>
    )
        
    
}