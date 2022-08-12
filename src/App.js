import './App.css';
import {Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Signup from './components/Signup';
import Users from './components/Users';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='register' element={<Signup />} />
        <Route path='users' element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
