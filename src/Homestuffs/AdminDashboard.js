import React, { useEffect, useState } from 'react'

import axios from 'axios'
function AdminDashboardComponent() {
  const [DashboardValue,setDashboardValue]= useState({
    "totalPetition": 0,
    "pendingPetiton": 0,
    "resolvedPetition": 0,
    "rejectedPetition": 0,
    "activeHandler": 0,
    "educationHandler": 0,
    "transportHandler": 0,
    "revenueHandler": 0,
    "healthcareHandler":0,
    // "closedPetition": 0

  });

 
  useEffect(()=>{
    axios.get(`http://localhost:5112/api/Dashboard`).then((Response)=>{
      setDashboardValue(Response.data)
      console.log(DashboardValue);
    }).catch((err)=>{
      console.log(err);
    })
   
   
  },[])
  return (
    <div id="dashimage">
    <div className='Bui'>
    <div className='mainadmin mainbg' >
       <h1 className='mt-7 ms-5' style={{color:"white"}} >Admin Dashboard</h1>
        <hr/>
        
      <div className='d-flex flex-wrap'>
        <div className='mt-5 mx-3 mt-3 mainbox' >
          <h5 className='mt-5 ms-3'>Total petition</h5>
          <p className='ms-5'>{DashboardValue.totalPetition}</p>
        </div>
        
        <div className='mt-5 mx-3 mt-3 mainbox' >
          <h5 className='mt-5 ms-3'>Pending petition</h5>
          <p className='ms-5'>{DashboardValue.pendingPetiton}</p>  
        </div>
        <div className='mt-5 mx-3 mt-3 mainbox' >
          <h5 className='mt-5 ms-3'>Resolved petition</h5>
          <p className='ms-5'>{DashboardValue.resolvedPetition}</p>
        </div>
        <div className='mt-5 mx-3 mt-3 mainbox' >
          <h5 className='mt-5 ms-3'>Rejected petition</h5>
          <p className='ms-5'>{DashboardValue.rejectedPetition}</p>
        </div>
        <div className='mt-5 mx-3 mt-3 mainbox' >
          <h5 className='mt-5 ms-3'>Closed petition</h5>
          <p className='ms-5'>{DashboardValue.closedPetition}</p>
        </div>
        <div className='mt-5 mx-3 mt-3 mainbox' >
          <h5 className='mt-5 ms-3'>Active petition handler</h5>
          <p className='ms-5'>{DashboardValue.activeHandler}</p>
        </div>
           
      </div>
      <div className='d-flex flex-wrap'>
        {/* <div className=' mx-3 mt-5 d-flex justify-content-around subbox' ><div className='mt-3 font-weight-bold'>No.of petition in education</div><span className=' mt-3 ms-5'>{DashboardValue.educationHandler}</span></div> */}
        <div className=' mx-3 mt-5 d-flex justify-content-around subbox' ><div className='mt-3 font-weight-bold'>No.of petition in revenue</div><span className=' mt-3 ms-5'>{DashboardValue.revenueHandler}</span></div>
        {/* <div className=' mx-3 mt-5 d-flex justify-content-around subbox' ><div className='mt-3 font-weight-bold'>No.of petition in transport</div><span className=' mt-3 ms-5'>{DashboardValue.transportHandler}</span></div> */}
        <div className=' mx-3 mt-5 d-flex justify-content-around subbox' ><div className='mt-3 font-weight-bold'>No.of petition in Healthcare</div><span className=' mt-3 ms-5'>{DashboardValue.healthcareHandler}</span></div>
         </div>
         </div>
    </div>
    </div>
  )
}
 
export default AdminDashboardComponent