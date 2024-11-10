'use server'
import db from '@/utils/db'

interface newTodoProps {
    content: string
}

export const newTodo = async (formData: FormData) => {
    const todo = await db.todo.create({
        data: {
            content: formData.get('content') as string,
        }
    })
}