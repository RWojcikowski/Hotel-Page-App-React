import { useState } from "react";
import moment from "moment";

const BestHotel = (props) => {
    const endTime = moment().add(23, 'minutes').add(35, 'seconds')
    const [time, setTime] = useState('')
    const hotel = props.getHotel({ minHotels: 1 });

    setInterval(() => {
        const leftTime = -moment().diff(endTime) / 1000;
        const minutes = Math.floor(leftTime / 60);
        const seconds = Math.floor(leftTime % 60);
        setTime(`minut; ${minutes}, sekund: ${seconds}`);
        console.log(leftTime);
    }, 1000)

    if (!hotel) return null;

    return (
        <div className="card bg-info text-white">
            <div className=" card-subtitle">Najlepsza oferta ! ! !
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h6 className="card-title">{hotel.name}</h6>
                        <p> Ocena : {hotel.rating}</p>
                    </div>
                    <p> do konca oferty zostało : {time}</p>
                    <a href="#" className="btn-sm btn-light">
                        Pokaz
                    </a>
                </div>
            </div>
        </div>
    )
}
export default BestHotel;