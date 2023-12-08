"use client"
import { createContext, useState } from "react";
export const GetThemeContext = createContext()
export const ThemeContext = ({ children }) => {
    const [menuStatus, setMenuStatus] = useState(false);
    return (
        <GetThemeContext.Provider value={{ menuStatus, setMenuStatus }}>{children}</GetThemeContext.Provider>
    )
}