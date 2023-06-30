import './App.css';
import NavBar from './components/NavBar';
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Footer from './components/Footer';
import AllPosts from './screens/AllPosts';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div>
      
      <NavBar/>
      <Routes>
<<<<<<< HEAD
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/posts/:postId' element={<AllPosts/>}></Route>
        <Route path='/posts' element={<AllPosts/>}></Route>
=======
        <Route path = '/' element={<Home/>}></Route>
        <Route exact path = '/about' element={<About/>}></Route>
        <Route path = '/posts' element={<AllPosts/>}></Route>
        <Route path = '/contact' element={<Contact/>}></Route>
>>>>>>> parent of 504b671 (Merge branch 'SaraBranch' into Nancy)
      </Routes>
      <Footer/>
    </div>
    
    </Router>
  );
}

export default App;
