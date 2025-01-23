import { CiMenuBurger } from 'react-icons/ci'
import DarkModeToggle from './DarkModeToggle'
import React from 'react'

interface DarkModeToggleProps {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}
const Nav: React.FC<DarkModeToggleProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav className='nav-container'>
      <img
        src='https://www.rabbitmart.com/wp-content/uploads/elementor/thumbs/Asset-10-q6bixaww73khoyt329gk8huy9ndd67tuk64nyp4dnc.png'
        alt='logo'
      />
      {/* <CiMenuBurger color="#e0fe14" size={25}/> */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
    </nav>
  )
}

export default Nav
