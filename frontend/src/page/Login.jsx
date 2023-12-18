import React, { useState } from 'react';
import { useAuth } from "../store/auth";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { storetokenInls } = useAuth(); // Check the casing here

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      let one = { email, password };
      const response = await fetch('http://localhost:9000/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(one),
      });

      if (response.ok) {
        const data = await response.json();
        storetokenInls(data.token); // Use the function here
        console.log(data);
        console.log("success login");
        console.log(response);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
