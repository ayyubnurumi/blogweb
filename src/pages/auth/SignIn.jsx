import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

export const SignIn = () => {
  const nav = useNavigate();
  const [data, setData] = useState({username: '', password: ''});
  const handleSignIn =(e)=> {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(data));
    nav('/');
  }
  return (
    <form className="container p-5 text-center">
      <h1 className="mb-4">Join Medium.</h1>
      <div className="form-floating my-3">
        <input
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={(e)=>setData({...data, username: e.target.value})}
        />
        <label htmlFor="floatingInput">Username</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          autoComplete="Password"
          onChange={(e)=>setData({...data, password: e.target.value})}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button className="btn btn-primary my-4" type="submit" onClick={handleSignIn}>Sign In</button>
      <p>Already have an account? <Link to={'/signup'}>Sign up</Link></p>
      <p className="m-5 p-5">Click “Sign Up” to agree to Medium’s Terms of Service and acknowledge that Medium’s Privacy Policy applies to you.</p>
    </form>
  );
};
