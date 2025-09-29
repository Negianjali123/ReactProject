
import React from 'react';
import { useEffect } from "react";

 function About(){
    useEffect(()=>{ 
        console.log("About page is here");
    }
)
// useEffect(()=>{ 
//     console.log("add [] About page is here");
// },[]
// )
    return(
        <>
        <h1>
            About page is here
        </h1>
        </>
    )
}
export default React.memo(About);