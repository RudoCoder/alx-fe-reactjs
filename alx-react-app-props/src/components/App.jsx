import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // ✅ Make sure this line is present

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}> {/* ✅ Wrap with Provider */}
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
