export default function ProfilDetails(props) {
    return (
        <form>
            <div className="form-group">
                <label>Email</label>
                <input type="email" value={'your@email.com'} className="form-control"></input>

            </div>
            <div className="mt-3 form-group">
                <label >Hasło</label>
                <input type="password" placeholder="**************" className="form-control"></input>

            </div>
            <div className="mt-3 form-group">
                <button className="btn btn-info">Zapisz</button>
            </div>
        </form >

    )




}