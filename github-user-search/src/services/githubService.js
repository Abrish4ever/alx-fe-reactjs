import axios from 'axios';

// Function to fetch users based on search criteria
export const fetchUsers = async ({ username, location, minRepos }) => {
    try {
        // Build the query for GitHub search API
        let query = `${username ? `user:${username}` : ''}`;

        if (location) {
            query += ` location:${location}`;
        }

        if (minRepos) {
            query += ` repos:>=${minRepos}`;
        }

        const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
        return response.data.items;
    } catch (error) {
        console.error("Error fetching GitHub users:", error);
        throw error;
    }
};
