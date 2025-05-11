import Sidebar from "./components/Sidebar.jsx";
import AddProject from "./components/AddProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {

    const isProjectSelected = false;
  return (
    <>
        <Sidebar></Sidebar>
        <main className="h-screen pl-72 flex flex-col items-center justify-center pr-8">
            {!isProjectSelected && <NoProjectSelected/>}
            <AddProject/>
        </main>
    </>
  );
}

export default App;
