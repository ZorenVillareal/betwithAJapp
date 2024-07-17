import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';
const App = ()=> {
  return (
    <>
      <Header/>
      <Outlet/>
        {/* <h1> MERN Auth</h1> */}
    </>
  )
}

export default App;
