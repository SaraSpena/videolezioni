import './App.css';
import NavBar from './components/NavBar';
import About from './screens/About';
import Contact from './screens/Contact';
import  {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './screens/Home';
import Footer from './components/Footer';
import AllPosts from './screens/AllPosts';

function App() {
  return (
    <Router>
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/posts/:postId' element={<AllPosts/>}></Route>
        <Route path='/posts' element={<AllPosts/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
