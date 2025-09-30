import { useEffect } from "react";
import api from "../../utils/api";
import "../../App.css";
import { Link, useNavigate } from 'react-router-dom';
import cardData from "./card-data.json"; // Renamed to avoid naming conflict
import { useDispatch,useSelector } from 'react-redux';
import { addtocard,increment,decrement} from '../../Component/cardAction/CardSlice';
// import { Link } from 'react-router-dom';
// import { CountQuantity } from '../../Component/cardAction/Quantity';


export default function Dashbord() {
  //  const items = useSelector(state => state.cart.items);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateitme = useSelector(state => state.Cardmanage.items);
  // console.log("items", stateitme);

  // Effect to fetch dashboard data
  useEffect(() => {
    const fetchdata = async () => {
      try {
        // setLoading(true);
        const response = await api.get('/user/dashboard');
        if (!response.data.success) {
          navigate('/');
        } else {
          // setLoading(false);
        }
      } catch (error) {
        navigate('/');
      }
    };
    fetchdata();
  }, [navigate]);

  const cardmanagebtn = (item) => {
    dispatch(addtocard(item));
  }

  const handleDecrease = (item) => {
    dispatch(decrement({ id: item.id }));
};

  return (

    <>
      <div className="container-fluid mt-5" >
        <div className="row mb-5">
          {cardData.map((item) => (
            <div className="col-sm-4 mt-3" key={item.id}>
              <div className="card">
                <div className="text-center">
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
                    
                    {stateitme.map(i => i.id).includes(item.id) ? (
                      <>
                       <div className="col">Quantity</div>
                      <div className="col">
                      <div className="btn-group" role="group" aria-label="Basic example">
                      <Link
                        href="/"
                        type="button"
                        className="btn btn-outline-success"
                      onClick={() => handleDecrease(item)}
                      >
                        <b>-</b>
                      </Link>
                      <span
                        href="/"
                        className="btn btn-outline-success"
                        style={{ pointerEvents: "none" }}
                       >
                       {stateitme.find(stateval => stateval.id === item.id)?.QUANTITY || 0}
                      </span>
                      <Link
                        href="/"
                        type="button"
                        className="btn btn-outline-success"
                      onClick={() =>dispatch(increment({ id: item.id }))}
                      >
                        <b>+</b>
                      </Link>
                      </div>
                    </div>
                      </>
                    ) : (
                    <div className="col">
                      <button type="button" className="btn btn-warning" value={item.id}
                      onClick={() => cardmanagebtn(item)}>Add to card</button>
                    </div>)}
                      
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
