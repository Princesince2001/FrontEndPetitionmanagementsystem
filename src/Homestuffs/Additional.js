// import React, { useState } from 'react';
// import axios from 'axios';
// import './Assign.css';
// const AssignPetition = () => {
//   const [selectedPetition, setSelectedPetition] = useState('');
//   const [selectedHandler, setSelectedHandler] = useState('');
//   const handlePetitionChange = (event) => {
//     setSelectedPetition(event.target.value);
//   };
//   const handleHandlerChange = (event) => {
//     setSelectedHandler(event.target.value);
//   };
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5112/api/UpdatePetitionHandlerForPetition', {
//         PetitionId: selectedPetition,
//         PetitionHandlerId: selectedHandler
//       });
//       if (response.status === 200) {
//         alert('Petition assigned successfully!');
//       }
//     } catch (error) {
//       console.error('Error assigning petition:', error);
//       alert('Failed to assign petition.');
//     }
//   };
//   return (
// <div style={{ marginTop: "60px" }}>
// <h2>Assign Petition to Handler</h2>
// <form onSubmit={handleSubmit}>
// <div>
// <label>
//             Petition ID:
// <input type="text" value={selectedPetition} onChange={handlePetitionChange} />
// </label>
// </div>
// <div>
// <label>
//             Handler ID:
// <input type="text" value={selectedHandler} onChange={handleHandlerChange} />
// </label>
// </div>
// <button type="submit">Assign</button>
// </form>
// </div>
//   );
// };
// export default AssignPetition;



import React, { useState } from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';



const AssignPetition = () => {
  const [selectedPetition, setSelectedPetition] = useState('');
  const [selectedHandler, setSelectedHandler] = useState('');

  const handlePetitionChange = (event) => {
    setSelectedPetition(event.target.value);
  };

  const handleHandlerChange = (event) => {
    setSelectedHandler(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5112/api/UpdatePetitionHandlerForPetition', {
        PetitionId: selectedPetition,
        PetitionHandlerId: selectedHandler
      });
      if (response.status === 200) {
        alert('Petition assigned successfully!');
      }
    } catch (error) {
      console.error('Error assigning petition:', error);
      alert('Failed to assign petition.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '20px'
    }}>
      <form onSubmit={handleSubmit} style={{
        border: '2px solid #ddd',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        maxWidth: '400px',
        width: '100%'
      }}>
        <div>
          <label>
            Petition ID:
            <input type="text" value={selectedPetition} onChange={handlePetitionChange} style={{
              width: '100%',
              padding: '8px',
              marginTop: '4px',
              marginBottom: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }} />
          </label>
        </div>
        <div>
          <label>
            Handler ID:
            <input type="text" value={selectedHandler} onChange={handleHandlerChange} style={{
              width: '100%',
              padding: '8px',
              marginTop: '4px',
              marginBottom: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }} />
          </label>
        </div>
        <button type="submit" style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '10px 15px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>Assign</button>
      </form>
    </div>
  );
};

export default AssignPetition;
