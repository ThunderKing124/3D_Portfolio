import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";

import { Overview, Contact, Experience, Feedbacks, Home, Navbar, Tech, Works, StarsCanvas, About } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div>
          <Routes>
            <Route path ="/" element = {<Layout />} >
              <Route index element = {<Home />} />
              <Route path ="about" element={<About />} />
            </Route>
          </Routes>
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;