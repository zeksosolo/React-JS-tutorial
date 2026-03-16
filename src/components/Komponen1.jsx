//(7)untuk import css dari file lain 
import "./Komponen1.css";

export default function Komponen1() {
    const kata12={
        kata12:"Gigu gaga"
    }
     const kata2={
        kata2:"lady gaga"
    }
    const kata112={
        kata112:"Gokgok gaga"
    }
    return (
        //disini buat manggil fungsi yg ingin di style dan bisa tambahkan tulisannya
        //(2) disini untuk manggil fungsi yg sudh di deskripsikan
        //  <HeaderKomponen1/> 
        //(3) sekarang untuk forward bisa meneruskan {...props}
        <div>
            <HeaderKomponen1/>
            <ParagraphKomponen1/>
            <JavaScriptJSX/>
            <JavaScriptJSX2/>
            <JavaScriptJSX3/>
            <JavaScriptJSX4 {...kata2}/>
            <JavaScriptJSX5 {...kata12}/>
            <JavaScriptJSX6 {...kata112}/>
        </div>

    );
}
//(1)kOMPONEN DIPECAH SUPAYA NANTI DI EXPORT DEFAULT BISA DIPANGGIL
function HeaderKomponen1(){
//penggunaan classname untuk style css
    return (
        <div>
            <h1 className="title">Header Komponen 1</h1>
        </div>
    );
}
//kOMPONEN DIPECAH SUPAYA NANTI DI EXPORT DEFAULT BISA DIPANGGIL
function ParagraphKomponen1(){
    return (
        <div>
            <p className="content">Paragraph Komponen 1</p>
        </div>
    );
}

//(4)Untuk ekspresi sehingga kata kata yang ingin di ekspresikan dengan uppercase/lowercase/substring/dll
function JavaScriptJSX(){
    const kata2 = "Kostum ekspresi";
    return (
        //Untuk fungsi kurawal ini hanya teks dan gambar yg bisa
       <h1>{kata2.toUpperCase()}</h1>
    );
}

function JavaScriptJSX2(){
    const kata2 = "Kostum ekspresi";
    return (
       <h1>{kata2.toLowerCase()}</h1>
    );
}

function JavaScriptJSX3(){
    const kata2 = "Kostum ekspresi";
    return (
       <h1>{kata2.substring(0,5)}</h1>
    );
}

//(5)Berfungsi untuk style kata kata dengan menggunakan kurawal 
export function JavaScriptJSX4({kata2}){
    const style= {
        color: "red",
        backgroundColor: "blue"
    }
    return (
        <p style={style}>{kata2}</p>
    )
}

//(6)Propeties(props)
function JavaScriptJSX5({kata12="Gugu gaga"}){
    return(
        <h1 style={{
            color: "red",
            backgroundColor: "blue"
        }}>{kata12}</h1>
    ) 
}

//Propeties(props)
function JavaScriptJSX6({kata112="Gugu gaga"}){
    return(
        <h1 style={{
            color: "red",
            backgroundColor: "blue"
        }}>{kata112}</h1>
    )
}
