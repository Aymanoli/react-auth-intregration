import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Header from "./components/Header/Header";
import AuthProvider from "./context/AuthProvider";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route
              path="/shipping"
              element={
                <PrivateRoute>
                  <Shipping />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/placeorder"
              element={
                <PrivateRoute>
                  <PlaceOrder />
                </PrivateRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
