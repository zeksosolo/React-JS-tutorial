//sebagai logic untuk menampilkan table 

export default function Row({id,kata}) {
    return(
        <tr>
            <td>{id}</td>
            <td>{kata}</td>
        </tr>
    )

}