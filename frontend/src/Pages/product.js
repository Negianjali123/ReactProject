import { useSelector, useDispatch } from 'react-redux';
import { removeItem} from '../Component/cardAction/QuantitySlice';
import { Link } from 'react-router-dom';
export default function Product() {
    const items = useSelector(state => state.cart.items);
    console.log("items", items);
     const dispatch = useDispatch();
    return (
        <>
          <p> <Link to="/user/addtocard">Go to addd to card Page</Link></p>
          <div>
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
        </>
        
    );


}