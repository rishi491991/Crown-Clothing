import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.routes";
import NavBar from "./components/navbar/navbar.component";
import Shop from "./components/shop/shop.component";
import SignIn from "./routes/sign-in/sign-in.routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn/>} />
      </Route>
    </Routes>
  );
};

export default App;
