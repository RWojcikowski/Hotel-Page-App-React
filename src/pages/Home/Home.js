import { useContext, useEffect, useState, } from 'react';
import Hotels from '../../components/Hotels/Hotels';
import BestHotel from '../../components/Hotels/BestHotel/BestHotel';
import LastHotel from '../../components/Hotels/LastHotel/LastHotel';
import useStateStorage from '../../hooks/useStateStorage';
import useWebsiteTitle from '../../hooks/useWebsiteTitle';
import ReducerContext from '../../context/reducerContext';
import LoadingIcon from '../../components/UI/LoadingIcon/LoadingIcon';

const backendHotels = [
    {
        id: 1,
        name: 'Pod Dębem',
        city: 'Warszawa',
        rating: 8.3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
        image: ''
    },
    {
        id: 2,
        name: 'Nad Potokiem',
        city: 'Wrosław',
        rating: 8.8,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat id lorem vitae accumsan.',
        image: ''
    }
];


export default function Home(props) {
    useWebsiteTitle('Strona główna');
    const [lastHotel, setLastHotel] = useStateStorage('last-hotel', null);


    const [loading, setLoading] = useState(true);
    const [hotels, setHotels] = useState([]);

    const getBestHotel = () => {
        if (hotels.length < 2) {
            return null;
        } else {
            return hotels.sort((a, b) => a.rating > b.rating ? -1 : 1)[0];
        }
    }

    const openHotel = (hotel) => setLastHotel(hotel);
    const removeLastHotel = () => setLastHotel(null);

    useEffect(() => {
        setTimeout(() => {

            setHotels(backendHotels)
            setLoading(false)
        }, 1000);
    }, []);


    //....
    return loading ? <LoadingIcon /> : (


        <>
            {lastHotel ? <LastHotel {...lastHotel} onRemove={removeLastHotel} /> : null}
            {
                getBestHotel()
                    ? <BestHotel getHotel={getBestHotel} />
                    : null
            }
            <Hotels onOpen={openHotel} hotels={hotels} />
        </>
    )



}