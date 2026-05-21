import { createContext, useContext, useState } from "react";

const ThemeContext = createContext("light");

function ThemedBox() {
  const theme = useContext(ThemeContext);

  const style = {
    background: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#333",
    padding: "20px",
    borderRadius: "8px",
  };

  return <div style={style}>The theme now: {theme}</div>;
}

function ContextApi() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change theme
      </button>
      <ThemedBox />
    </ThemeContext.Provider>
  );
}

export default ContextApi;
