import { BrowserRouter } from "react-router-dom";
import logo from './logo.svg';
import { Routes } from './Routes';
import './App.css';

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
