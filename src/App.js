import './App.css';
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom';
import Login from './component/Auth/Login';
import MainPage from './component/Layout/MainPage';
import MyList from './component/Movies/MyList';
import { useState } from 'react';

function App() {
  const [searchMovies,setSearchMovies]=useState('')
  return (
    <div className="App">

   <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      
      <Route path="/login" element={<Login />} />
      
      <Route path="/main" element={<MainPage searchMovies={searchMovies} />} />
      <Route path="/MyList" element={<MyList searchMovies={searchMovies} />} />
      
      
     </Routes>
    </Router>
     
    </div>
  );
}

export default App;
