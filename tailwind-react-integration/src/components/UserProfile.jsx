function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-8 max-w-xs mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:max-w-sm md:p-8">
        <img src="https://via.placeholder.com/150" alt="User" className="rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36" />
        <h1 className="text-xl text-blue-800 my-4 sm:text-lg sm:my-2 md:text-xl md:my-4">John Doe</h1>
        <p className="text-gray-600 text-base sm:text-sm md:text-base">Developer at Example Co. Loves to write code and explore new technologies.</p>
      </div>
    );
}
  
 export default UserProfile;