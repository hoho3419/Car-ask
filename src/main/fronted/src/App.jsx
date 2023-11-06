import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Mail from "./store";
import Privacy from "./components/UI/privacy";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

function App() {
  return (
    <Mail>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/adm" element={<AdminLogin />}></Route>
        <Route path="/adm/email" element={<Admin />}></Route>
      </Routes>
    </Mail>
  );
}

export default App;
