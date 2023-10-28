import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import { ShoppingCartContext } from "./../../Contex"

export default function Navbar() {
  const contex = useContext(ShoppingCartContext)


  let activeStyle = 'underline underline-offset-4'
  return (
    <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light bg-white-600'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? activeStyle : 'undefined'
            }>
            My shopy
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/eats'
            className={({ isActive }) =>
              isActive ? activeStyle : 'undefined'
            } >
            Eats
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) =>
              isActive ? activeStyle : 'undefined'
            } >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) =>
              isActive ? activeStyle : 'undefined'
            } >
            Others
          </NavLink>
        </li>

      </ul>
      <ul className='flex items-center gap-3'>
        <li className='text-black/60'>
          git:pedroPab
        </li>
        <li>
          <NavLink
            to='/my-order'
            className={({ isActive }) =>
              isActive ? activeStyle : 'undefined'
            } >
            My order
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : 'undefined'
            } >
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) =>
              isActive ? activeStyle : 'undefined'
            } >
            Sign in
          </NavLink>
        </li>
        <li className='flex items-center'>
          <ShoppingCartIcon className="h-6 w-6 text-black-500" />
          <div> {contex.count}</div>
        </li>

      </ul>
    </nav>
  )

}
