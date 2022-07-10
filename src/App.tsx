import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Home from './features/home/Home';
import { Counter } from './features/counter/Counter';

export default function App(): React.ReactElement {
  return (
    <div className="App">
      <header className="App-header">
        <h3>rrts-starter</h3>
        <p><i>Run successfully</i></p>
      </header>

      <nav className="App-nav">
        <Link to="/">Home</Link> |{" "}
        <Link to="/my-counter">Counter</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="my-counter" element={<Counter />} />
        </Routes>
      </main>
    </div>
  );
}
