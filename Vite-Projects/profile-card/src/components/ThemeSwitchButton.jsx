import React from 'react'
import { THEMES } from '../lib/constants'
import { ThemeContext } from '../lib/ThemeContext'

const ThemeSwitchButton = () => {

    const [currentTheme, setCurrentTheme] = React.useState(null)

    const { theme, toggleTheme } = React.useContext(ThemeContext)

    React.useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            theme
        );
    }, [currentTheme])

    const handleThemeChange = (selectedTheme) => {
        toggleTheme(selectedTheme)
        setCurrentTheme(selectedTheme)
    }

    return (
        <div className='theme-btn-container'>
            <button className='theme-btn' onClick={() => handleThemeChange(THEMES.LIGHT)}>LIGHT</button>
            <button className='theme-btn' onClick={() => handleThemeChange(THEMES.DARK)}>DARK</button>
            <button className='theme-btn' onClick={() => handleThemeChange(THEMES.GRAY)}>GRAY</button>
        </div>
    )
}

export default ThemeSwitchButton