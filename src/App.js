import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home  from './pages/Home.js';
import Profile  from './pages/Profile.js';
import Search  from './pages/Search.js';
import Service  from './pages/Service.js';

 

function App() {
  return (
   <> 
     <BrowserRouter>
      <Routes>
       <Route path = "/" element={<Home/>}/>
       <Route path = "/profile/:companyName" element={<Profile/>}/>
       <Route path = "/search" element={<Search/>}/>
       <Route path = "/service" element={<Service/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
