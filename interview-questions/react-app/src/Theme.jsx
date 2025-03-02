import React, { useState } from "react";

export const ThemeContext = React.createContext();

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContextProvider = ({ children }) => {
  //children -> all components provided to parent component ThemeontextProvider
  const [theme, setTheme] = useState(themes.light);
  const [activeTheme, setActiveTheme] = useState("light");
  const toggleTheme = () => {
    const nextTheme = activeTheme === "light" ? "dark" : "light";
    setTheme(themes[nextTheme]);
    setActiveTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
