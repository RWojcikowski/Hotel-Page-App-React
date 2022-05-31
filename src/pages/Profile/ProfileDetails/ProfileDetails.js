import { useEffect, useState } from "react";
import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton";
import { validateEmail } from "../../../helpers/validations";


export default function ProfilDetails(props) {

  const [email, setEmail] = useState('radoslaw.wojcikowski092@gmail.com');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const buttonDisabled = Object.values(errors).filter(x => !x).length;


  const submit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      //Zapisywanie

      setLoading(false)
    }, 500);
  }


  useEffect(() => {
    if (validateEmail(email)) {
      setErrors({ ...errors, email: '' });

    } else {
      setErrors({ ...errors, email: 'Niepoprawny email' });
    }
  }, [email]);

  useEffect(() => {
    if (password.length >= 4 || !password) {
      setErrors({ ...errors, password: '' });

    } else {
      setErrors({ ...errors, password: 'Niepoprawne hasło' });
    }
  }, [password]);


  return (
    <form onClick={submit}>
      <div className="form-group">
        <label>Email</label>
        <input type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className={`form-control ${errors.email ? 'is-invalid' : 'is-valid'}`} />
        <div className="invalid-feedback">
          {errors.email}
        </div>
        <div className="valid-feedback"> Wszystko Ok!</div>

      </div>
      <div className="mt-3 form-group">
        <label >Hasło</label>
        <input type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
        <div className="invalid-feedback"> {errors.password} </div>
      </div>
      <div className="mt-3 form-group">
        <LoadingButton Loading={loading} disabled={buttonDisabled} >Zapisz</LoadingButton>
      </div>
    </form>

  )

}