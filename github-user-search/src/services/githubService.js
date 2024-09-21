import axios from 'axios';

// Function to fetch user data from the GitHub API
export const fetchUserData = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching GitHub user:", error);
        throw error;
    }
};
