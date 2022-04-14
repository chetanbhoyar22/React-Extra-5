import React from "react";
import Header from "./Routing/Header";
import Home from "./Routing/Home";
import Contact from './Routing/Contact';
import About from './Routing/About';
import Footer from "./Routing/Footer";
import PageNotFound from './Routing/PageNotFound';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header />
      <br />
      <Routes>
        <Route path='/' element={ <Navigate to='/home'/>  } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/*' element={ <PageNotFound /> } />
        </Routes>
      <br/>
      <Footer />
    </Router>
  );
};

export default App;