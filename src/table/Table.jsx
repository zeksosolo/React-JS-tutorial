//disini berada tampilan yg akan dibeirkan berdasarkan logic di row.jsx

import Row from "./row";

export default function Table(){
    
    return(
        <table border="1">  
        <tbody>
            <Row id="1" kata="Makan"/>
            <Row id="2" kata="Minum"/>
            <Row id="3" kata="Tidur"/>
        </tbody>
        </table>
    )
    
}