import { useEffect,useState } from "react"
import api from "../../utils/api";
import { useNavigate } from 'react-router-dom';
export default function Dashbord(){
   const navigate = useNavigate();
   const [loading, setLoading] = useState(true);
useEffect(()=>{
    const fetchdata = async()=>
    {
        try {
            setLoading(true);
            const response = await api.get('/user/dashboard');
            if (!response.data.success) {
              navigate('/');
            }
            else{
                setLoading(true);
            }
          } catch (error) {
            // console.error("Error fetching data:", error);
            navigate('/');
          }
       
    }
    fetchdata ();
   
})
if (loading) return <div className=" d-flex justify-content-center text-center app-loader" >
    <div className="loader">
    </div>
</div>;
    return(
        <>
        <h1>
            Dashbord page is here
        </h1>
        </>
    )
}