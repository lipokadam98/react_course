export default function AddProject(){
    return <section className="flex flex-col w-full">
            <div className="flex flex-row justify-end gap-4">
                <button>
                    Cancel
                </button>
                <button className="bg-zinc-900 text-teal-50 pt-2 pb-2 pr-4 pl-4 rounded hover:bg-zinc-700">
                    Save
                </button>
            </div>
            <div>
                <p>Title</p>
                <input type="text" className="w-full bg-gray-200"/>
            </div>
            <div>
                <p>Description</p>
                <textarea className="w-full"></textarea>
            </div>
            <div>
                <p>Due date</p>
                <input type="date" className="w-full"/>
            </div>
    </section>
}