import { Formik, useFormik } from 'formik';
import React, { useDispatch } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Segment, Icon } from 'semantic-ui-react';

const LoginForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: { loginSchema },
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
              <Icon name='space shuttle' size='huge' /> Log-in to your account
            </Header>
            <Formik>
              <Form size='large'>
                <Form.Input
                  fluid
                  name='username'
                  value={formik.username}
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
                  name='password'
                  value={formik.password}
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  onChange={formik.handleChange}
                  required
                />
                <Button
                  animated
                  color='teal'
                  fluid
                  size='large'
                  onClick={formik.handleClick}>
                  <Button.Content visible>Login</Button.Content>
                  <Button.Content hidden>
                    <Icon name='space shuttle' />
                  </Button.Content>
                </Button>
                <Button
                  type='submit'
                  animated
                  color='red'
                  fluid
                  size='large'
                  onClick={formik.handleSubmit}>
                  <Button.Content visible>Login with Google</Button.Content>
                  <Button.Content hidden>
                    <Icon name='google' />
                  </Button.Content>
                </Button>
                <br />
                <Link to='/signup' style={{ color: 'teal' }}>
                  First time? Signup here
                </Link>
              </Form>
            </Formik>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default LoginForm;
