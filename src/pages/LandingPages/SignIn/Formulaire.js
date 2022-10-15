import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function Formulaire() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  // eslint-disable-next-line no-console
  console.log(email, password);

  return (
    <div>
      <form>
        <div className="form-group">
          <TextField
            id="outlined-name"
            label="Name"
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            required="required"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <TextField
            id="outlined-name"
            label="Password"
            type="password"
            name="password"
            className="form-control"
            placeholder="Mot de passe"
            required="required"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="pass">
          <a href="forgetPassword">Forgot Password?</a>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Sign in
          </button>
        </div>
        <p className="para-2">
          Not have an account? <a href="inscription.html">Sign Up Here</a>
        </p>
      </form>
    </div>
  );
}
