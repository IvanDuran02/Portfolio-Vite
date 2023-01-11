import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import Navbar from "./Components/Navbar";
const App = () => {
  const [theme, setTheme] = useState("#FAF9F6");
  const [themeToggle, setThemeToggle] = useState(true);
  useEffect(() => {
    if (themeToggle) {
      setTheme("#FAF9F6");
    } else {
      console.log("black");
      setTheme("#212121");
    }
  }, [themeToggle]);
  return (
    <main className={`w-screen h-screen p-[12vh] bg-[${theme}]`}>
      <Navbar theme={theme} themeToggle={themeToggle} />
    </main>
  );
};

export default App;
