'use client';

import styles from '@/app/login/login.module.scss';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ForgetPasswordPage = () => {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
  });

  // Initial form values
  const initialValues = {
    email: '',
  };

  // Submit handler
  const onSubmit = (values: typeof initialValues) => {
    console.log('Forgot Password Form Submitted:', values);
    // handle password reset logic (e.g., API call)
  };

  return (
    <div className="auth-main bg-light min-vh-100">
      <div className="container">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <>
              <div className="py-2">
                <a href="#"><img src="/assets/images/logo-dark.svg" alt="logo" /></a>
              </div>
              <Form>
                <div className={`${styles.maxWidth} card my-5 v3 container mx-auto w-100`}>
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-end mb-4">
                      <h3 className="mb-0"><b>Forgot Password</b></h3>
                      <a href="#" onClick={handleLoginRedirect} className="link-primary">Back to Login</a>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email Address</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter your registered email"
                        className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                      />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    <div className="d-grid mt-4">
                      <button type="submit" className="btn btn-brand">Send Reset Link</button>
                    </div>
                  </div>
                </div>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
