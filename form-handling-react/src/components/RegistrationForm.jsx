import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.password.trim()) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Mock API request
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User registered successfully!");
        setFormData({ username: "", email: "", password: "" });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold">Controlled Registration Form</h2>

      <div>
        <label className="block">Username</label>
        <input
          type="text"
          name="username"
          className="border p-2 w-full"
          value={formData.username}
          onChange={handleChange}
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>

      <div>
        <label className="block">Email</label>
        <input
          type="email"
          name="email"
          className="border p-2 w-full"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label className="block">Password</label>
        <input
          type="password"
          name="password"
          className="border p-2 w-full"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
