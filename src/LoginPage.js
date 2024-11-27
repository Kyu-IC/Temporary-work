import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './login.css'; // Import the CSS for styling

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting

    // Example check (replace with actual validation logic)
    if (email === "" || password === "" || email !== "test@example.com" || password !== "123") {
      setError(true); // Show error message
    } else {
      setError(false); // Clear error message
      // Redirect to MainPage.js using React Router
      navigate('/main');
    }
  };

  return (
    <div className="login-page__container">
      <div className="login-page__section">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Handle email input change
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Handle password input change
            required
          />

          <div className="login-page__options">
            <label>
              <input type="checkbox" name="remember" /> Remember me
            </label>
            <a href="#">Forgot password</a>
          </div>

          <button type="submit">Sign in</button>

          {/* Show error message if credentials are incorrect */}
          {error && (
            <div className="login-page__error-message">
              Invalid username or password
            </div>
          )}

          {/* Sign up section */}
          <div className="login-page__signup-text">
            <span className="login-page__dont-have-account">Don't have an account?</span>
            <a href="/sign-up" className="login-page__sign-up">Sign up</a>
          </div>
        </form>
      </div>

      <div className="login-page__branding-section">
        <div className="login-page__logo">
          <span className="login-page__highlight">N</span>otA<span>Facebook</span>
        </div>
        <div className="login-page__bottom-right-text">
          <p>AIE222 - Final Project</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;