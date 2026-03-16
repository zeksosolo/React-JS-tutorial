
import { useImmer } from "use-immer";

//object
const initialData = {
    name:"",
    email:"",
    message:""
}
export default function ContactForm(){
    const [contact, setContact] =useImmer(initialData);

    function handleNameChange(e) {
        setContact(draft => {
            draft.name = e.target.value;
        })
    }

    function handleEmailChange(e) {
        setContact(draft => {
            draft.email = e.target.value;
        })
    }

    function handleMessageChange(e) {
        setContact(draft => {
            draft.message = e.target.value;
        })
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <form>
                <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChange}/>
                <input type="email" placeholder="Email" value={contact.email} onChange={handleEmailChange}/>
                <textarea placeholder="Message" value={contact.message} onChange={handleMessageChange}></textarea>
            </form>

            <h1> Contact Detail</h1>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Message: {contact.message}</p>
        </div>
    )
}