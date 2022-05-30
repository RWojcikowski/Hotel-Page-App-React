import { useState } from "react";
import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton";
import { validate } from "../../../../helpers/validations";
import Input from "../../../../components/Input/Input";
import axiosFresh from "axios";
import useAuth from "../../../../hooks/useAuth"
import { useHistory } from "react-router-dom";


export default function Register(props) {
  const history = useHistory();
  const [auth, setAuth] = useAuth();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: {
      value: '',
      error: '',
      showError: false,
      rules: ['required', 'email']
    },
    password: {
      value: '',
      error: '',
      showError: false,
      rules: ['required']
    },
  });
  const valid = !Object.values(form)
    .map(input => input.error)
    .filter(error => error)
    .length;

  const submit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosFresh.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAWotdJSYsGbVUisJakVVmO_dK4NnrX9Uk', {
        email: form.email.value,
        password: form.password.value,
        returnSecureToken: true
      });
      //
      setAuth(true, res.data);
      history.push('/')
    } catch (ex) {
      console.log(ex.response);
    }



    const res = await axiosFresh.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAWotdJSYsGbVUisJakVVmO_dK4NnrX9Uk', {
      email: form.email.value,
      password: form.password.value,
      returnSecureToken: true
    });
    console.log(res.data);
    //
    setLoading(false);

  }

  const changeHandler = (value, fieldName) => {
    const error = validate(form[fieldName].rules, value);

    setForm({
      ...form,
      [fieldName]: {
        ...form[fieldName],
        value,
        showError: true,
        error: error
      }
    });
  }

  if (auth) {
    history.push('/')
  }

  return (
    <div className="card">
      <div className="card-header"><h2>Rejestracja </h2></div>
      <div className="card-body">

        <p className="text-muted">Uzupełnij dane</p>

        <form onSubmit={submit}>

          <Input
            label="Email"
            type="email"
            value={form.email.value}
            onChange={val => changeHandler(val, 'email')}
            error={form.email.error}
            showError={form.email.showError} />

          <Input
            label="Hasło"
            type="password"
            value={form.password.value}
            onChange={val => changeHandler(val, 'password')}
            error={form.password.error}
            showError={form.password.showError} />

          <div className="text-right">
            <LoadingButton
              loading={loading}
              disabled={!valid}
              className="btn-info">
              Gotowe!
            </LoadingButton>
          </div>

        </form>
      </div>
    </div>
  );
}