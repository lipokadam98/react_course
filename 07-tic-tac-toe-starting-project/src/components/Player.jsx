import {useState} from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false)

    function setIsEditingValue(){
        //It is important to use a function when updating states, because
        //it will use the latest value from the state
        setIsEditing(editing => !editing);
    }

    let btnCaption = isEditing ? 'Edit' : 'Save';

    return  <li>
                  <span className="player">
                      {
                          isEditing ?
                          <input type='text' required value={name} /> :
                          <span className='player-name'>{name}</span>
                      }
                      <span className='player-symbol'>{symbol}</span>
                  </span>
                <button onClick={setIsEditingValue}>{btnCaption}</button>
            </li>
}