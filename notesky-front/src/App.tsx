import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import RegisterForm from './components/Register/RegisterForm';
import HomePage from './containers/HomePage/HomePage';
import NotePage from './containers/NotePage/NotePage';
import NotFound from './containers/NotFound/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/notes' element={<NotePage />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;