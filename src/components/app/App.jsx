import { Route, Routes } from 'react-router-dom';

import { Header } from '../index';
import { Home, Cart } from '../../pages';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/react-pizza" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
