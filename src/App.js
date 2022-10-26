import logo from './logo.svg';
import './App.css';

import { RouterProvider } from 'react-router-dom';
import { router } from './route/Router';
import { Toaster } from 'react-hot-toast';
import { createContext } from 'react';
import { useState } from 'react';

export const ThemContext = createContext('');

function App() {
  const [them, setThem] = useState(true)
  const webthem = {them,setThem}
  return (
    <ThemContext.Provider value={webthem}>
      <div className={`App ${them? 'bg-white text-black' : 'bg-slate-800 text-slate-100' }`}>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
    </ThemContext.Provider>
  );
}

export default App;
