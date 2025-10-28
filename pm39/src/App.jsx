import { useState } from "react";
import "./App.css";
import Home from "./component/home";
import NavBar from "./component/navbar";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="w-10/12 mx-auto bg-white">
        <div className="">
          <NavBar search={search} setSearch={setSearch} />
        </div>
        <div className="">
          <Home search={search} />
        </div>
      </div>
    </>
  );
}

export default App;
