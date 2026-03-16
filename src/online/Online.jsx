import { useOnline } from "./OnlineHook.jsx";

export default function Online(){
    const isOnline = useOnline();
    return(
        <h1>
          status:{isOnline ? "Online " : "Offline"}
        </h1>
    );
}