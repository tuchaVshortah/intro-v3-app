import React from 'react'
import { newTodo } from '@/utils/actions'

const NewTodoForm = ({ }) => {
  return (
    <div>
      <form action={newTodo} className='border border-black/25'>
        <input name="content" type="text" />
        <button type="submit">new todo</button>
      </form>
    </div>
  )
}

export default NewTodoForm