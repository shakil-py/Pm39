import './App.css'
import Home from './component/home';
import NavBar from './component/navbar';

function App() {
  

  return (
    <>
      <div className="w-10/12 mx-auto">
        <div className="">
          <NavBar></NavBar>
        </div>
        <div className="">
          <Home></Home>
        </div>
      </div>
    </>
  )
}

export default App
