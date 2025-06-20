import {useEffect, useRef, useState} from "react";

export default function Message({messages, timeout, title}) {
    const [dialogOpen, setDialogOpen] = useState(false);

    const timeoutRef = useRef(null);
    useEffect(()=>{
        setDialogOpen(true);

        timeoutRef.current = setTimeout(()=>{
            setDialogOpen(false);
        },timeout)

        return ()=>{
            clearTimeout(timeoutRef.current);
        }
    },[messages])

    return <dialog open={dialogOpen}
                   style={{borderRadius: '1rem', border: 'none', minWidth: '24rem'}
            }>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h2>{title}</h2>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <ul>{messages.map(message => <li key={message}>{message}</li>)}</ul>
            </div>

        </div>

    </dialog>
}