import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Button from "./Button";

export default function Mode({ darkMode, setDarkMode }: any) {
  const [active, setActive] = useState(false);
  const [currentMode, setCurrent] = useState("system");

  const setAct = () => {
    active ? setActive(false) : setActive(true);
  };
  const setSystem = () => {
    setCurrent("system");
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
      localStorage.theme = "dark";
    } else {
      setDarkMode(false);
      localStorage.theme = "light";
    }
  };
  const setLight = () => {
    setCurrent("light");
    setDarkMode(false);
    localStorage.theme = "light";
  };
  const setDark = () => {
    setCurrent("dark");
    setDarkMode(true);
    localStorage.theme = "dark";
  };

  return (
    <div
      className={
        "h-[1.8rem] lg:h-[2.2rem] flex flex-col items-center gap-4 lg:gap-6 text-base"
      }
    >
      <div
        className={`${
          active ? "flex" : "hidden"
        } fixed bottom-[7rem] sm:bottom-[5.5rem] sm:right-4 flex-col text-white`}
      >
        <button
          className={`py-2 px-4 rounded-t-lg ${
            currentMode === "system" ? "bg-gray-600" : "bg-gray-800"
          } hover:bg-gray-600`}
          onClick={setSystem}
        >
          System
        </button>
        <button
          className={`py-2 px-4 ${
            currentMode === "light" ? "bg-gray-600" : "bg-gray-800"
          } hover:bg-gray-600`}
          onClick={setLight}
        >
          Light
        </button>
        <button
          className={`py-2 px-4 rounded-b-lg ${
            currentMode === "dark" ? "bg-gray-600" : "bg-gray-800"
          } hover:bg-gray-600`}
          onClick={setDark}
        >
          Dark
        </button>
      </div>
      <Button icon={darkMode ? faSun : faMoon} click={setAct} />
    </div>
  );
}
