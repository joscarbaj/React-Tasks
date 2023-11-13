import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskCard({task}) {
  const deleteTasks = useContext(TaskContext).deleteTasks

  return (
    <div className= "bg-gray-800 text-white p-5 rounded-md ">
    <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
    <p className='text-gray-500 text-sm'>{task.descripcion}</p>
 
  <button className='bg-red-500 px-2 py-2 rounded-md mt-5 hover:bg-red-400' onClick={()=> deleteTasks(task.id)}>Eliminar Tarea</button>
  </div>
  )
}

export default TaskCard