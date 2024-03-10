import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main/Main';
import Purchase from './pages/purchase/Purchase';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="routes">
      <header>
        <div className="wrap">
          <div className="logo">
            <Link to={'/'}>Star<span>Fish</span></Link>
          </div>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/purchase">Purchase</Link></li>
              <li><Link to="/legacy">Legacy</Link></li>
              <li><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
          </nav>
          <button className="register">
              Call us
          </button>
        </div>

      </header>
      <Routes>
        <Route index path='/' element={<Main />} />
        <Route path='/purchase' element={<Purchase />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/' element={<Main />} />
        <Route path='/' element={<Main />} />
      </Routes>
      <footer style={{height:'10dvh', justifyContent:'center', display:'flex', alignItems:'center'}}>All Rights Reserved &copy;</footer>
    </div>
  );
}

export default App;
