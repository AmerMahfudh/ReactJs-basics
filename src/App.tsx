import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import NavBar  from './components/Navbar'
import Heading from './components/Heading/Heading';
import LoginForm from './components/LoginForm';
import { IUserData } from './interfaces';
import UserDetails from './components/UserDetails';


function App() {
  // const [count, setCount] = useState(0)
  const greeting = 'point on line';
  const aboutus = 'about us';
  const [IsLogged, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState<IUserData>({
    username: '',
    email: '',
    password: '',
    address: '',
    fullName: '',
  });
  return (
    <>
      <NavBar company={greeting} About={aboutus} IsLogged={IsLogged} setIsLoggedIn={ setIsLoggedIn} />
      {IsLogged ? <UserDetails user={userData} />:<LoginForm setIsLoggedIn={setIsLoggedIn } userData={userData}setUserData={setUserData} /> }
      <Heading title={"Heading Title"}>
        <span>value❤:-P💋🍠🍗🍖</span>
      </Heading>
      {/* {greeting }
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
