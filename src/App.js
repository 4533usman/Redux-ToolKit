import './App.css';
import { Navi } from './components/Navi';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navi />
          <Routes>
            <Route path='/' element={<Home/>} ></Route>
            <Route path='/cart' element={<Cart/>} ></Route>
          </Routes>
        </BrowserRouter>

      </Provider>

    </>
  );
}

export default App;
