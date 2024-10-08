import React, { useState } from 'react';
import { addResource } from '../services/resourceService';

const AddResource = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const resource = { title, description };
            await addResource(resource);
            alert('Resource added successfully!');
        } catch (error) {
            console.error('Error adding resource:', error);
        }
    };

    return (
        <div>
            <h2>Add Resource</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Title" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
                <textarea 
                    placeholder="Description" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <button type="submit">Add Resource</button>
            </form>
        </div>
    );
};

export default AddResource;
