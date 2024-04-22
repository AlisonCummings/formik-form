import React from 'react';
import { useFormik } from 'formik';


function App() {
const formik = useFormik({
  intitalValues: {
    name: "",
    email: "",
    password: "",
  },
  onSubmit: values => {
    console.log('form:', values);
  },
  validate: (values) => {
    let errors = {};
    if (!values.email) errors.email = "*name required";
    if (!values.email) errors.email = "*email required";
    if (!values.password) errors.password = "*password required";
    return errors;
  },
  
});

  return (
    <div>
     <form onSubmit={formik.handleSubmit}>
      <div>Name: </div>
      <input id="nameField" name="name" type="text" onChange={formik.handleChange} value={formik.values.name}/>
      {formik.errors.name ? (
          <div id="nameError" style={{ color: "red" }}>
            {formik.errors.name} </div>) : null}

      <div>Email: </div>
      <input id="emailField" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
      {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email} </div>) : null}

      <div>Password: </div>
      <input id="pswField" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>
      {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password} </div>) : null}

      <button id="submitBtn" type="submit">Submit</button>

     </form>
    </div>
  );

};

export default App;
