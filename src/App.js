
import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Shipping from './Components/Shipping/Shipping';
import ProtectRoute from './Components/ProtectRoute/ProtectRoute';
import PrivateOutlet from './Components/PrivateOutlet/PrivateOutlet';



function App() {

  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          {/* 1st way */}
          {/* <Route path="/shipping" element={<ProtectRoute>
            <Shipping />
          </ProtectRoute>} /> */}
          {/* 2nd way */}
          <Route path="/*" element={<PrivateOutlet />}>
            <Route path="shipping" element={<Shipping />} />
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
