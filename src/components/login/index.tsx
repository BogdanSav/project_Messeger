import React from 'react'
// import './styles.scss'
// import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function LoginComponent () {
  return (
    <div className='login-wrapper'>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {email:""}
          if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
      
        {({ isSubmitting }) => (
          <Form className='login-form'>
            <h1 id='login'>Login</h1>
            <Field type='email' name='email' placeholder='email' />
            <ErrorMessage name='email' component='div' />
            <Field type='password' name='password' placeholder='password' />
            <ErrorMessage name='password' component='div' />
            <button type='submit' disabled={isSubmitting} className='myButtonLog'>
              Sign in
            </button>
            {/* <Link to='/registration'> */}
            <button className='myButtonLog'>Registration</button>
            {/* </Link> */}
            {/* <Link to='/forgotPassword'> */}
            <a href="/forgot-password">Forgot password?</a>
            {/* </Link> */}
          </Form>
        )}
      </Formik>
    </div>
  )
}
