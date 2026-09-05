import { createContext, useContext, useState } from "react";

const DarkMode = createContext()

const DarkModeProvider = ({ children }) => {
    const [isSun, setIsSun] = useState(() => {
        const saved = localStorage.getItem('myKey')
        return saved ? JSON.parse(saved) : false
    })
    return (
        <DarkMode.Provider value={{ isSun, setIsSun }}>
            {children}
        </DarkMode.Provider>
    )
}

export const useDarkMode = () => useContext(DarkMode)

export default DarkModeProvider