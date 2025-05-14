import {useRef} from "react";

export default function AddProject({cancelClicked,saveClicked}){
    //Input refs
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const dateRef = useRef(null);

    function handleProjectSave(){
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;
        const date = dateRef.current.value;

        if(!title || !description || !date){
            return;
        }

        const project = {
            title,
            description,
            date,
        }
        saveClicked(project);
    }

    return <form className="flex flex-col w-full">
            <div className="flex flex-row justify-end gap-4">
                <button onClick={cancelClicked}>
                    Cancel
                </button>
                <button type="button"
                        onClick={handleProjectSave}
                        className="bg-zinc-900 text-teal-50 pt-2 pb-2 pr-4 pl-4 rounded hover:bg-zinc-700">
                    Save
                </button>
            </div>
            <div>
                <p>Title</p>
                <input maxLength={20} ref={titleRef} type="text" className="w-full bg-gray-200"/>
            </div>
            <div>
                <p>Description</p>
                <textarea ref={descriptionRef} className="w-full"></textarea>
            </div>
            <div>
                <p>Due date</p>
                <input ref={dateRef} type="date" className="w-full"/>
            </div>
    </form>
}
