import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="flex">
      {/* nav section */}
      <div className='w-36 h-screen'>
        <div className=' sticky top-0'>
        <Navbar/>
        </div>
      </div>
      {/* content section */}
      <div className='flex-1 min-h-screen bg-blue-100'>
      <div className='max-w-screen-lg mx-auto'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create-post' element={<CreatePost/>}/>
          <Route path='/update-post/:_id' element={<UpdatePost/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
