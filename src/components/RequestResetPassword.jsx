import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../axiosHandler';

export default function RequestResetPassword() {
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email format').required('Required')
        }),
        onSubmit: async (values, { setSubmitting }) => {
            try {
                await api.post('/request-password-reset/', values);
                alert('A code has been sent to your email');
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
            {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
            <button type="submit">Send Code</button>
        </form>
    );
}
