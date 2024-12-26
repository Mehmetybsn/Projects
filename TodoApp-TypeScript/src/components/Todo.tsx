import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { todoType } from '../types/Types';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodo } from '../redux/todoSlice';
 
interface todoProps {
  todoProps: todoType
}



function Todo({todoProps}: todoProps) {
  const{id, content} = todoProps

  const dispatch = useDispatch()

  const [editable, setEditable] =useState<boolean>(false)

  const[newTodo, setNetTodo] = useState<string>(content)

  const handleRemovetodo = () => {
    dispatch(removeTodoById(id))
  }

  const handleUpdateTodo = () => {
    const payload: todoType = {
      id : id,
      content: newTodo
    }
    dispatch(updateTodo(payload))
    setEditable(false)
  }

  return (
    <div className='todo-container'>
        {editable ? <input className='editable' type="text" value={newTodo} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setNetTodo(e.target.value)
        } /> : <div> {content} </div> } 
        <div>
        <IoMdRemoveCircleOutline onClick={handleRemovetodo} className='icons' />
        {
          editable ?<FaCheck onClick={handleUpdateTodo} className='icons' /> : <FaRegEdit onClick={()=> setEditable(true)} className='icons' />
        }
        </div>
    </div>
  )
}

export default Todo