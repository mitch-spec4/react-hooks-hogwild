import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';

const HogTile = ({ hog }) => {
    const [showDetails, setShowDetails] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

   
    if (!isVisible) return null;

    const handleToggleDetails = () => {
        setShowDetails(prevState => !prevState);
    };

    const handleHideHog = (event) => {
        event.stopPropagation(); 
        setIsVisible(false);
    };

    return (
        <Card onClick={handleToggleDetails}>
            <Card.Content>
                <Card.Header>{hog.name}</Card.Header>
                <Card.Description>
                    <img src={hog.image} alt={hog.name} />
                </Card.Description>
                {showDetails && (
                    <Card.Description>
                        <p>Specialty: {hog.specialty}</p>
                        <p>Weight: {hog.weight} kg</p>
                        <p>Greased: {hog.greased ? 'Yes' : 'No'}</p>
                        <p>Highest Medal: {hog['highest medal achieved']}</p>
                        <button onClick={handleHideHog}>Hide</button>
                    </Card.Description>
                )}
            </Card.Content>
        </Card>
    );
};

export default HogTile;
