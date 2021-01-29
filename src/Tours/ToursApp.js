import {useState, useEffect} from 'react'
import axios from 'axios'
import './style.css'

function ToursApp() {
    const toursData = "https://course-api.com/react-tours-project";
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    useEffect(() => {
        setLoading(true);
        // fetch(toursData)
        // .then(res => res.json())
        // .then (recieveDatas => {
        //     setTours(recieveDatas)
        //     setLoading(false);
        // })
        // use axios instead of fetch
        axios.get(toursData)
        .then(res => {
            setTours(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setError(true)
            setLoading(false)
        })
    }, [])
    if(loading) {
        return <h2>Loading...</h2>
    } 
    if(error) {
        return <h4>Ooops!! Something went wrong</h4>
    }

    const deleteToursHandler = (id) => {
        console.log(id);
        const tourDelete = tours.filter(tour => {
            return tour.id !== id
        })
        setTours(tourDelete);
    }
    
    return (
        <div style={{maxWidth: 900, margin: "0 auto"}}>
            <h1>OUR TOURS</h1>
            <div className="underlineWrap">
                <div className="wrap"></div>
            </div>
            {tours.map((data) => {
                 return <TourCard key={data.id} data={data} deleteToursHandler={deleteToursHandler}/>
            })}
        </div>
    )
}

const TourCard = ({data, deleteToursHandler}) => {
    const deleteTourCard = () => {
        deleteToursHandler(data.id)
    }
    const [click, setClick] = useState(false)
    const switchContent = () => {
        setClick(!click)
    }
    return (
        <div className="container">
            <div className="card">
                <img src={data.image} alt="tour"/>
                <div className="cardBody">
                    <div className="flex">
                        <h3 className="Title">{data.name}</h3>
                        <p className="price">$ {data.price}</p>
                    </div>
                    <p className="text">{!click ? data.info.slice(0, 150) : data.info} &#8230;
                    <button onClick={switchContent}>{!click ? "Read More": "Show Less"}</button></p>
                    <div className="divButton">
                    <button onClick={deleteTourCard}>Not Interested</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ToursApp
