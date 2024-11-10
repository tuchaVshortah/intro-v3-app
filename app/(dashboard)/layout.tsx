import NewTodoForm from '@/components/NewTodoForm'
import React from 'react'

const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div>
      <h1>DashboardLayout</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout