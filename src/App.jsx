import { useState, useCallback, useMemo } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import DemoList from './components/test/test';
import Button from './components/test/Button';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;

  // const [listTitle, setListTitle] = useState('My List');
  // const [test, setTest] = useState(1);

  // // const changeTitleHandler = () => {
  // //   setListTitle('New Title');
  // //   setTest(!test);
  // // };
  // const changeTitleHandler = useCallback(() => {
  //   setListTitle('New Title');
  //   setTest((prev) => setTest(!prev));
  // }, []);

  // // const listItems = [5, 3, 1, 10, 9];
  // const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  // return (
  //   <div className="app">
  //     <DemoList title={listTitle} items={listItems} />
  //     <Button onClick={changeTitleHandler}>Change List Title</Button>
  //   </div>
  // );