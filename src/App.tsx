import { Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Auth/Login';
import { useContext } from 'react';
import { ThemeContext } from './contexts/themeContext';
import { Input } from './components/Inputs';
import { Button } from './components/Button';
import { MainIcon } from './components/Icons';

function App() {
  const { themeMode } = useContext(ThemeContext);

  return (
    <div className={`theme-${themeMode} bg-primary text-primary box-border`}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div className='bg-primary'>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
        <Input type='text' name='no match' />
        <button>TEST</button>
        <select name='test' id='test'>
          <option value='1'>1</option>
          <option value='2'>2</option>
        </select>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <ol>
          <li>1</li>
          <li>2</li>
        </ol>
        <a href='http://www.google.com' target='_blank'>
          Google
        </a>
        <Button type='button' variant='secondary'>
          secondary BUTTON
        </Button>
        <Button type='button' variant='primary'>
          primary button
        </Button>
        <Button type='button'>default button</Button>
        <div className='w-20 bg-red-200'>
          <Button type='button'>
            <MainIcon />
          </Button>
        </div>
      </p>
    </div>
  );
}

export default App;
