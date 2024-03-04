import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
function App() {

  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/contact' element={<ContactPage />} />
      <Route exact path='/login' element={<LoginPage />} />
      <Route exact path='/dashboard' element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
