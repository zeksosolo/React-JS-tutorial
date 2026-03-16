import Profile from "./Profile.jsx";
import ProfileAddress from "./ProfileAddress.jsx";
import { ProfileContext } from "./ProfileContext.jsx";
import ProfileForm from "./ProfileForm.jsx";
import { useState } from "react";

export default function ProfileApp(){
    const [nama, setName] = useState("Ilham");
    return (
        <>
            <ProfileContext.Provider value={nama}>
                <h1>Profile aplikasi</h1>
                <ProfileForm nama={nama} setName={setName} />
                <Profile />
                <ProfileAddress />
            </ProfileContext.Provider>
        </>
    )
}