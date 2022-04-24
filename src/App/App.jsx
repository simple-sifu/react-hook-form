import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

function App() {

  return (
    <div className="app">
      <h4 className="text-denter">Registration Form</h4>
      <form>
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" className="form-control font-weight-bold" placeholder="Your Name" />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="text" className="form-control font-weight-bold" placeholder="Enter email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control font-weight-bold" placeholder="Password" />
        </div>

      </form>
    </div>
  );
}

export default App;