import './App.css';
//import my components
import NavigationBar from './components/NavigationBar/NavigationBar';
import Login from './components/Login.js/Login';
import SignUp from './components/SignUp.js/SignUp';
import NotFound from './components/NotFound.js/NotFound';
import Home from './components/Home/Home';
//import react router
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route element={<NotFound/>}/>

      </Routes>
    </div>
  );
}

export default App;
