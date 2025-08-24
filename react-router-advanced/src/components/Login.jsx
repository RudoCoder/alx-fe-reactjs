import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/profile");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin} className="bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </div>
  );
}

export default Login;
