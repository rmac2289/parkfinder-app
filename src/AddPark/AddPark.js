import React, { useState } from 'react';
import './AddPark.css'
import SuggestionsApiService from '../services/SuggestionsApiService';

export default function AddPark() {
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [parkName, setParkName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const handleSuggestionSubmit = e => {
        e.preventDefault();
        SuggestionsApiService.postSuggestion(parkName, location, description)
            .then(setSuccess(true))
            .catch(error => setError(error.error));
    };

    const getParkName = e => setParkName(e.target.value);
    const getLocation = e => setLocation(e.target.value);
    const getDescription = e => setDescription(e.target.value);

    return (
        <div className="add-park-form">
            <form onSubmit={handleSuggestionSubmit} className="add-park">
                {success && <p>success! your submission will be reviewed, check back soon to see if it has been posted.</p>}
                <h1 id="add-park-header">Suggest a park</h1>
                <div className="input-container">
                    <label htmlFor="park-name">park name*</label>
                    <input onChange={getParkName} value={parkName} id="park-name" name="park-name" type="text" required/>

                </div>
                <div className="input-container">
                    <label htmlFor="location">location*</label>
                    <input onChange={getLocation} value={location} id="location" name="location" type="text" required/>

                </div>
                <div className="input-container">
                    <label htmlFor="description">description*</label>
                    <textarea onChange={getDescription} value={description} id="description" name="description" rows="3" required/>
                </div>
                <div className="button-container">
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}