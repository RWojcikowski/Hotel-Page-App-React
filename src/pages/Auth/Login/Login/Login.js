import { useId, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { useHistory } from 'react-router-dom';
import LoadingButton from "../../../../components/UI/LoadingButton/LoadingButton";
import axiosFresh from "axios";


export default function Login(props) {
  const [auth, setAuth] = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [valid, setValid] = useState(null);
  const [error, setError] = useState('');

  const submit = async e => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axiosFresh.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAWotdJSYsGbVUisJakVVmO_dK4NnrX9Uk', {
        email,
        password,
        returnSecureToken: true
      });
      setAuth(true, {
        email: res.data.email,
        token: res.data.idToken,
        useId: res.data.localId,
      })
      history.push('/');

    } catch (ex) {
      setError(ex.response.data.error.message);
      console.log(ex.response);
      setLoading(false);
    }

  }

  return (
    <div>
      <h2>Logowanie</h2>

      {valid === false ? (
        <div className="alert alert-danger">Niepoprawne dane logowania</div>
      ) : null}

      <form onSubmit={submit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="form-control" />
        </div>
        <div className="form-group">
          <label>Hasło</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="form-control" />
        </div>

        {error ? (
          <div className="alert alert-danger">{error}</div>
        ) : null};

        <LoadingButton loading={loading}>Zaloguj</LoadingButton>
      </form>
    </div>
  );
}