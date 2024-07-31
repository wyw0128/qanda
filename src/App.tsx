import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Auth/Login';
import { useContext } from 'react';
import { ThemeContext } from './contexts/themeContext';

function App() {
  const { themeMode } = useContext(ThemeContext);

  return (
    <div className={`theme-${themeMode} bg-primaryBg`}>
      <Routes>
        <Route path='/' element={<Login />}>
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  );
}

export default App;
