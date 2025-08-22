import './Theme.css';
import { useEffect, useState } from 'react';
import { MdOutlineWbSunny } from "react-icons/md";
import { BsMoon } from "react-icons/bs";

export default function Theme() {
   
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className={`${theme  === "dark" ? "dark" : ""} grid place-items-center fixed top-5 right-10 text-2xl`}>
      <div className="bg-zinc-300 p-2 rounded-lg dark:bg-zinc-800">
      <button onClick={() => {
        setTheme("");
      }} 
      className="bg-transparent p-3 rounded-lg hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-600">
        <MdOutlineWbSunny/>
      </button>
      <button onClick={() => {
        setTheme("dark");
      }}
      className="bg-transparent p-3 rounded-lg hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-600">
        <BsMoon/>
      </button>
      </div>
    </div>
  );
}