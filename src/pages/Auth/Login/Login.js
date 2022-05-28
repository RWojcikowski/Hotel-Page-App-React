export default function Login(props) {
    return (
        <form>
            <h3>Logowanie</h3>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control"></input>

            </div>
            <div className="mt-3 form-group">
                <label >Hasło</label>
                <input type="password" className="form-control"></input>

            </div>
            <div className="mt-3 form-group">
                <button className="btn btn-info">Zapisz</button>
            </div>
        </form>

    )
}