import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Report from './Components/Report/Report';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Logout from './Components/Logout/Logout'
import Chatbot from './Components/Chatbot/Chatbot';
import { useState } from 'react';


function App() {

   const [User, setUser] = useState({}) 

  return (
    <div>
     
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={User.username && User.ip_address ? <Home users={User} setUsers={setUser} /> : <Login users={User} setUsers={setUser}  />}/>
          
          <Route exact path='/about' element={User.username && User.ip_address ? <About users={User} setUsers={setUser} /> : <Login users={User} setUsers={setUser} />}/>
          
          <Route exact path='/report' element={User.username && User.ip_address ? <Report  users={User} setUsers={setUser} /> : <Login  users={User} setUsers={setUser} />}/>
          
          <Route exact path='/contact' element={User.username && User.ip_address ? <Contact  users={User} setUsers={setUser} /> : <Login  users={User} setUsers={setUser} />}/>
          
          <Route exact path='/chatbot' element={User.username && User.ip_address ? <Chatbot  users={User} setUsers={setUser} /> : <Login  users={User} setUsers={setUser} />}/>
          
          <Route exact path='/login' element={<Login  users={User} setUsers={setUser}  />}/>

          <Route exact path='/logout' element={<Logout  users={User} setUsers={setUser}  />}/>
          
          <Route exact path='/signUp' element={<SignUp users={User} setUsers={setUser}  />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
