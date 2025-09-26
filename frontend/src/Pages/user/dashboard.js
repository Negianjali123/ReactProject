import { useEffect, useState, useReducer } from "react";
import api from "../../utils/api";
import "../../App.css";
import { useNavigate } from 'react-router-dom';
import cardData from "./card-data.json"; // Renamed to avoid naming conflict
import { useSelector, useDispatch } from 'react-redux';
import { addItem} from '../../Component/cardAction/CardSlice';
// import { CountQuantity } from '../../Component/cardAction/Quantity';


export default function Dashbord() {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    // const [loading, setLoading] = useState(true);

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
    }, []);

    const cardmanagebtn= (item) =>{
        dispatch(addItem(item));
        // dispatch(increment())
    }

    // if (loading) {
    //     return (
    //         <div className="d-flex justify-content-center text-center app-loader">
    //             <div className="loader"></div>
    //         </div>
    //     );
    // }

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
                                    <div    className="row">
                                        <div className="col"><h5 className="card-title">{item.name}</h5></div>
                                        
                                       
                                    </div>
                                    <div className="row">
                                        <div className="col">Prize</div>
                                        <div className="col">{item.price}</div>
                                    </div>
                                    <div className="row mt-2">
                                    <div className="col"><button type="button" className="btn btn-warning" value={item.id}
                                    onClick={()=>cardmanagebtn(item)}>Add to card</button></div>
                                        <div className="col">Quantity</div>
                                        <div className="col">
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <a
                                                    type="button"
                                                    className="btn btn-outline-success"
                                                    // onClick={() => handleDecrease(item)}
                                                >
                                                    <b>-</b>
                                                </a>
                                                <a
                                                    className="btn btn-outline-success"
                                                    style={{ pointerEvents: "none" }}
                                                >
                                                    {item.QUANTITY}
                                                </a>
                                                <a
                                                    type="button"
                                                    className="btn btn-outline-success"
                                                    // onClick={() => handleIncrease(item)}
                                                >
                                                    <b>+</b>
                                                </a>
                                            </div>
                                        </div>
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
