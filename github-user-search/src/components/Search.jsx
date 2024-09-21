import React, { useState } from 'react';

function Search({ onSearch }) {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onSearch(username);
        }
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Search GitHub Username"
                    className="input-field"
                />
                <button type="submit" className="submit-btn">Search</button>
            </form>
        </div>
    );
}

export default Search;
