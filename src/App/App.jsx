import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

function App() {

  const { 
    register, 
    handleSubmit,
    formState: { errors }  
  } = useForm();


  console.log(errors);

  return (
    <div className="app">

      <h4 className="text-center">Registration Form</h4>
      
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
      >

        <div className="form-group">
          <label>Full Name</label>
          <input 
          className="form-control font-weight-bold" placeholder="Your Name" 
            {...register("fullName", {
              required: "fullName is required"
            })} 
          />
          <ErrorMessage errors={errors} name="fullName"/>
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input 
            className="form-control font-weight-bold" 
            placeholder="Enter email" 
            {...register(
              "email", 
              {
                required:"email address is required", 
                pattern:{
                  value: /\S+@\S+\.\S+/,
                  message: 'email address format is wrong'
                }
              }
             )
            } 
          />
          <ErrorMessage errors={errors} name="email"/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input 
            className="form-control font-weight-bold" 
            placeholder="Password" 
            {...register(
              "password", 
              {
                required:"password is required",
                minLength: {
                  value: 6, 
                  message: 'Min Length required is 4 characters'
                }
              }
             )
            }
          />
          <ErrorMessage errors={errors} name="password" />
        </div>


        <input type="submit" className="btn btn-primary text-center" value="Register"/>

      </form>
    </div>
  );
}

export default App;