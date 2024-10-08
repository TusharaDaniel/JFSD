import React, { useState } from 'react';
import axios from 'axios';

const AddResource = () => {
    const [resource, setResource] = useState({
        title: '',
        description: '',
        link: ''
    });

    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/resources', resource, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            console.log('Resource added successfully:', response.data);
        } catch (error) {
            console.error('Error adding resource:', error);
        }
    };

    return (
        <div>
            <h2>Add New Resource</h2>
            <input 
                type="text" 
                placeholder="Title" 
                value={resource.title} 
                onChange={(e) => setResource({ ...resource, title: e.target.value })}
            />
            <textarea 
                placeholder="Description"
                value={resource.description}
                onChange={(e) => setResource({ ...resource, description: e.target.value })}
            />
            <input 
                type="text" 
                placeholder="Link" 
                value={resource.link} 
                onChange={(e) => setResource({ ...resource, link: e.target.value })}
            />
            <button onClick={handleSubmit}>Add Resource</button>
        </div>
    );
};

export default AddResource;
