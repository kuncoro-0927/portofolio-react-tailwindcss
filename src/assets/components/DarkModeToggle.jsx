// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import "@theme-toggles/react/css/Within.css";
import { Within } from "@theme-toggles/react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('dark-mode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dark-mode', isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="text-3xl cursor-pointer"
    >
      <Within duration={750} />
    </div>
  );
};

export default DarkModeToggle;
