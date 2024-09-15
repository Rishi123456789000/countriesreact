import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { countriesData } from './countrydata';

function MyDropdown() {
    const [selectedCountryId, setSelectedCountryId] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedStateName, setSelectedStateName] = useState('');

    // Handle country selection
    const handleCountrySelect = (countryId) => {
        setSelectedCountryId(countryId);
        const country = countriesData.find(c => c.country_id === countryId);
        setSelectedCountry(country);
        setSelectedStateName(''); // Reset state selection when a new country is selected
    };

    // Handle state selection
    const handleStateSelect = (stateName) => {
        setSelectedStateName(stateName);
    };

    return (
        <>
            {/* Country Dropdown */}
            <DropdownButton 
                id="dropdown-country-button" 
                title={selectedCountry ? selectedCountry.country_name : "Select Country"}
            >
                {countriesData.map((country) => (
                    <Dropdown.Item
                        key={country.country_id}
                        onClick={() => handleCountrySelect(country.country_id)}
                    >
                        {country.country_name}
                    </Dropdown.Item>
                ))}
            </DropdownButton>

            <h2>States</h2>

            {/* State Dropdown */}
            <DropdownButton 
                id="dropdown-state-button" 
                title={selectedStateName ? selectedStateName : "Select State"} 
                disabled={!selectedCountry}
            >
                {selectedCountry ? (
                    selectedCountry.states.map((state) => (
                        <Dropdown.Item 
                            key={state.state_id}
                            onClick={() => handleStateSelect(state.state_name)}
                        >
                            {state.state_name}
                        </Dropdown.Item>
                    ))
                ) : (
                    <Dropdown.Item disabled>Select a country first</Dropdown.Item>
                )}
            </DropdownButton>
        </>
    );
}

export default MyDropdown;
