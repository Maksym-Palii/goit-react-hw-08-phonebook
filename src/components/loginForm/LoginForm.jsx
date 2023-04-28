import { useState } from 'react';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const handleChangeEmail = evt => {
    setEmail(evt.target.value);
  };

  const handleChangePassword = evt => {
    setPassword(evt.target.value);
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Sign in</h2>
      <form
        className={css.form}
        // onSubmit={handleSubmit}
      >
        <label className={css.text}>
          Еmail address
          <input
            className={css.input}
            value={email}
            onChange={handleChangeEmail}
            type="email"
            name="email"
            required
          />
        </label>

        <label className={css.text}>
          Password
          <input
            className={css.input}
            value={password}
            onChange={handleChangePassword}
            type="password"
            name="password"
            required
          />
        </label>

        <button className={css.btn} type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
