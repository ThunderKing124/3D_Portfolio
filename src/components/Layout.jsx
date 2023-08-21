import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import StarsCanvas from './canvas/Stars.jsx';
const Layout = () =>{
    return(
    <div >
        <Navbar />
        <div >
            <Outlet />
            
        </div>
        {/* <StarsCanvas/> */}
    </div>
    )
}

export default Layout;