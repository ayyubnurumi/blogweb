import React from 'react'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <div className='text-center'>
      <Link to={'/'} className='btn btn-success m-5'>back to home</Link><Link to={'/signin'} className='btn btn-warning m-5'>back to signIn</Link>
    </div>
  )
}
