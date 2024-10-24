import './App.css';
import { BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom';
import Login from './component/Auth/Login';
import WatchList from './component/Movies/WatchList';
import SearchMovies from './component/Movies/SearchMovies';
import MoviesDetails from './component/Movies/MoviesDetails';
import LogOut from './component/Auth/LogOut';
import MainPage from './component/Layout/MainPage';

function App() {
  return (
    <div className="App">
    <h1>heee</h1>

    {/* <Login/> */}


   <Router>
      <Routes>
     
        <Route path="/" element={<Navigate to="/main" />}/>
         <Route path='/main' element={<MainPage/>}/>
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
