'use server'
import db from '@/utils/db'

interface newTodoProps {
    content: string
}

export const newTodo = async ({ content }: newTodoProps) => {
    const todo = await db.todo.create({
        data: {
            content: content,
        }
    })
}