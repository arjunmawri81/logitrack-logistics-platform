import { Link, useNavigate } from "react-router-dom";
import "../../styles/Auth.css";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;

    // Demo Role Logic
    if (email === "admin@test.com") {
      localStorage.setItem("role", "ADMIN");
      navigate("/admin/dashboard");
    } else {
      localStorage.setItem("role", "MERCHANT");
      navigate("/dashboard");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            required
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;