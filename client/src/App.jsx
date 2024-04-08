
import './App.css';
import CreateExpense from './component/CreateExpanse';
import EditData from './component/EditData';
import Home from './component/Home';
import Login from './component/Login';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <Routes>
       <Route path='/login' element={<Login/>}/>
       <Route path='/' element={<Home/>}/>
       <Route path='/edit' element={<CreateExpense/>}/>
       <Route path='/update/:id' element={<EditData/>}/>
      </Routes>
    </div>
  );
}

export default App;
