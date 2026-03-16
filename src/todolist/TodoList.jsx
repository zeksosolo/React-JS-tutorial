import Todo from "./Todo";

export default function TodoList() {
    //(1) tanpa isDeketed true itu
    //(2) untuk return null menggunakan fungsi tambahan di todo atau logic if else
    //(3) collection component untuk data
    const data = [
        {
            kata: "Makan",
            isCompleted: true,
            isDeleted: true
        },
        {
            kata: "Minum",
            isCompleted: false,
            isDeleted: false
        },
        {
            kata: "Tidur",
            isCompleted: false,
            isDeleted: false
        }
    ]

    const todos= data.map((todo)=>{
        return <Todo {...todo}/>   
    })
    return (
        <ul>
            {todos}
        </ul>

    )
} 