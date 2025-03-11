import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Highlights from './pages/Highlights';
import Photography from './pages/Photography';
import Footer from './components/Footer';

function App() {

  return (
    <Router basename="/sophianguyen/">
      <Navbar />  {/* Navbar is shown across all pages */}
      <div className='container mx-auto p-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/highlights' element={<Highlights />} />
          <Route path='/photography' element={<Photography />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
