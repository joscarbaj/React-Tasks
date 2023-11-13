import { useState } from "react";
import { TaskContext, } from "../context/TaskContext";
import { useContext } from "react";
function TaskForm() {
  const [title, settitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const createTasks = useContext(TaskContext).createTasks;
  const handleSubmit = (e) => {
    e.preventDefault();

    createTasks(title, descripcion);
    setDescripcion("");
    settitle("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white text-center">Añadir Tareas</h1>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          settitle(e.target.value);
        }}
        value={title}
        autoFocus

        className="bg-slate-300 p-3 w-full mb-2"
      />

      <textarea
        onChange={(e) => {
          setDescripcion(e.target.value);
        }}
        className="bg-slate-300 p-3 w-full mb-2"

        value={descripcion}
      ></textarea>
      <button
      className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
    </form>
    </div>
  );
}

export default TaskForm;
