import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../../Component/cardAction/QuantitySlice';

const products = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
];

export default function App() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  return (
    <div>
      <h1>Products</h1>
      {products.map(product => (
        <div key={product.id}>
          <span>{product.name}</span>
          <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} x {item.quantity}{' '}
              <button onClick={() => dispatch(removeItem({ id: item.id }))}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
