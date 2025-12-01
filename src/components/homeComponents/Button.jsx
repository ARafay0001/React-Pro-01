import React from 'react'
import { Link, NavLink } from "react-router-dom";
const Button = ({content, to}) => {
  return (
    <div className='inline-flex  leading-18 pt-1 items-center justify-center rounded-full border-3'>
        <Link to={to} className='text-[6vw] text-white font-[font300] px-6 uppercase' >
            {content}
        </Link>
    </div>
  )
}

export default Button
