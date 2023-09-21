import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../axiosHandler';

export default function VerifyResetPassword() {
    const formik = useFormik({
        initialValues: {
            email: '',
            token: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email format').required('Required'),
            token: Yup.string().required('Required'),
            password: Yup.string().required('Required'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await api.post('/verify-password-reset/', {
                    email: values.email,
                    token: values.token,
                    password: values.password
                });
                alert('Password has been reset');
            } catch (error) {
                console.error(error);
            }
            setSubmitting(false);
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                name="email"
                type="email"
                placeholder="Email"
                {...formik.getFieldProps('email')}
            />
            <input
                name="token"
                type="text"
                placeholder="Verification Code"
                {...formik.getFieldProps('token')}
            />
            <input
                name="password"
                type="password"
                placeholder="New Password"
                {...formik.getFieldProps('password')}
            />
            <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                {...formik.getFieldProps('confirmPassword')}
            />
            <button type="submit">Reset Password</button>
        </form>
    );
}
