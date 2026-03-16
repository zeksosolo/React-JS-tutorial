import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm.jsx";
import NoteList from "./NoteList.jsx";
import { NotesContext, NotesDispatchContext } from "./NoteContext.jsx";

let id = 0;
const initialNotes = [
    { id: id++, text: "Belajar React", done: true },
    { id: id++, text: "Belajar Vite", done: false },
    { id: id++, text: "Belajar Tailwind", done: false },
];

// Immer Reducer: parameter pertama adalah "draft" (bisa dimutasi langsung)
// Tidak perlu return data baru, cukup ubah draft seperti useImmer
function notesReducer(draft, action) {
    if (action.type === 'ADD_NOTE') {
        draft.push({
            id: id++,
            text: action.text,
            done: false
        });
    } else if (action.type === 'CHANGE_NOTE') {
        const index = draft.findIndex(note => note.id === action.id);
        draft[index].text = action.text;
        draft[index].done = action.done;
    } else if (action.type === 'DELETE_NOTE') {
        const index = draft.findIndex(note => note.id === action.id);
        draft.splice(index, 1);
    }
}

export default function NoteApp() {
    const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);



    return (
        <div>
            <NotesContext.Provider value={notes}>
                <NotesDispatchContext.Provider value={dispatch}>
                    <h1>Note App</h1>
                    <NoteForm />
                    <NoteList />
                </NotesDispatchContext.Provider>
            </NotesContext.Provider>
        </div>
    )
}