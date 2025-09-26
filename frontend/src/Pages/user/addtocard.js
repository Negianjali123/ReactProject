import { useEffect } from 'react';
import api from '../../utils/api';
import { useNavigate } from 'react-router-dom';
export default function AddToCard() {
    const navigate = useNavigate();
    useEffect(() => {
        const getdata = async () => {
            try {
                const response = await api.get('/user/add-card');
                if (!response.data.success) {
                    navigate('/user/add-card');
                } else {
                    navigate('/');
                }
            } catch (err) { 
                navigate('/');
                
            }

        }
        getdata();
    }, [])
    return (
        <div>
            <h1>Add to card page</h1>
        </div>
    )
}