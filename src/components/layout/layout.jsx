import Header from '../header/header';
import Footer from '../footer/footer';
import { Outlet } from 'react-router';
import './layout.css';

function Layout({ children }) {
  return (
    <div className='container'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
