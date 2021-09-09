import * as Yup from 'yup';

const userSchema = Yup.object().shape({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(4).required(),
});

export default userSchema;
