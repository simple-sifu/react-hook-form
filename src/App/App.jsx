import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import { useForm } from "react-hook-form";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function App() {

  let schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().min(6)
  })

  const { 
    register, 
    handleSubmit,
    setValue,
    formState: { errors }  
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: 'Tommy Han',
      email: 'than@gmail.com',
      password: 'dsafas',
    },
  });

  setValue("fullName","Donald Han");
  const submitForm = (data) => {
    console.log(data)
  }

  return (
    <div className="app">

      <h4 className="text-center">Registration Form</h4>
      
      <form onSubmit={handleSubmit(submitForm)}>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text"
          className="form-control font-weight-bold" placeholder="Your Name" 
            {...register("fullName")} 
            name="fullName"
          />
          {errors.fullName?.type === 'required' && <p>Name is required</p> }
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="text"
            className="form-control font-weight-bold" 
            placeholder="Enter email" 
            {...register(
              "email"
             )
            } 
            name="email"
          />
          {(errors.email?.type === 'required') && <p>Email is required</p> }
          {(errors.email?.type === 'email') && <p>Email pattern is not correct</p> }
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="text" 
            className="form-control font-weight-bold" 
            placeholder="Password" 
            {...register(
              "password"
             )
            }
            name="password"
          />
           {(errors.password?.type === 'required') && <p>Password is required</p> }
           {(errors.password?.type === 'min') && <p>Password is too short</p> }
        </div>


        <input type="submit" className="btn btn-primary text-center" value="Register"/>

      </form>
    </div>
  );
}

export default App;