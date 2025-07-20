import React, { useContext } from 'react';  // ✅ react + useContext
import UserContext from '../UserContext';   // ✅ make sure the path is correct

function UserProfile() {
  const userData = useContext(UserContext);  // ✅ consuming context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
