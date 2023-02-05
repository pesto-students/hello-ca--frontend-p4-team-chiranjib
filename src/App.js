import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import LoaderWrapper from "./components/Loader";

import store from "./store";

const Home = lazy(() => import("./pages/Homepage"));
const Services = lazy(() => import("./pages/Services"));
const OurProcess = lazy(() => import("./pages/OurProcess"));
// const GetStarted = lazy(() => import("./pages/GetStarted"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Faq = lazy(() => import("./pages/Faq"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
// const UserDashboard = lazy(() => import("./pages/UserDashboard"));
// const CaDashboard = lazy(() => import("./pages/CaDashboard"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => {
  return (
    <Provider store={store}>
      <Suspense fallback={<LoaderWrapper />}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-process" element={<OurProcess />} />
            {/* <Route path="/get-started" element={<GetStarted />} /> */}
            <Route path="/faq" element={<Faq />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            {/* <Route path="/user-dashboard" element={<UserDashboard />} />
            <Route path="/ca-dashboard" element={<CaDashboard />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </Suspense>
    </Provider>
  );
};

export default App;
