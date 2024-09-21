import React, { useState } from 'react';

function Search() {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (searchParams) => {
        setLoading(true);
        setError(null);
        try {
            const userData = await fetchUserData(searchParams);
            setUsers(userData);
        } catch (error) {
            setError("No users found with the provided criteria");
            setUsers([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send username, location, and minRepos to the parent component
        handleSearch({ username, location, minRepos });
    };

    return (
        <div className="app-container p-8">
            <h1 className="text-center text-2xl font-bold mb-8">GitHub User Search</h1>
            <div className="search-container p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Search GitHub Username"
                        className="input-field w-full p-2 border rounded-md"
                    />
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Location"
                        className="input-field w-full p-2 border rounded-md"
                    />
                    <input
                        type="number"
                        value={minRepos}
                        onChange={(e) => setMinRepos(e.target.value)}
                        placeholder="Minimum Repositories"
                        className="input-field w-full p-2 border rounded-md"
                    />
                    <button type="submit" className="submit-btn w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                        Search
                    </button>
                </form>
            </div>
            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {users.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
                    {users.map((user) => (
                        <div key={user.id} className="user-card p-4 bg-white rounded-lg shadow-md">
                            <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mx-auto" />
                            <h2 className="text-center text-lg font-bold mt-4">{user.login}</h2>
                            <p className="text-center">
                                <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                    View Profile
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Search;
