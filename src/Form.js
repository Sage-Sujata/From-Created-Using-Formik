import axios from "axios";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const BasicExample = () => (
  <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required"),
      })}
      onSubmit={(fields) => {
        debugger;

        axios.post(`http://localhost:5000/exportdata`, fields).then((res) => {
          debugger;
          console.log(res);
          console.log(res.data);
        });
        axios.get(`http://localhost:5000/importdata`).then((res) => {
          const persons = res.data;
          // this.setState({ persons });
          console.log(persons)
        })

        // alert("SUCCESS!! :-)\n\n" + JSON.stringify(fields, null, 4));
      }}
       
        
      
      render={({ errors, status, touched, resetForm }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <Field
              name="firstName"
              type="text"
              className={
                "form-control" +
                (errors.firstName && touched.firstName ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <Field
              name="lastName"
              type="text"
              className={
                "form-control" +
                (errors.lastName && touched.lastName ? " is-invalid" : "")
              }
            />
            <ErrorMessage
              name="lastName"
              component="div"
              className="invalid-feedback"
            />
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
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              name="confirmPassword"
              type="password"
              className={
                "form-control" +
                (errors.confirmPassword && touched.confirmPassword
                  ? " is-invalid"
                  : "")
              }
            />
            <ErrorMessage
              name="confirmPassword"
              component="div"
              className="invalid-feedback"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary mr-2">
              Register
            </button>
            <button type="reset" className="btn btn-secondary">
              Reset
            </button>
          </div>
        </Form>
      )}

      
    />
    {/* <Formik
      initialValues={{
        name: "sujata",
        email: "sujata672singh@gmail.com",
        password: "sujata1@",
        confirmpassword: "sujata1@",
        phone: 8427925642,
      }}
      onSubmit={(values, actions) => {
        debugger;
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <input
            id="12"
            name="456a"
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
          />
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
          />
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.password}
          />
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.conformpassword}
          />
          <input
            type="text"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.phone}
          />
          {props.errors.name && <div id="feedback">{props.errors.name}</div>}
          {props.errors.email && <div id="feedback1">{props.errors.email}</div>}
          {props.errors.password && (
            <div id="feedback2">{props.errors.password}</div>
          )}
          {props.errors.conformpassword && (
            <div id="feedback3">{props.errors.confirmpassword}</div>
          )}
          {props.errors.phone && <div id="feedback4">{props.errors.phone}</div>}
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik> */}
  </div>
);

// //getting request
// export default class PersonList extends React.Component {
//   state = {
//     persons: [],
//   };

  // componentDidMount() {
  //   axios.get(`http://localhost:5000/importdata`).then((res) => {
  //     const persons = res.data;
  //     this.setState({ persons });
  //   });
  // }

//   render() {
//     return (
//       <ul>
//         {this.state.persons.map((person) => (
//           <li>{person.name}</li>
//         ))}
//       </ul>
//     );
//   }
// }

// //post request
// export default class PersonList extends React.Component {
//   state = {
//     name: "",
//   };

//   handleChange = (event) => {
//     this.setState({ name: event.target.value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name,
//     };

//     axios
//       .post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     );
//   }
// }

export default BasicExample;
