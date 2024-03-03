import HomePageComponent from './components/HomePageComponent';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProfilePageComponent from './components/ProfilePageComponent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<HomePageComponent/>}/>
      <Route path='/profile' element = {<ProfilePageComponent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
