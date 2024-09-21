import React, { useState } from 'react';
import { fetchUserData } from './services/githubService';
import Search from './components/Search';

function App() {
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

  return (
    <div className="app-container">
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
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

export default App;

