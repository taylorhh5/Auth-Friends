import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import { axiosWithAuth } from '../utils/axiosWithAuth';




const MainForm = ({ errors, touched, values, status }) => {
    const [users, setUsers] = useState({});
    console.log("user", users);
    useEffect(() => {
        if (status) {
            // const addNewPerson = user =>
            setUsers([ ...users, status ]);
        }
    }, [status]);

    return (

        <div className="forms">

            <Form>
                <Field name="name" type="text" placeholder="name" />
                {touched.name && errors.name && (
                    <p>{errors.name}</p>
                )}
                 <Field name="age" type="text" placeholder="age" />
                {touched.age && errors.age &&
                    (<p>{errors.age}</p>
                    )}
                    <Field name="email" type="text" placeholder="email" />
                {touched.email && errors.email &&
                    (<p>{errors.email}</p>
                    )}
           



                <button type="submit">Submit</button>

            </Form>



           
              
          
        </div>
    )

};

const FormikMainForm = withFormik({
    mapPropsToValues({ name, age, email }) {
        return {
            name: name || "",
            age: age || "",
            email: email || "",
           
        };

    },
    validationSchema: Yup.object().shape({

        


    }),
    handleSubmit(values, { setStatus }) {
    

            axiosWithAuth()
      .post('/friends', setStatus)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
      console.log (res)
    
        this.props.history.push('/protected');
      })
      .catch(err => console.log(err));
      
    }

})(MainForm)

export default FormikMainForm;



