import './App.css';
import { Routes, Route } from "react-router-dom";

import NavBar from './Components/Routes/Navbar';
import Todo from './Components/Todo/Todo';
import Home from './Components/Routes/Home';
import Contacts from './Components/Routes/Contact';
const App = () => {
  return (  
   <>
    <> 
     <NavBar/>
     
    <Routes>
          <Route path="/project" element={<Todo/>} /> 
    <Route path="/home" element={<Home />} />
    <Route path="/contact" element={<Contacts/>} />

       
      <Route />
    </Routes>
</>   
   </>
  );
}
 
export default App;