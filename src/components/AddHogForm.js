import React, { useState } from 'react';

const AddHogForm = ({ setHogs }) => {
    const [name, setName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [weight, setWeight] = useState('');
    const [greased, setGreased] = useState(false);
    const [medal, setMedal] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newHog = {
            name,
            specialty,
            weight: parseFloat(weight), // Ensure weight is a number
            greased,
            'highest medal achieved': medal
        };
        setHogs(prevHogs => [...prevHogs, newHog]);
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setSpecialty('');
        setWeight('');
        setGreased(false);
        setMedal('');
    };

    return (
        <form onSubmit={handleSubmit} className="add-hog-form">
            <div className="form-field">
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    placeholder="Name" 
                    required 
                />
            </div>
            <div className="form-field">
                <input 
                    type="text" 
                    value={specialty} 
                    onChange={(e) => setSpecialty(e.target.value)} 
                    placeholder="Specialty" 
                    required 
                />
            </div>
            <div className="form-field">
                <input 
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)} 
                    placeholder="Weight" 
                    required 
                />
            </div>
            <div className="form-field">
                <label>
                    <input 
                        type="checkbox" 
                        checked={greased} 
                        onChange={(e) => setGreased(e.target.checked)} 
                    />
                    Greased
                </label>
            </div>
            <div className="form-field">
                <input 
                    type="text" 
                    value={medal} 
                    onChange={(e) => setMedal(e.target.value)} 
                    placeholder="Highest Medal Achieved" 
                />
            </div>
            <button type="submit">Add Hog</button>
        </form>
    );
};

export default AddHogForm;
