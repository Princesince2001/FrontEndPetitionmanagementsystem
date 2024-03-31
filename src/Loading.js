import React, { useState } from 'react'
import LoaderComponent from './LoaderComponent';


import { useEffect } from 'react'
import App from './App';
function Master() {
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    });
   

    return (
        <>
            
            {isLoading?
            <><LoaderComponent/></>
            :<App/>

            }
        </>
    )
}

export default Master