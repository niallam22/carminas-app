import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {} from 'react-bootstrap'; //select react components to import from bootstrap eg {Button}
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout'
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Routes>
      {/* parent contains the common header layout the children sit inside the Outlet component in Layout*/}
      <Route path='/' element={ <Layout/> }>
        <Route index element={ <IndexPage /> } />
        <Route path='/login' element={ <LoginPage /> } /> 
        <Route path= '/register' element={<RegisterPage/>}/>

      </Route>
    </Routes>

  )
}

export default App;
