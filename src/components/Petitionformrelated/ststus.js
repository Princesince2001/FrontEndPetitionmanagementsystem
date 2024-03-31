// import React, { useState } from 'react';
// import axios from 'axios';
 
// function PetitionStatusUpdate() {
//   const [petitionId, setPetitionId] = useState('');
//   const [statusType, setStatusType] = useState('');
 
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5112/api/PetitionStatusApproval', { petitionId, statusType });
//       alert('Petition status updated successfully!');
//       // You can add additional logic here if needed, such as clearing the form fields
//     } catch (error) {
//       console.error('Error updating petition status:', error);
//       alert('An error occurred while updating petition status. Please try again later.');
//     }
//   };
 
//   return (
// <div>
// <h2>Update Petition Status</h2>
// <form onSubmit={handleSubmit}>
// <div>
// <label htmlFor="petitionId">Petition ID:</label>
// <input type="text" id="petitionId" value={petitionId} onChange={(e) => setPetitionId(e.target.value)} required />
// </div>
// <div>
// <label htmlFor="statusType">Status Type:</label>
// <select id="statusType" value={statusType} onChange={(e) => setStatusType(e.target.value)} required>
// <option value="">Select Status</option>
// <option value="resolved">Resolved</option>
// <option value="rejected">Rejected</option>
// <option value="approved">Approved</option>
//             {/* Add more status options as needed */}
// </select>
// </div>
// <button type="submit">Update Status</button>
// </form>
// </div>
//   );
// }
 
// export default PetitionStatusUpdate;


import React, { useState } from 'react';
import axios from 'axios';
 
function PetitionStatusUpdate() {
  const [petitionId, setPetitionId] = useState('');
  const [statusType, setStatusType] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5112/api/PetitionStatusApproval', { petitionId, statusType });
      alert('Petition status updated successfully!');
      // You can add additional logic here if needed, such as clearing the form fields
    } catch (error) {
      console.error('Error updating petition status:', error);
      alert('An error occurred while updating petition status. Please try again later.');
    }
  };
 
  return (
<div className="container mt-4">
<h2>Update Petition Status</h2>
<form onSubmit={handleSubmit}>
<div className="form-group">
<label htmlFor="petitionId">Petition ID:</label>
<input type="text" className="form-control" id="petitionId" value={petitionId} onChange={(e) => setPetitionId(e.target.value)} required />
</div>
<div className="form-group">
<label htmlFor="statusType">Status Type:</label>
<select className="form-control" id="statusType" value={statusType} onChange={(e) => setStatusType(e.target.value)} required>
<option value="">Select Status</option>
<option value="resolved">Resolved</option>
<option value="rejected">Rejected</option>
<option value="approved">Approved</option>
<option value="Closed">Closed</option>
            {/* Add more status options as needed */}
</select>
</div>
<button type="submit" className="btn btn-primary">Update Status</button>
</form>
</div>
  );
}
 
export default PetitionStatusUpdate;