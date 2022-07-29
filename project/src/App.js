import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm'
import LookupForm from './components/lookupform';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <RegistrationForm/> } />
        <Route path="/lookup" element={ <LookupForm/> } />
      </Routes>
    </div>
  );
}

export default App;