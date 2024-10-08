// pages/Resources.js
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const Resources = () => {
    return (
        <div
            style={{
                padding: '20px',
                backgroundImage: 'url(https://media.istockphoto.com/id/1366554103/vector/mint-abstract-watercolor-texture-background.jpg?s=612x612&w=0&k=20&c=4n6PhMM13Uqlb6QVeyu5ayh4rMFoyF3XeleXCddHLCc=)', // Replace with your image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh', // Ensure it covers the full viewport height
            }}
        >
            <h1>Mental Health Resources</h1>
            <p>Here you can find a list of mental health resources to help you maintain your well-being.</p>
            {/* Existing resource links */}
            <ul>
                <li><a href="https://www.mentalhealth.gov" target="_blank" rel="noopener noreferrer">MentalHealth.gov</a></li>
                <li><a href="https://www.nimh.nih.gov" target="_blank" rel="noopener noreferrer">National Institute of Mental Health</a></li>
                <li><a href="https://www.mind.org.uk" target="_blank" rel="noopener noreferrer">Mind (UK)</a></li>
                <li><a href="https://www.samhsa.gov" target="_blank" rel="noopener noreferrer">Substance Abuse and Mental Health Services Administration (SAMHSA)</a></li>
            </ul>

            {/* Embed the ActiveExample ListGroup */}
            <h2>Additional Resources</h2>
            <ListGroup as="ul">
                <ListGroup.Item as="li" active>
                    Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item as="li" disabled>
                    Morbi leo risus
                </ListGroup.Item>
                <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
        </div>
    );
};

export default Resources;
