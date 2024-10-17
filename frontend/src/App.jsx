import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Signup from "./components/auth/signup";
import Signin from "./components/auth/signin";
import Dashboard from "./components/Dashboard";
import HomeDashboard from "./components/Dashboard/homeD";
import useAuth from './contexts/useAuth'
import { authenticate } from "./reducers/reducers";
import { useCookies } from "react-cookie";
import { CircularProgress } from "@nextui-org/react";
import toast from "react-hot-toast";
import useUserInfo from "./hooks/useSignuser";
import FormList from "./components/Dashboard/listform";
import Notfound from "./components/notfound";

function App() {
  const dispatch = useDispatch();
  const { authenticated } = useSelector(state => state.authSlice);
  const { isLoading} = useAuth();
 
  return isLoading ?
  <div className="w-full flex justify-center mt-[40dvh]">
    <div>
    <CircularProgress size="lg" aria-label="Loading..."/>
    <p className="pe-5">Loading...</p>
    </div>
  </div> : (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/*" element={authenticated ? <Dashboard /> : <Navigate to='/signin' />}>
          <Route path="home" element={<HomeDashboard />} />
          <Route path="create" element={<FormList />}/>
          <Route path="*" element={<Notfound />}/>
        </Route>
        <Route path="/signin" element={authenticated ? <Navigate to={'/dashboard/home'}/> : <Signin />} />
        <Route path="/signup" element={authenticated ? <Navigate to={'/dashboard/home'}/> : <Signup />} />
        <Route path="*" element={<Notfound />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
