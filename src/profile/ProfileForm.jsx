export default function ProfileForm({nama,setName}){
   function handleChange(e){
    setName(e.target.value);
   }
   
    return(
        <>
        <h2>Profile Form</h2>
        <input type="text" value={nama} onChange={handleChange}/>
        </>
    )
}