import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../../services/api";
import "../../styles/Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      setLoading(true);

      const response = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      const { token, user } = response.data;

      localStorage.setItem(
        "token",
        token
      );

      localStorage.setItem(
        "role",
        user.role
      );

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      if (
        user.role === "ADMIN" ||
        user.role === "SUPER_ADMIN"
      ) {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      alert(
        error?.response?.data?.message ||
        "Login Failed"
      );
    } finally {
      setLoading(false);
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

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Logging In..."
              : "Login"}
          </button>
        </form>

        <p>
          Don't have an account?
          <Link to="/register">
            {" "}Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;