import React, { Fragment } from 'react';

import Button, { ButtonGroup } from '@atlaskit/button';
import { Checkbox } from '@atlaskit/checkbox';
import TextField from '@atlaskit/textfield';

import Form, {
  CheckboxField,
  ErrorMessage,
  Field,
  FormFooter,
  HelperMessage,
  ValidMessage,
} from '@atlaskit/form';
import { history } from '../../store';

const Login = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        verticalAlign: 'center',
      }}
    >
      <Form<{ username: string; password: string; remember: boolean }>
        onSubmit={(data) => {
          console.log('form data', data);
          history.push('/home');
        }}
      >
        {({ formProps, submitting }) => (
          <form {...formProps}>
            <Field
              name="username"
              label="User name"
              isRequired
              defaultValue="hello"
            >
              {({ fieldProps, error }) => (
                <Fragment>
                  <TextField autoComplete="off" {...fieldProps} />
                  {!error && (
                    <HelperMessage>
                      You can use letters, numbers & periods.
                    </HelperMessage>
                  )}
                  {error && (
                    <ErrorMessage>
                      This user name is already in use, try another one.
                    </ErrorMessage>
                  )}
                </Fragment>
              )}
            </Field>
            <Field
              name="password"
              label="Password"
              defaultValue=""
              isRequired
              validate={(value) =>
                value && value.length < 8 ? 'TOO_SHORT' : undefined
              }
            >
              {({ fieldProps, error, valid, meta }) => {
                return (
                  <Fragment>
                    <TextField type="password" {...fieldProps} />
                    {error && !valid && (
                      <HelperMessage>
                        Use 8 or more characters with a mix of letters, numbers
                        & symbols.
                      </HelperMessage>
                    )}
                    {error && (
                      <ErrorMessage>
                        Password needs to be more than 8 characters.
                      </ErrorMessage>
                    )}
                    {valid && meta.dirty ? (
                      <ValidMessage>Awesome password!</ValidMessage>
                    ) : null}
                  </Fragment>
                );
              }}
            </Field>
            <CheckboxField name="remember" label="Remember me" defaultIsChecked>
              {({ fieldProps }) => (
                <Checkbox
                  {...fieldProps}
                  label="Always sign in on this device"
                />
              )}
            </CheckboxField>
            <FormFooter>
              <ButtonGroup>
                <Button appearance="subtle">Cancel</Button>
                <Button
                  type="submit"
                  appearance="primary"
                  isLoading={submitting}
                >
                  Sign up
                </Button>
              </ButtonGroup>
            </FormFooter>
          </form>
        )}
      </Form>
    </div>
  );
};

export default Login;
