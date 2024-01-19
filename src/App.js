import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.routes";
import NavBar from "./components/navbar/navbar.component";
import Shop from "./routes/shop/shop.routes";
import Authentication from "./routes/auth/authentication.routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication/>} />
      </Route>
    </Routes>
  );
};

export default App;
