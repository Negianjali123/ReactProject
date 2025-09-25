import { useEffect } from "react";

export default function About(){
    useEffect(()=>{ 
        console.log("About page is here");
    }
)
useEffect(()=>{ 
    console.log("add [] About page is here");
},[]
)
    return(
        <>
        <h1>
            About page is here
        </h1>
        </>
    )
}