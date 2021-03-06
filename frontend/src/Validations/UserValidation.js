import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  username: Yup.string().required('Please enter a valid username.'),
  email: Yup.string()
    .email('Please enter a valid email.')
    .required('Please enter a valid email.'),
  password: Yup.string()
    .min(4, 'Password must be longer than 4 characters.')
    .required('Please enter a valid password.'),
});

export default userSchema;
