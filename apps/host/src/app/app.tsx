import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('home/Module'));
const Watchlist = React.lazy(() => import('watchlist/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
