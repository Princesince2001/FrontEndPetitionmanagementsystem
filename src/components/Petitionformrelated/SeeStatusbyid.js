// import React, { useState } from 'react'
// import axios from 'axios'
// function SeeStatusbyid() {
//   const [petition,setPetition] = useState({Id:"6"});
//   const [petitionStatus,setPetitionStatus] = useState("");
//   const CheckStatus=()=>{
//     setPetitionStatus("Invalid Id")
//     if (petition.Id == "") {
     
//     } else {
//       console.log(Request)
//       axios.get('http://localhost:5112/api/Userpetition/GetPetitionStatus/api/FetchPetitionStatus/' + petition.Id).then((response) => {
//         setPetitionStatus(response.data)
//         console.log(response);
 
        
 
//       }).catch((err) => {
//         console.log(err);
//       })
//     }
//   }
//   return (
//     <>
//         <section className='mt-5'>
            
//         <div className='mt-5 '>
           
//              <form>
//              <h1>Check Your petition status</h1>
//              <input type="number"  style={{ "height": "5vh","width":"200px" ,"marginTop":"20vh","z-index":"99"}} id="RequestId" placeholder='Enter Request Id' value={petition.Id} onChange={(e) => {setPetition({...petition,Id:e.target.value} );console.log(Request);}} />
             
//                 </form>  
//                 <br></br>  
//                  </div>
//             <button className='btn-success' style={{ "height": "4vh" }} onClick={() => CheckStatus()} >Check</button>
//             <div className='mt-9' style={{fontSize:"X-large",color:"red"}}>Your petition status is {petitionStatus}</div>
//         </section>
//     </>
//   )
// }

// export default SeeStatusbyid;



//new

import React, { useState } from 'react';
import axios from 'axios';

function SeeStatusbyid() {
  const [petition, setPetition] = useState({ Id: "6" });
  const [petitionStatus, setPetitionStatus] = useState("");

  const CheckStatus = () => {
    setPetitionStatus("Invalid Id");
    if (petition.Id === "") {
      // Handle empty id
    } else {
      axios.get('http://localhost:5112/api/Userpetition/GetPetitionStatus/api/FetchPetitionStatus/' + petition.Id)
        .then((response) => {
          setPetitionStatus(response.data);
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <section className='mt-5'>
      <div className='mt-5 '>
        <form>
          <h1>Check Your petition status</h1>
          <input type="number" style={{ height: "5vh", width: "200px", marginTop: "20vh", zIndex: "99" }} id="RequestId" placeholder='Enter Request Id' value={petition.Id} onChange={(e) => { setPetition({ ...petition, Id: e.target.value }); }} />
        </form>
        <br />
      </div>
      <button className='btn-success' style={{ height: "4vh" }} onClick={() => CheckStatus()}>Check</button>
      <div className='mt-9' style={{ fontSize: "1.5rem", color: "red" }}>Your petition status is {petitionStatus}</div>
    </section>
  );
}

export default SeeStatusbyid;


// import React, { useState } from 'react';
// import axios from 'axios';

// function SeeStatusbyid() {
//   const [petition, setPetition] = useState({ Id: "6" });
//   const [petitionStatus, setPetitionStatus] = useState("");

//   const CheckStatus = () => {
//     setPetitionStatus("Invalid Id");
//     if (petition.Id === "") {
//       // Handle empty ID case
//     } else {
//       axios.get('http://localhost:5112/api/Userpetition/GetPetitionStatus/api/FetchPetitionStatus/' + petition.Id)
//         .then((response) => {
//           setPetitionStatus(response.data);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   };

//   return (
//     <>
//       <section style={{ marginTop: '5vh' }}>
//         <div style={{ marginTop: '5vh' }}>
//           <form>
//             <h1 style={{ textAlign: 'center' }}>Check Your Petition Status</h1>
//             <input
//               type="number"
//               style={{
//                 height: '5vh',
//                 width: '200px',
//                 marginTop: '20vh',
//                 zIndex: '99',
//                 marginLeft: 'auto',
//                 marginRight: 'auto',
//                 display: 'block'
//               }}
//               id="RequestId"
//               placeholder='Enter Request Id'
//               value={petition.Id}
//               onChange={(e) => setPetition({ ...petition, Id: e.target.value })}
//             />
//           </form>
//           <br />
//         </div>
//         <button
//           className='btn-success'
//           style={{
//             height: '4vh',
//             marginTop: '2vh',
//             display: 'block',
//             marginLeft: 'auto',
//             marginRight: 'auto'
//           }}
//           onClick={CheckStatus}
//         >
//           Check
//         </button>
//         <div
//           style={{
//             marginTop: '9vh',
//             fontSize: 'x-large',
//             color: 'red',
//             textAlign: 'center'
//           }}
//         >
//           Your petition status is {petitionStatus}
//         </div>
//       </section>
//     </>
//   );
// }

// export default SeeStatusbyid;



