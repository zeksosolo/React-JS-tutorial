import { createRoot } from "react-dom/client";
import Komponen1 from "./komponen1.jsx";
import { StrictMode } from "react";
//(3) setelah menggunakan container perlu mengimport Container dari folder components
import Container from "./Container.jsx";

//(4) disini kita implementasi conditional yaitu if else di aplikasi todolist
import TodoList from "../todolist/todolist.jsx";

//(5) disini kita implementasi pure component yaitu komponen yang tidak bisa diubah
import Table from "../table/table.jsx";

//(6) disini kita implementasi event handler yaitu aksi ketika berinteraksi dengan komponen
import AlertButton from "../button/AlertButton.jsx";

import MyButton from "../button/MyButton.jsx";
//(7) Event Propagation
import Toolbar from "../button/Toolbar.jsx";

//(8) Side Effect
import SearchForm from "../form/SearchForm.jsx";

//9 side effect di komponen yg tidak di rekomendasikan
import SayHelloForm from "../form/SayHelloForm.jsx";

//10 DOM manual tidak sesuai
import CounterWrong from "../form/CounterWrong.jsx";

//11 DOM dengan menggunakan useState di library react
import CounterTrue from "../form/CounterTrue.jsx";

createRoot(document.getElementById("root"))
    // (1) ini untuk menampilkan komponen yang dibuat tapi bukan komponen dalam komponen
    // <StrictMode>
    //         <Komponen1/>
    //     </StrictMode>
    .render(
        // (2) ini untuk menampilkan komponen dalam komponen
        <StrictMode>
            <Container>
                <Komponen1/>
                <TodoList/>
                <Table/>
                <AlertButton kata="Click me" message="You clicked me"/>
                <MyButton kata="Smash" onSmash={()=>alert("You smashed me")}/>
                <Toolbar onClick={(e)=>{
                    e.stopPropagation();
                    alert("You clicked me")
                }}/>
                <SearchForm type=""/>
                <SayHelloForm/>
                <CounterWrong/>
                <CounterTrue/>
            </Container>
        </StrictMode>
    );

