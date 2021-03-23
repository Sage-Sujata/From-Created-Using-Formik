import axios from "axios";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginForm = () => (
  <div>
    <h1>Login</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
      })}
      onSubmit={(fields) => {
        debugger;

        
      }}
      render={({ errors, status, touched, resetForm }) => (
        <Form>
          <div className="form-group">
            {}
            {}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <Field
              name="email"
              type="text"
              className={
                "form-control" +
                (errors.email && touched.email ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="email"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              name="password"
              type="password"
              className={
                "form-control" +
                (errors.password && touched.password ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="password"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            {}
            {}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2">
              Login
            </button>
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </div>
        </Form>
      )}
    />
  </div>
);

export default LoginForm;
