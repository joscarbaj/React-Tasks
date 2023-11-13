import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

import {useState,useEffect} from 'react'
function App() {

  const [tasks, setTask] = useState([]);






  return (
    <div className="bg-zinc-900 h-screen flex justify-center">
      <div className="p-5">
      <TaskForm/>
      <TaskList/>
      </div>
    </div>
  );
}

export default App;
