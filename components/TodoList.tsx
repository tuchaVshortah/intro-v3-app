'use client'

import React from 'react'
import Todo from './Todo'

interface TodoListProps {
  todos: { id: number; [key: string]: any }[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </>
  )
}

export default TodoList