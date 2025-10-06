import { useSelector } from 'react-redux';

export default function CalculatePayment() {
  const items = useSelector(state => state.Cardmanage.items);

  // Calculate total payment
  const itemvalue = items.reduce((total, item) => {
    return total + item.price * item.QUANTITY;
  }, 0);

  return (
    <div>
      {itemvalue}
    </div>
  );
}
