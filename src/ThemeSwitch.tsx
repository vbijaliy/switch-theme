import React from "react";

interface ThemeSwitchProps {
  themeState?: string,
  children?: React.ReactNode
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ themeState, children }) => {
  return <div className={themeState ? themeState : 'light'}>
    {children}
  </div>
}

export default ThemeSwitch;
