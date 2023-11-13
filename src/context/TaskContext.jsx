import { createContext, useState,useEffect } from "react";
export const TaskContext = createContext();
import { tasks as data } from "../tareas/task";

export function TaskContextProvider(props) {
  const [tasks, setTask] = useState([]);
  console.log("hola")
  useEffect(() => {
    setTask(data);
  },[]);

  const createTasks = (taskTitle, descripcion) => {
    setTask([
      ...tasks,
      {
        title: taskTitle,
        id: parseInt(tasks.length),
        descripcion: descripcion,
      },
    ]);
    ;
  };


  

  const deleteTasks = (taskId) => {
    setTask(tasks.filter((n) => n.id !== taskId));
  };
  return (
    <TaskContext.Provider value={{ tasks, createTasks, deleteTasks }}>
      {props.children}
    </TaskContext.Provider>
  );
}
