import { NavLink } from 'react-router-dom'

export default function Navbar() {
  let activeStyle = 'underline underline-offset-4'
  return (
    <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light'>
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
            My orden
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : 'undefined'
            } >
            My ordens
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

      </ul>
    </nav>
  )

}
