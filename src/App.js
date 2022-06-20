import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Hero from './components/hero'

import Breadcumb from './components/Breadcumb';
import Footer from './components/footer';
import Category from './components/category';

function App() {
  return (
    <div>
      <Header/>
      <Breadcumb/>
      <Hero/>
      <Category/> 
      <Footer/>
    </div>
  );
}

export default App;
