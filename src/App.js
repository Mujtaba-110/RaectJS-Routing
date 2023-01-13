import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Layout from './layouts/layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/home' exact element={<Home/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/signup' exact element={<Signup/>}/>
        </Routes>
        </Layout>
      </Router>

    </div>
  );
}

export default App++
