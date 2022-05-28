import { Route, Switch, NavLink, useRouteMatch } from 'react-router-dom';
import ProfilDetails from "./ProfilDetails/ProfilDetails";
import MyHotel from "./MyHotels/MyHotels";


export default function Profile(props) {
    const { path, url } = useRouteMatch();

    console.log(path, url);


    return (
        <div className="card">
            <div className="cadr=header">
                <h2>Mój profil</h2>
            </div>
            <div className="card-body">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link text-color-info" exact to={`${url}`}> Profil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={`${url}/hotele`}>Hotele</NavLink>
                    </li>
                </ul>


                <div className="pt-4">

                    <Switch>
                        <Route path={`${path}/hotele`} component={MyHotel} />
                        <Route path={`${path}`} component={ProfilDetails} />

                    </Switch>
                </div>


                <p>...</p>
            </div>
        </div>
    )

}