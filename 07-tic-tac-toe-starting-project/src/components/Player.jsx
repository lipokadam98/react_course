import {useState} from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false)

    function setIsEditingValue(){
        setIsEditing(true);
    }
    return  <li>
                  <span className="player">
                      {
                          isEditing ?
                          <input className='player-name' value={name}></input> :
                          <span className='player-name'>{name}</span>
                      }
                      <span className='player-symbol'>{symbol}</span>
                  </span>
                <button onClick={setIsEditingValue}>Edit</button>
            </li>
}