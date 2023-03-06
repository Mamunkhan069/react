import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { Navigate } from 'react-router-dom';

class Login extends Component {
    state={
        isLogedIn: false,
        error: ""
    }

    render() { 
        return (
            <div className='container mt-5'>
                <Formik
                    initialValues={{email: "", password: ""}}
                    onSubmit= {(values, e) =>{
                        console.log(values);
                        if(values.email === 'mamunkhan@gmail.com' && values.password === '12345678'){
                            this.setState({...this.state, isLogedIn: true});

                        }
                        else{
                            this.setState({...this.state, error: "invaliv credential"});
                        }
                        e.setSubmitting(false);
                    }}
                >
                    {formik=>(
                        <Form className='mb-3'>
                            <div className="mb-3">
                                <label htmlFor='email' className='form-label'>Email Address</label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    id="email"
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <Field 
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id="password"     
                                /> 
                            </div>

                            {
                                this.state.error && <span className='text-danger'>{this.state.error}</span>
                            }

                            <br />

                            <button
                                type="submit" 
                                className="btn btn-primary"
                            >
                                Login
                            </button>

                        </Form>

                    )}

                </Formik>
                { this.state.isLogedIn && <Navigate to="/counters" replace={true} />}
                
            </div>
        );
    }
}
 
export default Login;
