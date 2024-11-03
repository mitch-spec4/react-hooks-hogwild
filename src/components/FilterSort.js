
import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const FilterSort = ({ greased, toggleGreased, handleSortChange }) => {
    const sortOptions = [
        { key: 'name', text: 'Sort by Name', value: 'name' },
        { key: 'weight', text: 'Sort by Weight', value: 'weight' },
    ];

    return (
        <div className="filter-sort">
            <div className="ui toggle checkbox">
                <input 
                    type="checkbox" 
                    checked={greased} 
                    onChange={(e) => toggleGreased(e.target.checked)} 
                />
                <label>Show Greased</label>
            </div>
            <Dropdown
                placeholder='Sort by'
                fluid
                selection
                options={sortOptions}
                onChange={(e, { value }) => handleSortChange(value)}
                style={{ marginLeft: '10px' }} // Adding margin for better spacing
            />
        </div>
    );
};

export default FilterSort;
