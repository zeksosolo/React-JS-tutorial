import { useState, useContext } from "react";
import { NotesDispatchContext } from "./NoteContext.jsx";

export default function Note({ note }) {
    const dispatch = useContext(NotesDispatchContext);
    const [isEditing, setIsEditing] = useState(false);
    let component;

    function handleChangeText(e) {
        dispatch({
            ...note,
            type: 'CHANGE_NOTE',
            text: e.target.value
        })
    }

    function handleChangeDone(e) {
        dispatch({
            ...note,
            type: 'CHANGE_NOTE',
            done: e.target.checked
        })
    }

    function handleDelete() {
        dispatch({
            ...note,
            type: 'DELETE_NOTE',
            id: note.id
        })
    }

    if (isEditing) {
        component = (
            <>
                <input value={note.text} onChange={handleChangeText} />
                <button onClick={() => setIsEditing(false)}>Simpan</button>
            </>
        )
    } else {
        component = (
            <>
                {note.text}
                <button onClick={() => setIsEditing(true)}>Ubah</button>
            </>

        )
    }


    return (
        <label>
            <input type="checkbox" checked={note.done} onChange={handleChangeDone} />
            {component}
            <button onClick={handleDelete}>Hapus</button>
        </label>
    )
}