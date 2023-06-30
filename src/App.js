import './App.css';
import NavBar from './components/NavBar';
import About from './screens/About';
import Contact from './screens/Contact';
import  {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './screens/Home';
import Footer from './components/Footer';
import AllPosts from './screens/AllPosts';
import PostDetail from './screens/PostDetail';
import CreatePost from './screens/CreatePost';

function App() {
  return (
    <Router>
    <div>
      <NavBar></NavBar>
      <Routes>        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/posts' element={<AllPosts/>}></Route>
        <Route path='/create' element={<CreatePost/>}></Route>
        <Route path='/create/:postId/:userId' element={<CreatePost/>}></Route>
        <Route path='/posts/:postId/:userId' element={<PostDetail />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
