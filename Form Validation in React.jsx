import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });

  // Email regex for validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = (value) => {
    if (!emailPattern.test(value)) {
      return "Invalid email address";
    }
    return "";
  };

  const isFormValid = () => {
    return (
      email &&
      !validateEmail(email) &&
      password
    );
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div style={{ maxWidth: 350, margin: "auto", padding: 20 }}>
      <h2>React Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 15 }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => handleBlur("email")}
            style={{ width: "100%", padding: "8px" }}
          />
          {touched.email && emailError && (
            <div style={{ color: "red", marginTop: 5 }}>{emailError}</div>
          )}
        </div>
        <div style={{ marginBottom: 15 }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={() => handleBlur("password")}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>
        <button
          type="submit"
          disabled={!isFormValid()}
          style={{
            padding: "8px 16px",
            background: isFormValid() ? "#1976d2" : "#90a4ae",
            color: "#fff",
            border: "none",
            cursor: isFormValid() ? "pointer" : "default",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
