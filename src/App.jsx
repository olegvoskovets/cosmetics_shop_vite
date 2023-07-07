import { useState } from "react";

import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <nav>
        <NavLink to="/cosmetics_shop_vite/">Home</NavLink> {"|"}
        <NavLink to="/cosmetics_shop_vite/contacts">Contacts</NavLink>
      </nav>
      <Outlet />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
