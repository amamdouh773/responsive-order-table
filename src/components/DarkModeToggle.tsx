import React from 'react'
import { MdLightMode,MdNightlightRound  } from 'react-icons/md'
// import { MdDarkMode } from 'react-icons/md'

interface DarkModeToggleProps {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  darkMode,
  setDarkMode
}) => {
  return (
    // <button onClick={() => setDarkMode(!darkMode)} >
    //   {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    // </button>
    <>
      {darkMode ? (
        <MdLightMode color='#e0fe14' cursor="pointer" size={25} onClick={() => setDarkMode(!darkMode)} />
      ) : (
        <MdNightlightRound color='#e0fe14' size={25} cursor="pointer" onClick={() => setDarkMode(!darkMode)} />
      )}
    </>
  )
}

export default DarkModeToggle
