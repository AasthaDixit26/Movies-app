import './App.css';
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom';
import Login from './component/Auth/Login';
import WatchList from './component/Movies/MyList';
import MoviesDetails from './component/Movies/MovieCard';
import LogOut from './component/Auth/LogOut';
import MainPage from './component/Layout/MainPage';
import MyList from './component/Movies/MyList';
import { useState } from 'react';

function App() {
  const [searchMovies,setSearchMovies]=useState('')
  return (
    <div className="App">
 

    {/* <Login/> */}

    {/* <TextField
          label="Search Movies"
          variant="outlined"
          fullWidth
          value={searchMovies}
          onChange={(e) => setSearchMovies(e.target.value)}
          sx={{ mb: 4 }}
        /> */}


   <Router>
      <Routes>
     
        <Route path="/" element={<Navigate to="/main" />}/>
         <Route path='/main' element={<MainPage searchMovies={searchMovies}/>}/>
         <Route path='/MyList' element={<MyList searchMovies={searchMovies} />}/>
        {/* <Route path="/login" element={<Login/>}/> */}
        {/* <Route path='/searchMovies' element={<SearchMovies/>}/>
        <Route path='/watchList' element={<WatchList/>}/>
        <Route path='/moviesDetails' element={<MoviesDetails/>}/> */}
        {/* <Route path='/home' element={<LogOut/>}/> */}
     </Routes>
    </Router>
     
    </div>
  );
}

export default App;
