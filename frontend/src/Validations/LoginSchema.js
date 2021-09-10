import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  username: Yup.string().required('Please enter a valid username.'),
  password: Yup.string()
    .min(4, 'Password must be longer than 4 characters.')
    .required('Please enter a valid password.'),
});

export default loginSchema;
