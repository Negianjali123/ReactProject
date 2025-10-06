import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removetocard, increment, decrement, cookiesitem } from '../../Component/cardAction/CardSlice';
import { CookieContext } from '../../Component/Provider/CookiesProvider';
import { useState, useEffect, useContext } from "react";
import CalculatePayment from '../../Component/CalculatePayment';
import PayUPayment from '../../Component/Payment/Payu';
import { useNavigate } from 'react-router-dom';





export default function Addtocard() {
  const navigate = useNavigate();
  const { handleSetCookie, cookies } = useContext(CookieContext);
  const [startPayment, setStartPayment] = useState(false);


  const dispatch = useDispatch();
  // example if coming from state
  // const [paymentval, setPaymentval] = useState('');

  const items = useSelector(state => state.Cardmanage.items);
  useEffect(() => {
    if (cookies.itemList) {
      dispatch(cookiesitem(cookies.itemList))
      // setPaymentval(<CalculatePayment />);
      // setPaymentval(10)
      // debugger
    }
  }, [cookies]);

  useEffect(() => {
    if (items.length > 0) {
      handleSetCookie(items);
    }
  }, [items]);

  // console.log("items", items);

  const handleDecrease = (item) => {
    dispatch(decrement({ id: item.id }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

  };
  const handlePayment = () => {
    navigate('/user/Payment'); // trigger payment component render
  };
  return (
    <>
      {items.length === 0 ? (
        <p>Cart is emptdffy</p>
      ) : (
        <div className="container-fluid mt-5" >
          <div className="row mb-5">
            {items.map(item => (
              <div className="col-sm-4 mt-3" key={item.id}>
                <div className="card">
                  <div className="text-center">
                    <button onClick={() => dispatch(removetocard({ id: item.id }))}>
                      Remove
                    </button>
                    <img
                      src={item.image}
                      alt="..."
                      className="imagesizeview card-img-top"
                    />
                  </div>
                  <div className="card-body text-center">
                    <div className="row">
                      <div className="col"><h5 className="card-title">{item.name}</h5></div>
                    </div>
                    <div className="row">
                      <div className="col">Prize</div>
                      <div className="col">{item.price}</div>
                    </div>
                    <div className="row mt-2">
                      <div className="col">Quantity</div>
                      <div className="col">
                        <div className="btn-group" role="group" aria-label="Basic example">
                          <Link
                            href="/"
                            type="button"
                            className="btn btn-outline-success"
                            onClick={() => handleDecrease({ id: item.id })}
                          >
                            <b>-</b>
                          </Link>
                          <span
                            className="btn btn-outline-success"
                            style={{ pointerEvents: "none" }}
                          >
                            {items.find(stateval => stateval.id === item.id)?.QUANTITY || 0}
                          </span>
                          <Link
                            href="/"
                            type="button"
                            className="btn btn-outline-success"
                            onClick={() => dispatch(increment({ id: item.id }))}
                          >
                            <b>+</b>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='container '>
            <form action="/login" method="POST" className="" onSubmit={handleSubmit}>
              <div className='row'>
                <div className='col'>
                  items Price
                </div>
                <div className='col text-end'><CalculatePayment /></div>
              </div>
              <div className='row'>
                <div className='col'>
                  <div className='d-flex justify-content-center'>
                    <button type="submit" className="text-center btn btnhover w-20 mb-3"  onClick={() => handlePayment()}>Payment </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )
      }

    </>
  );
}
