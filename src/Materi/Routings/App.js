// import Hooks from "./Materi/Hooks";
// import Hook from "./Task/Hook";
import "./App.css"
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
    {/* <Hooks /> */}
    {/* <Hook /> */}

    {/* Create routing */}
    {/*
    <h1>Belajar react routing</h1>

    <nav>
      <Link to="/home" className="mr">
        Home
      </Link>
      <Link to="/about" className="mr">
        About
      </Link>
      <Link to="/category/makanan" className="mr">
        Makanan
      </Link>
      <Link to="/category/minuman" className="mr">
        Minuman
      </Link>
    </nav>
    */}
    <nav>
      <Link to="/home" className="mr">Home</Link>
      <Link to="/about" className="mr">About</Link>
      <Link to="/profile" className="mr">Profile</Link>
    </nav>
    <Outlet/>
    </div>
  );
}

export default App;

// Outlet berguna apabila url di klik maka akan menuju halaman url
