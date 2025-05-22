import {useEffect, useState} from "react";

export default function ProgressBar({timer}){
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(()=>{
        const intervalRef = setInterval(() => {
            setRemainingTime(prevState => prevState - 10)
        },10);

        return () => {
            clearInterval(intervalRef);
        }
    },[])

    return <progress value={remainingTime} max={timer}/>;
}