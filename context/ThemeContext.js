"use client"

import React, { useState, createContext } from "react";

export const ThemeContext = createContext();
export const ThemePovider = ({ children }) => {
    const [mode, setMode] = useState("dark");

    const toggle = () => {
        setMode((prev) => prev === "dark" ? "light" : "dark");
    }

    return (
        <ThemeContext.Provider value={{ toggle, mode }}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
}