'use client';
import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from '@/app/register/register.module.scss';
import { registerTexts } from '@/app/register/register.constants';
import { ThemeToggle } from '@/components/theme_toggle';

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  organization: Yup.string().required('Organization is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(8, 'Min 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .required('password confirmation is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  acceptTerms: Yup.boolean().oneOf([true], 'You must accept the terms'),
});

const Page = () => {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/login');
  };

  // Initial values
  const initialValues = {
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };

  // Submit handler
  const onSubmit = (values: typeof initialValues) => {
    console.log('Form Submitted', values);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-800  text-gray-800 dark:text-gray-200 flex flex-col justify-center  transition-all duration-300">
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <>
            <div className="py-2 flex justify-center">
              <a href="#"><img src="/assets/images/logo-dark.svg" alt="img" /></a>
            </div>
            <Form>
              <div className={`mx-auto w-full max-w-lg bg-white rounded-lg shadow-md my-5 dark:bg-neutral-900 dark:text-white`}>
                <div className="p-8">
                  <div className="flex justify-between items-end mb-4">
                    <h3 className="mb-0 text-2xl font-bold">{registerTexts.title}</h3>
                    <a href="#" onClick={handleLoginRedirect} className="text-blue-600 hover:underline text-sm text-decoration-none mt-0">
                      {registerTexts.alreadyHaveAccount}
                    </a>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                      <div className="mb-3">
                        <label htmlFor='firstName' className="block mb-1 font-medium">{registerTexts.firstName}</label>
                        <Field
                          name="firstName"
                          id="firstName"
                          placeholder="First Name"
                          className={`block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 ${formik.touched.firstName && formik.errors.firstName ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs mt-1" />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <div className="mb-3">
                        <label htmlFor='lastName' className="block mb-1 font-medium">{registerTexts.lastName}</label>
                        <Field
                          name="lastName"
                          id="lastName"
                          placeholder="Last Name"
                          className={`block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 ${formik.touched.lastName && formik.errors.lastName ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                        <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs mt-1" />
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor='organization' className="block mb-1 font-medium">{registerTexts.Orgnazation}</label>
                    <Field
                      name="organization"
                      id="organization"
                      placeholder="Organization"
                      className={`block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 ${formik.touched.organization && formik.errors.organization ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    <ErrorMessage name="organization" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor='email' className="block mb-1 font-medium">{registerTexts.email}</label>
                    <Field
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email Address"
                      className={`block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor='password' className="block mb-1 font-medium">{registerTexts.password}</label>
                    <Field
                      name="password"
                      id="password"
                      type="password"
                      placeholder="Password"
                      className={`block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="block mb-1 font-medium">Confirm Password</label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm Password"
                      className={`block w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
                  </div>

                  <div className="flex items-center mb-3">
                    <Field name="acceptTerms" type="checkbox" className="m-2" />
                    <label className="text-sm" htmlFor="acceptTerms">
                      By Signing up, you agree to our <a className="text-blue-600 hover:underline cursor-pointer">Terms of Service</a> and <a className="text-blue-600 cursor-pointer">Privacy Policy</a>
                    </label>
                  </div>
                  <ErrorMessage name="acceptTerms" component="div" className="text-red-500 text-xs mb-2" />

                  <div className="mt-3">
                    <button type="submit" className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-800 font-semibold transition">
                      {registerTexts.CreateAccount}
                    </button>
                  </div>

                  <div className="my-3 text-center">
                    <span className="text-gray-500">{registerTexts.sighUpWith}</span>
                  </div>

                  <div >
                    <button
                      type="button"
                      className="w-full  flex items-center justify-center gap-2 py-2 px-4 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 border border-gray-300 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    >
                      <img src="/assets/images/authentication/google.svg" alt="img" className="h-5 w-5" />
                      <span className="hidden sm:inline-block ">{registerTexts.google}</span>
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          </>
        )}
      </Formik>
      <div className="flex justify-center mt-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Page;
