import React, { useState } from 'react';

function Search() {
    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (username) => {
        setLoading(true);
        setError(null);
        try {
            const userData = await fetchUserData(username);
            setUser(userData);
        } catch (error) {
            setError("Looks like we can't find the user");
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            handleSearch(username);
        }
    };

    return (
        <div className="app-container">
        <h1>GitHub User Search</h1>
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
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {user && (
          <div className="user-info">
            <img src={user.avatar_url} alt={user.login} />
            <h2>{user.name || user.login}</h2>
            <p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </p>
          </div>
        )}
      </div>
    );
}

export default Search;
