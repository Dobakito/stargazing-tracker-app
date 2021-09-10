import React, { useDispatch } from 'react';
import { Button, Form, Grid, Header, Segment, Icon } from 'semantic-ui-react';
import userSchema from '../Validations/UserValidation';
import { Formik, useFormik } from 'formik';
import { createUser } from '../Actions/messiers';

const SignupForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: { userSchema },
    onSubmit: user => {
      dispatch(createUser(user));
    },
  });

  return (
    <>
      <Grid
        textAlign='center'
        style={{ height: '75vh' }}
        verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Segment stacked inverted>
            <Header as='h2' color='teal' textAlign='center'>
              <Icon name='space shuttle' size='huge' /> Enter your Information!
            </Header>
            <Formik>
              <Form size='large'>
                <Form.Input
                  fluid
                  name='username'
                  value={formik.values.username}
                  icon='user'
                  iconPosition='left'
                  placeholder='Username'
                  onChange={formik.handleChange}
                  required
                  error={
                    formik.errors.username && formik.touched.username
                      ? {
                          content: `${formik.errors.username}`,
                          pointing: 'below',
                        }
                      : null
                  }
                />
                <Form.Input
                  fluid
                  name='email'
                  value={formik.values.email}
                  icon='mail'
                  iconPosition='left'
                  placeholder='Email'
                  type='email'
                  onChange={formik.handleChange}
                  required
                  error={
                    formik.errors.username && formik.touched.username
                      ? {
                          content: `${formik.errors.username}`,
                          pointing: 'below',
                        }
                      : null
                  }
                />
                <Form.Input
                  fluid
                  name='password'
                  value={formik.values.password}
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={formik.handleChange}
                  required
                  error={
                    formik.errors.password && formik.touched.username
                      ? {
                          content: `${formik.errors.username}`,
                          pointing: 'below',
                        }
                      : null
                  }
                />
                <Button
                  type='submit'
                  animated
                  color='teal'
                  fluid
                  size='large'
                  onClick={formik.handleSubmit}>
                  <Button.Content visible>Create Account</Button.Content>
                  <Button.Content hidden>
                    <Icon name='space shuttle' />
                  </Button.Content>
                </Button>
              </Form>
            </Formik>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default SignupForm;
