import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/main/Main';
import Purchase from './pages/purchase/Purchase';
import ContactUs from './pages/ContactUs';
import Circular from './pages/circular/Circular';

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
              <li><Link to="/">მთავარი</Link></li>
              <li><Link to="/purchase">შეძენა</Link></li>
              <li><Link to="/legacy">ჩვენ შესახებ</Link></li>
              <li><Link to="/ContactUs">კონტაქტი</Link></li>
            </ul>
          </nav>
          <button className="register">
              დაგვირეკეთ
          </button>
        </div>

      </header>
      <Routes>
        <Route index path='/' element={<Main />} />
        <Route path='/purchase' element={<Circular />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='/circular' element={<Circular />} />
        <Route path='/Farm' element={<Purchase />} />
      </Routes>
      <footer style={{height:'10dvh', justifyContent:'center', display:'flex', alignItems:'center'}}>All Rights Reserved &copy;</footer>
    </div>
  );
}

export default App;
