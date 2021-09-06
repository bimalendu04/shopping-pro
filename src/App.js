import React from 'react';
import './App.css';
import Table from './components/Table';
import Items from './components/Items';

const items = [
  {
    name: "Dove",
    price: 20,
    id: "dove"
  },
  {
    name: "Axe",
    price: 30,
    id: "axe"
  },
  {
    name: "Talcum",
    price: 50,
    id: "talcum"
  }
];

function App() {
  const dataItem = React.useMemo(() => {
    return {};
  }, []);

  const [cart, setCart] = React.useState({});
  const [freeProducts, setfreeProducts] = React.useState({});
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [finalCart, setFInalCart] = React.useState({});

  const addItemsInCart = React.useCallback(
    (id) => {
      let cartItems = { ...cart };
      cartItems[id] = cartItems[id] ? cartItems[id] + 1 : 1;
      setCart(cartItems);
    },
    [cart]
  );

  React.useEffect(() => {
    let cartItems = { ...cart };
    if (cart.axe && parseInt(cart.axe / 2) >= 1) {
      setfreeProducts({ dove: parseInt(cart.axe / 2) });
      if (cartItems.dove && cartItems.dove >= parseInt(cart.axe / 2)) {
        cartItems.dove = cartItems.dove - parseInt(cart.axe / 2);
      } else {
        cartItems.dove = 0;
      }
    }
    setFInalCart(cartItems);
  }, [cart]);

  React.useEffect(() => {
    let price = 0;
    if (Object.keys(finalCart).length) {
      Object.keys(finalCart).forEach((key) => {
        price = price + dataItem[key].price * finalCart[key];
      });
    }
    setTotalPrice(price);
  }, [finalCart, dataItem]);

  React.useEffect(() => {
    items.forEach((item) => {
      dataItem[item.id] = item;
    });
  }, [dataItem]);


  return (
    <div className="App">
      <h1>Shopping</h1>
      <Items
        items={items}
        addItemsInCart={(id) => addItemsInCart(id)}
      />
      <Table
        freeProducts={freeProducts}
        cart={finalCart}
        dataItem={dataItem}
      />
      <div>
        <h5>Total : {totalPrice}</h5>
      </div>
    </div>
  );
}

export default App;
