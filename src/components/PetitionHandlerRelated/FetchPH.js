// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
 
// const FinalShop = () => {
//   const [appointment, setAppointment] = useState([]);
//   const [loading, setLoading] = useState(false);
 
//   useEffect(() => {
//     const fetchServices = async () => {
//       setLoading(true);
// const response = await axios.get('http://localhost:5112/api/FetchPetitionhandlersdetails');
//       setAppointment(response.data);
//       console.log(response.data);
//       setLoading(false);
//     };
//     fetchServices();
//   }, []);
 
//   if (loading) {
//     return <div>Loading...</div>;
//   }
 
//   return (
//   <div>
//     <div style={{ textAlign: 'center', marginTop: '20px' }}>
//       <h1 style={{ marginBottom: '20px' }}>Petition Handler data</h1>
//       <table style={{ borderCollapse: 'collapse', width: '100%' }}>
//         <thead>
//           <tr>
//             <th style={{ border: '1px solid black', padding: '8px' }}>petitionHandlerId</th>
//             <th style={{ border: '1px solid black', padding: '8px' }}>officialId</th>
//             <th style={{ border: '1px solid black', padding: '8px' }}>userName</th>
//             <th style={{ border: '1px solid black', padding: '8px' }}>email</th>
//             <th style={{ border: '1px solid black', padding: '8px' }}>mobileNumber</th>
//             <th style={{ border: '1px solid black', padding: '8px' }}>talukLocation</th>
//             {/* <th scope='col'>Repair Status</th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {appointment.map(e => (
//             <tr key={e.petitionHandlerId}>
//               <td style={{ border: '1px solid black', padding: '8px' }}>{e.petitionHandlerId}</td>
//               <td style={{ border: '1px solid black', padding: '8px' }}>{e.officialId}</td>
//               <td style={{ border: '1px solid black', padding: '8px' }}>{e.userName}</td>
//                <td style={{border: '1px solid black', padding:  '8px'}}>{e.email}</td>                                                       
//               <td style={{ border: '1px solid black', padding: '8px' }}>{e.mobileNumber}</td>
//               <td style={{ border: '1px solid black', padding: '8px' }}>{e.talukLocation}</td>
//               <td style={{ border: '1px solid black', padding: '8px' }}>
//                 {/* <button type="button" style={{ marginRight: '5px' }} className="btn btn-Danger">Delete</button> */}
//                 <button type="button" className="btn btn-danger">Delete</button>
//               </td>
//               {/* <td>{e.repairStatus}</td> */}
//               {/* <td>{e.appointmentId}</td> */}
//               {/* {e.services.repair_Status}</td> */}
//             </tr>
//           ))}
//         </tbody>
//       </table>
    
//     </div>
//     </div>
    
//   );
// };
 
// export default FinalShop;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const handleDelete = async (id) => {
//   try {
//     const response = await axios.delete(`http://localhost:5112/api/Petitionhandler/DeleteProduct/api/DeleteProduct/${id}`);
//     if (response.status === 200) {
//       // Only update state if the deletion was successful
//       setAppointment(appointment.filter((item) => item.petitionHandlerId !== id));
//       console.log('Item deleted successfully');
//     } else {
//       console.error('Failed to delete the item:', response.data);
//     }
//   } catch (error) {
//     console.error('Error deleting item:', error);
//   }
// };


//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <h1 style={{ marginBottom: '20px' }}>Petition Handler data</h1>
//         <table style={{ borderCollapse: 'collapse', width: '100%' }}>
//           <thead>
//             <tr>
//               <th style={{ border: '1px solid black', padding: '8px' }}>petitionHandlerId</th>
//               <th style={{ border: '1px solid black', padding: '8px' }}>officialId</th>
//               <th style={{ border: '1px solid black', padding: '8px' }}>userName</th>
//               <th style={{ border: '1px solid black', padding: '8px' }}>email</th>
//               <th style={{ border: '1px solid black', padding: '8px' }}>mobileNumber</th>
//               <th style={{ border: '1px solid black', padding: '8px' }}>talukLocation</th>
//               <th style={{ border: '1px solid black', padding: '8px' }}>status</th>         
//               {/* <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {appointment.map((e) => (
//               <tr key={e.petitionHandlerId}>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>{e.petitionHandlerId}</td>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>{e.officialId}</td>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>{e.userName}</td>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>{e.email}</td>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>{e.mobileNumber}</td>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>{e.talukLocation}</td>
//                 <td style={{ border: '1px solid black', padding: '8px' }}>
//                   <button type="button" className="btn btn-danger" onClick={() => handleDelete(e.petitionHandlerId)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
  
            


// export default FetchHandler;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const FetchHandler = () => {
//   const [appointment, setAppointment] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Your useEffect code here
//   }, []);

//   const handleDelete = async (id) => {
//     // Your handleDelete code here
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       {/* Your JSX code here */}
//     </div>
//   );
// };

