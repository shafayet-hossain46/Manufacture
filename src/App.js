import logo from './logo.svg';
import './App.css';
import Home from '../src/Pages/Home/Home'
import {
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './Pages/Home/NotFound/NotFound';
import Login from './Pages/Home/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
