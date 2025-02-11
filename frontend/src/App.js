import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Appointments from "./Pages/Appointments/Appointments";
import Form from "./Pages/Form/Form";
import HomePage from "./Pages/Home/HomePage";

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

function MainLayout() {
  const location = useLocation();
  const hideNavbarRoutes = ["/login", "/register"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