// export default FetchHandler;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchHandler = () => {
  const [appointment, setAppointment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5112/api/FetchPetitionhandlersdetails');
        setAppointment(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:5112/api/Petitionhandler/DeleteProduct/api/DeleteProduct/${id}`);
      if (response.status === 200) {
        setAppointment(appointment.filter((item) => item.petitionHandlerId !== id));
        console.log('Item deleted successfully');
      } else {
        console.error('Failed to delete the item:', response.data);
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>Petition Handler Data</h1>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px' }}>Petition Handler ID</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Official ID</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>User Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Email</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Category Name</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Mobile Number</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Taluk Location</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Status</th>
              <th style={{ border: '1px solid black', padding: '8px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointment.map((item) => (
              <tr key={item.petitionHandlerId}>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.petitionHandlerId}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.officialId}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.userName}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.email}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.category.categoryName}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.mobileNumber}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.talukLocation}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>{item.status}</td>
                <td style={{ border: '1px solid black', padding: '8px' }}>
                  <button type="button" className="btn btn-danger" onClick={() => handleDelete(item.petitionHandlerId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FetchHandler;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
 
// const FetchHandler = () => {
//   const [petitionHandlers, setPetitionHandlers] = useState([]);
 
//   useEffect(() => {
//     fetchPetitionHandlers();
//   }, []);
 
//   const fetchPetitionHandlers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5112/api/FetchPetitionhandlersdetails');
//       setPetitionHandlers(response.data);
//     } catch (error) {
//       console.error('Error fetching petition handlers:', error);
//     }
//   };
 
//   const deletePetitionHandler = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5112/api/Petitionhandler/DeleteProduct/api/DeleteProduct/${id}`);
//       fetchPetitionHandlers();
//     } catch (error) {
//       console.error('Error deleting petition handler:', error);
//     }
//   };
 
//   return (
// <div>
// <h2>Petition Handlers</h2>
// <table>
// <thead>
// <tr>
// <th>ID</th>
// <th>Username</th>
// <th>Email</th>
// <th>Category ID</th>
// <th>Mobile Number</th>
// <th>Taluk Location</th>
// <th>Admin ID</th>
// <th>Actions</th>
// </tr>
// </thead>
// <tbody>
//           {petitionHandlers.map(handler => (
// <tr key={handler.petitionHandlerId}>
// <td>{handler.petitionHandlerId}</td>
// <td>{handler.userName}</td>
// <td>{handler.email}</td>
// <td>{handler.categoryId}</td>
// <td>{handler.mobileNumber}</td>
// <td>{handler.talukLocation}</td>
// <td>{handler.adminId}</td>
// <td>
// <button onClick={() => deletePetitionHandler(handler.petitionHandlerId)}>Delete</button>
// </td>
// </tr>
//           ))}
// </tbody>
// </table>
// </div>
//   );
// };
 
// export default FetchHandler;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
 
// const FetchHandler = () => {
//   const [petitionHandlers, setPetitionHandlers] = useState([]);
 
//   useEffect(() => {
//     fetchPetitionHandlers();
//   }, []);
 
//   const fetchPetitionHandlers = async () => {
//     try {
//       const response = await axios.get('http://localhost:5112/api/FetchPetitionhandlersdetails');
//       setPetitionHandlers(response.data);
//     } catch (error) {
//       console.error('Error fetching petition handlers:', error);
//     }
//   };
 
//   const deletePetitionHandler = async (id) => {
//     console.log(id);
//     try {
//       await axios.delete(`http://localhost:5112/api/Petitionhandler/DeleteProduct/api/DeleteProduct/${id}`).then((response)=>{
//         console.log(response);
//       });
//       fetchPetitionHandlers();

//     } catch (error) {
//       console.error('Error deleting petition handler:', error);
//     }
//   };
 
//   return (
// <div style={{marginTop:"180px",marginLeft:"400px",zIndex:"99"}}>
// <h2>Petition Handlers</h2>
// <table>
// <thead>
// <tr>
// <th>ID</th>
// <th>Username</th>
// <th>Email</th>
// <th>Category ID</th>
// <th>Mobile Number</th>
// <th>Taluk Location</th>
// <th>Admin ID</th>
// <th>Actions</th>
// </tr>
// </thead>
// <tbody>
//           {petitionHandlers.map(handler => (
// <tr key={handler.petitionHandlerId}>
// <td>{handler.petitionHandlerId}</td>
// <td>{handler.userName}</td>
// <td>{handler.email}</td>
// <td>{handler.categoryId}</td>
// <td>{handler.mobileNumber}</td>
// <td>{handler.talukLocation}</td>
// <td>{handler.adminId}</td>
// <td>
// <button onClick={() => deletePetitionHandler(handler.petitionHandlerId)}>Delete</button>
// </td>
// </tr>
//           ))}
// </tbody>
// </table>
// </div>
//   );
// };
 
// export default FetchHandler;

