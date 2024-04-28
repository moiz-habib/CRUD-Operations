import { EmployeeForm } from '@/components/employee-form'
import { FormWrapperCard } from '@/components/form-wrapper-card'
import React from 'react'

const EmployeeCreatePage = () => {
  return (
    <main className='flex justify-center items-center h-screen '>
        <FormWrapperCard title='Create a New Employee'>
            <EmployeeForm/>
        </FormWrapperCard>
    </main>
  )
}

export default EmployeeCreatePage