import Sidebar from "./components/Sidebar.jsx";
import AddProject from "./components/AddProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useEffect, useState} from "react";
import ProjectDetail from "./components/ProjectDetail.jsx";

function App() {
    const [showAddProject, setShowAddProject] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // run something every time projects changes
        if(selectedProject){
            handleProjectSelection(selectedProject.id);
        }
    }, [projects]);

    function handleProjectSave(project){
        setProjects(prevState => [
            ...prevState,
            {
                id: Math.random(),
                title: project.title,
                description: project.description,
                date: project.date,
                tasks: []
            }
        ])
    }

    function handleProjectSelection(id){
        const foundProject = projects.find(project => project.id === id);
        setSelectedProject(foundProject);
    }

    function showAddProjectComponent(){
        setShowAddProject(true);
        setSelectedProject(null);
    }

    function addTaskToProject(title){
        setProjects(prevState => prevState.map(a => (a.id === selectedProject.id ? {...a, tasks: [...a.tasks, { id: Math.random(), title}]} : a)));
    }

    function handleDeleteProject(){
        setProjects(prevState => prevState.filter(project => project.id !== selectedProject.id));
        setSelectedProject(null);
        setShowAddProject(false);
    }

  return (
    <>
        <Sidebar projects={projects}
                 addProjectClicked={showAddProjectComponent}
                 selectProjectClicked={handleProjectSelection}
        >
        </Sidebar>
        <main className="h-screen pl-72 flex flex-col items-center justify-center pr-8">
            {(!showAddProject && !selectedProject) && <NoProjectSelected createProjectClicked={showAddProjectComponent}/>}
            {(showAddProject && !selectedProject) &&
                <AddProject cancelClicked={()=> setShowAddProject(false)}
                            saveClicked={handleProjectSave}
                />
            }
            {selectedProject && <ProjectDetail project={selectedProject} addTaskClicked={addTaskToProject} deleteClicked={handleDeleteProject}/>}
        </main>
    </>
  );
}

export default App;
