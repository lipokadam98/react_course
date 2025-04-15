import {useState} from "react";

export default function Player({initialName, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(initialName);

    const [isEditing, setIsEditing] = useState(false)

    function setIsEditingValue(){
        //It is important to use a function when updating states, because
        //it will use the latest value from the state
        setIsEditing(editing => !editing);
        if(isEditing){
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }

    const btnCaption = isEditing ? 'Save' : 'Edit';

    const nameElement = isEditing ?
        <input type='text' required value={playerName} onChange={handleChange}/> :
        <span className='player-name'>{playerName}</span>;

    return  <li className={isActive? 'active' : undefined}>
                  <span className="player">
                      {nameElement}
                      <span className='player-symbol'>{symbol}</span>
                  </span>
                <button onClick={setIsEditingValue}>{btnCaption}</button>
            </li>
}