import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

import Navbar from './components/Navbar';

import { Routes, Route } from "react-router-dom"
import SingleUser from './components/SingleUser';


function App() {
  return (
    <div className="flex">
     <Navbar/>
      <Routes>
      <Route path="/" element={<SingleUser/>} />
      <Route path="/updateuser/:id" element={<UpdateUser/>} />
      <Route path="/create" element={<CreateUser/>} />
      </Routes>
    </div>
  );
}

export default App;
