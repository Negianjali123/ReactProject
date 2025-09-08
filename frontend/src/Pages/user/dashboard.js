import { useEffect, useState, useReducer } from "react";
import api from "../../utils/api";
import { useNavigate } from 'react-router-dom';
import cardData from "./card-data.json"; // Renamed to avoid naming conflict

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return state.map((item) => {
                if (item.id === action.id) {
                    return { ...item, QUANTITY: item.QUANTITY + 1 };
                }
                return item;
            });
        case "DECREASE":
            return state.map((item) => {
                if (item.id === action.id && item.QUANTITY > 0) {
                    return { ...item, QUANTITY: item.QUANTITY - 1 };
                }
                return item;
            });
        default:
            return state;
    }
};

export default function Dashbord() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [mydata, dispatch] = useReducer(reducer, cardData); //  Proper initialization imporatant

    // Effect to fetch dashboard data
    useEffect(() => {
        const fetchdata = async () => {
            try {
                setLoading(true);
                const response = await api.get('/user/dashboard');
                if (!response.data.success) {
                    navigate('/');
                } else {
                    setLoading(false);
                }
            } catch (error) {
                navigate('/');
            }
        };
        fetchdata();
    }, []);


    const handleIncrease = (item) => {
        dispatch({ type: "INCREASE", id: item.id });
    };

    const handleDecrease = (item) => {
        dispatch({ type: "DECREASE", id: item.id });
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center text-center app-loader">
                <div className="loader"></div>
            </div>
        );
    }

    return (
        <>

            <div className="container-fluid mt-5" >
                <div className="row mb-5">
                    {mydata.map((item) => (
                        <div className="col-sm-4 mt-3" key={item.id}> 
                            <div className="card">
                                <div className="text-center">
                                    <img
                                        src={item.image}
                                        alt="..."
                                        className="imagesizeview card-img-top"
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <div className="row">
                                        <div className="col">Prize</div>
                                        <div className="col">{item.price}</div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col">Quantity</div>
                                        <div className="col">
                                            <div className="btn-group" role="group" aria-label="Basic example">
                                                <a
                                                    type="button"
                                                    className="btn btn-outline-success"
                                                    onClick={() => handleDecrease(item)}
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
                                                    onClick={() => handleIncrease(item)}
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
