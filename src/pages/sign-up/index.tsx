import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div className="u-columns col2-set" id="customer_login">
      <div className="u-column2 col-2">
        <h2>Register</h2>
        <form method="post" className="akasha-form akasha-form-register register">
          <p className="akasha-form-row akasha-form-row--wide form-row form-row-wide">
            <label htmlFor="reg_email">
              Email adchair&nbsp;<span className="required">*</span>
            </label>
            <input
              type="email"
              className="akasha-Input akasha-Input--text input-text"
              name="email"
              id="reg_email"
              autoComplete="email"
              value=""
            />
          </p>
          <div className="akasha-privacy-policy-text">
            <p>
              Your personal data will be used to support your experience throughout this website, to manage access to
              your account, and for other purposes described in our{' '}
              <a href="#" className="akasha-privacy-policy-link" target="_blank">
                privacy policy
              </a>
              .
            </p>
          </div>
          <p className="akasha-FormRow form-row">
            <input type="hidden" id="akasha-register-nonce" name="akasha-register-nonce" value="45fae70a87" />
            <input type="hidden" name="_wp_http_referer" value="/akasha/my-account/" />
            <button type="submit" className="akasha-Button button" name="register" value="Register">
              Register
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
