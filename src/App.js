import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/FooterSection/Footer';
import Home from './Components/Home';
import Categories from './Components/Categories';
import Login from './Components/Login';
import Register from './Components/Register';
import WordPressPage from './Components/CategoriesSection/WordPress';
import PHPPage from './Components/CategoriesSection/PHP';

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wordpress" element={<WordPressPage />} />
          <Route path="/php" element={<PHPPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
