import { useState } from "react";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={
        darkMode
          ? "bg-black text-white min-h-screen py-4 text-center "
          : "bg-white text-black py-4 text-center"
      }
    >
      <h1 className="text-5xl font-bold">Dark / Light Mode</h1>
      <button
        className="bg-blue-500 px-4 py-2 rounded-lg text-white text-lg mt-10 font-medium"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};
export default Toggle;
