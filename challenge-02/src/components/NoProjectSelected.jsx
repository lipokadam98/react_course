import noProjectsPng from "../assets/no-projects.png";

export default function NoProjectSelected(){
    return <section className="flex flex-col items-center justify-center gap-4">
        <img src={noProjectsPng} alt="No projects selected" className="h-16"/>
        <h1 className="text-xl capitalize font-bold text-gray-600">
            No project selected
        </h1>
        <p className="text-gray-400">
            Select a project or get started with a new one
        </p>
        <button className="bg-stone-700 text-gray-300 pt-2 pb-2 pr-4 pl-4 rounded hover:bg-stone-500">
            Create new project
        </button>
    </section>
}