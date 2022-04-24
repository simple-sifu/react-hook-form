import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import { useForm } from "react-hook-form";

function App() {

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(JSON.stringify(data));

  return (
    <div className="app">

      <h4 className="text-center">Registration Form</h4>
      
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control font-weight-bold" placeholder="Your Name" {...register("fullName")} name="fullName"/>
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="text" className="form-control font-weight-bold" placeholder="Enter email" {...register("email")} name="email"/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control font-weight-bold" placeholder="Password" {...register("password")} name="password"/>
        </div>

        <button type="submit" className="btn btn-primary text-center">Register</button>

      </form>
    </div>
  );
}

export default App;