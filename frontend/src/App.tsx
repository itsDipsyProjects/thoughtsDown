import { Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './Home/Home';
import { Admin } from './Admin/Admin';
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/post/:slug" element={<h1>Post page</h1>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;