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
import Header from './SharedComponents/Header/Header';
import Purchase from './Pages/Purchase/Purchase';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/MyOrders/MyOrders';
import Reviews from './Pages/Reviews/Reviews';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="/dashboard/myOrders" element={<MyOrders />} />
          <Route path="/dashboard/review" element={<Reviews />} />
        </Route>
        <Route path="/purchase/:id" element={<Purchase />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
