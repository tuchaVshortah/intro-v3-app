'use client'
import db from '@/utils/db'
import { revalidatePath } from 'next/cache'
import { startTransition, useTransition } from 'react'
import { completeTodo } from '@/utils/actions'

const Todo = ({ todo }) => {
  const [pending, setPending] = useTransition()
  return (
    <div className={`border border-black/20 cursor-pointer ${todo.completed ? 'line-through text-gray-900': ''}`} onClick={() => setPending(() => completeTodo(todo.id))}>{todo.content}</div>
  )
}

export default Todo