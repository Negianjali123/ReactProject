import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removetocard, increment, decrement } from '../../Component/cardAction/CardSlice';

export default function Addtocard() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.Cardmanage.items);
  console.log("items", items);

  const handleDecrease = (item) => {
    dispatch(decrement({ id: item.id }));
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
        </div>
      )
      }

    </>


  );
}
