import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

let defaultValues = {
  Apple: false,
  Banana: false,
  Tea: false,
  Coffee: false,
};

const initialValues = {
  firstname: "",
  lastname: "",
  country: "",
  status:"",
  image : ""
};

const onSubmit = (values) => {
  console.log("Val...........", values);
};

const validate = (values) => {
  let errors = {};
  if (!values.firstname) {
    errors.firstname = "Required";
  }
  if (!values.lastname) {
    errors.lastname = "Required";
  }
  if (!values.country) {
    errors.country = "Required";
  }
  if (!values.status) {
    errors.status = "Required";
  }
  if (!values.image) {
    errors.image = "Required";
  }
  // if(!values.email){
  //   errors.email = 'Required'
  // }
  // else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)){
  //   errors.email = "Invalid Email"
  // }

  return errors;
};

export default function FormikForm() {
  const [sample, setSample] = useState([defaultValues]);
  const [formData, setFormData] = useState({ sample });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <div className="App">
      <h3>Hello CodeSandbox</h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">Firstname:</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.firstname}
              type="text"
              name="firstname"
              placeholder="Firstname"
            />
            {formik.errors.firstname ? (
              <div className="error">{formik.errors.firstname}</div>
            ) : null}
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="lastname">Lastname:</label>
            <input
              onChange={formik.handleChange}
              value={formik.values.lastname}
              type="text"
              name="lastname"
              placeholder="Lastname"
            />
            {formik.errors.lastname ? (
              <div className="error">{formik.errors.lastname}</div>
            ) : null}
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <select name="country" onChange={formik.handleChange}>
              <option value=""></option>
              <option value="india">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="canada">Canada</option>
            </select>
            {formik.errors.country ? (
              <div className="error">{formik.errors.country}</div>
            ) : null}
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="status">Status:</label>
            <label className="form-check-label">
              <input
                type="radio"
                name="status"
                value="Active"
                onChange={formik.handleChange}
              />
              Active
            </label>
            <label htmlFor="status" className="form-check-label">
              <input
                type="radio"
                name="status"
                value="Inactive"
                onChange={formik.handleChange}
              />
              Inactive
            </label>
            {formik.errors.status ? (
              <div className="error">{formik.errors.status}</div>
            ) : null}
          </div>
          <br />
          {/* <div className="form-group">
            <label htmlFor="checkitem">CheckBox:</label>
            {sample.map((ele, index) => {
              return (
                <>
                  {Object.keys(ele).map((key) => {
                    return (
                      <>
                        <input
                          type="checkbox"
                          checked={ele[key]}
                          onChange={(e) => {
                            var temp = [...sample];
                            temp.map((ele) => {
                              ele[key] = !ele[key];
                            });
                            setSample(temp);
                          }}
                        />
                        {key}
                        <br />
                      </>
                    );
                  })}
                  <br />
                </>
              );
            })}
          </div> */}
           <div className="form-group">
            <label htmlFor="image">Image:</label>
            <input
              type="file"
              name="image"
              onChange={formik.handleChange}
            />
            <img src={values.image} />
            {formik.errors.image ? (
              <div className="error">{formik.errors.image}</div>
            ) : null}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
