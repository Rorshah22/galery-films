import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const users = require('../dummy_data/users.json');

const Authentication = () => {
  const { handleChange, handleSubmit, values, touched, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Required email'),
      password: Yup.string()
        .min(6, 'Password should be longer 6 characters')
        .required(),
    }),
    onSubmit: (values) => {
      const mail = values.email;
      const pass = values.password;

      const res = users.find((item) => item.email === mail ? );
      console.log(res);
    },
  });
  // console.log(users);
  return (
    <div className="modal_block">
      <form className="modal-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Enter you email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email ? <div>{errors.email}</div> : null}
        <label htmlFor="password">Enter you password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
        {touched.password && errors.password ? (
          <div>{errors.password}</div>
        ) : null}
        <button className="btn-sign" type="submit">
          Sign
        </button>
        <Link className="btn-registration" to="/registration">
          Registration
        </Link>
      </form>
    </div>
  );
};

export default Authentication;
