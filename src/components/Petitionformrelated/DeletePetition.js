import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const DeletePetitionButton = ({ petitionId, onDeleteSuccess }) => {
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:5112/api/Userpetition/DeletePetition/api/DeletePetition/${petitionId}`);
            if (response.status === 200) {
                // Call the onDeleteSuccess callback if provided
                onDeleteSuccess && onDeleteSuccess();
                alert('Petition deleted successfully');
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Error response:', error.response.data);
                alert('Failed to delete the petition');
            } else if (error.request) {
                // The request was made but no response was received
                console.error('Error request:', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error message:', error.message);
            }
        }
    };

    return (
        <Button className='btn btn-danger' onClick={handleDelete}>Delete Petition</Button>
    );
};

export default DeletePetitionButton;
