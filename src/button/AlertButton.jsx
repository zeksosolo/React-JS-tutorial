
//default 
//export default function AlertButton({kata,message}){
   //function handleClick(e){
    //console.info(e.target);
    //alert(message);
   //}

   //return(
   // <button onClick={handleClick}>{kata}</button>
   //)
//}

// (2) implementasi useRef

import {useRef} from "react";

export default function AlertButton({kata,message}){
   const counter = useRef(0);

   function handleClick(e) {
      console.info(e.target);
      alert('${message} ${counter.current++}');

   }
   return (
      <button onClick={handleClick}>{kata}</button>
   )
}
