import React from 'react';

const SupportGroups = () => {
    // Static list of support groups
    const groups = [
        {
            id: 1,
            name: 'Anxiety Support Group',
            description: 'A group for individuals dealing with anxiety to share experiences and coping strategies.',
            doctor: 'Dr. Smith'
        },
        {
            id: 2,
            name: 'Depression Support Group',
            description: 'Support for those experiencing depression, focusing on understanding and healing.',
            doctor: 'Dr. Jones'
        },
        {
            id: 3,
            name: 'Parenting Support Group',
            description: 'A space for parents to discuss challenges and share resources related to parenting.',
            doctor: 'Dr. Williams'
        },
        {
            id: 4,
            name: 'Grief Support Group',
            description: 'A supportive environment for individuals coping with loss and grief.',
            doctor: 'Dr. Brown'
        },
    ];

    return (
        <div>
            <h2>Support Groups</h2>
            <ul>
                {groups.map((group) => (
                    <li key={group.id}>
                        <h3>{group.name}</h3>
                        <p>{group.description}</p>
                        <p><strong>Facilitated by:</strong> {group.doctor}</p>
                        <button>Join Group</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SupportGroups;
