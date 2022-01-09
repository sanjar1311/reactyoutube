import {Routes, Route} from "react-router-dom"
import './App.css';

import Home from "./pages/home/Home"
import NotFound from "./pages/notfound/NotFound"

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="*" element={<NotFound /> }/>
      </Routes>
    </>
  );
}

export default App;
