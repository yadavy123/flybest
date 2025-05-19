import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="bg-[#1E1E20] h-screen flex flex-col overflow-hidden">
      <div className="flex-shrink-0">
        <Header />
      </div>


      <div className="flex flex-1 overflow-hidden">
        
        <div className="hidden lg:block w-[280px] overflow-y-auto border-r border-[#ffffff20] h-full">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
