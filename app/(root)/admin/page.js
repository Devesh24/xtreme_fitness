import Link from 'next/link'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='w-full h-screen flex-center'>
        <Link href={"/admin/create-muscle-group"}>Create new Muscle Group</Link>
        <Link href={"/admin/create-exercise"}>Create new exercise</Link>
    </div>
  )
}

export default AdminPage