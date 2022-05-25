const BestHotel = (props) => {
    const hotel = props.getHotel({ minHotels: 1 });

    if (!hotel) return null;

    return (
        <div className="card bg-info text-white">
            <div className=" card-subtitle">Najlepsza oferta ! ! !
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <h6 className="card-title">{hotel.name}</h6>
                        <p> Ocena : {hotel.rating}</p>
                    </div>
                    <a href="#" className="btn-sm btn-light">
                        Pokaz
                    </a>
                </div>
            </div>
        </div>
    )
}
export default BestHotel;