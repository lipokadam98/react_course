export default function Sidebar({addProjectClicked, projects, selectProjectClicked}){
    return <nav className="fixed w-64 rounded-r-2xl bg-zinc-900 h-full pt-16 pl-6 pr-4 mt-8">
            <h1 className="text-teal-50 text-xl font-bold uppercase mb-8">
                Your projects
            </h1>
            <button onClick={addProjectClicked} className="text-slate-300 rounded pt-2 pb-2 pl-4 pr-4 bg-stone-700 hover:bg-stone-500 mb-8">
                + Add Project
            </button>
            <ul className="text-teal-50">
                {
                    projects.map(project =>
                        <li key={project.id}
                            onClick={()=> selectProjectClicked(project.id)}
                            className="mb-2 p-1 bg-stone-400 rounded cursor-pointer hover:bg-stone-700">
                            {project.title}
                        </li>)
                }
            </ul>
        </nav>
}
