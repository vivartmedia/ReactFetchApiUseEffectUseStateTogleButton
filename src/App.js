import HomePageComponent from './components/HomePageComponent';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfilePageComponent from './components/ProfilePageComponent';
import UserContext from './UserContext/UserContext';
import UserHooks from './Hooks/UserHooks';

function App() {
  return (

    //Provider allows accesss to its value which in this case is Userhooks to all componenents, we call user  
    //hooks through our UserContext within our components.
    <UserContext.Provider value={UserHooks()}>
      <BrowserRouter>
    <Routes>
      <Route path='/' element = {<HomePageComponent/>}/>
      <Route path='/profile' element = {<ProfilePageComponent/>}/>
    </Routes>
    </BrowserRouter>
    </UserContext.Provider>
    
  );
}

export default App;
