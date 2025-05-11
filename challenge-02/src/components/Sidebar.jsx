export default function Sidebar(){
    return <nav className="fixed w-64 rounded-r-2xl bg-zinc-900 h-full pt-16 pl-6 pr-4 mt-8">
            <h1 className="text-teal-50 text-xl font-bold uppercase mb-8">
                Your projects
            </h1>
            <button className="text-slate-300 rounded pt-2 pb-2 pl-4 pr-4 bg-stone-700 hover:bg-stone-500 mb-8">
                + Add Project
            </button>
            <ul className="text-teal-50">
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
                <li>Project 4</li>
                <li>Project 5</li>
            </ul>
        </nav>
}