import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'

const EditUser = ({user}) => {
  return (
    <div className="text-white  h-[100rem]">
    <div className='flex'>
      <Sidebar className="rounded" />

      <div>
        Edit User
      </div>

    </div>
    </div>
  )
}

export default EditUser