import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from 'react-router-dom'
import LoadingButton from "../../../components/UI/LoadingButton/LoadingButton";



export default function Login(props) {
    const [auth, setAuth] = useAuth();
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            //Logowanie
            setAuth(true);
            history.push('/');
        }, 500);

    }



    return (

        <div>
            <h3>Logowanie</h3>
            <form onClick={submit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="form-control" />

                </div>
                <div className="mt-3 form-group">
                    <label >Hasło</label>
                    <input type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="form-control" />

                </div>
                <div className="mt-3 form-group">
                    <LoadingButton Loading={loading}>Zaloguj</LoadingButton>
                </div>
            </form>
        </div>
    )
}