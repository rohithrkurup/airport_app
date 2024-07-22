import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Services from './component/Services';
import Contact from './component/Contact';
import Faq from './component/Faq';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faq' element={<Faq/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
