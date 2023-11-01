import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mail from "./store";

function App() {
  return (
    <Mail>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Mail>
  );
}

export default App;
