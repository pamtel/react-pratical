import {useState} from 'react'
import './style.css'

function BirthdayApp() {
    const [profiles, setProfiles] = useState([
    {id: 1, src: "img/myPics1.jpg", firstName: "Bertie", lastName: "Yates", age:"29 years"}, 
    {id: 2, src: "img/myPics2.jpg", firstName: "Hester", lastName: "Horgan", age:"32 years"}, 
    {id: 3, src: "img/myPics3.jpg", firstName: "Larry", lastName: "Little", age:"36 years"}, 
    {id: 4, src: "img/myPics4.jpg", firstName: "Sean", lastName: "Walsh", age:"34 years"}, 
    {id: 5, src: "img/myPics5.jpg", firstName: "Lola", lastName: "Gardener", age:"29 years"}])

    return (
        <div className = "container">
            <h3>{profiles.length} birthdays today</h3>
            {profiles.map((data) => {
                return <Profile key={data.id} data={data}/>
            })}
            
            <button onClick={() => setProfiles([])}>Clear All</button>
        </div>
    )
}

const Profile = (props) => {
    const {data} = props;
    return (
        <div className="content">
                    <div>
                        <img src = {data.src} alt={data.firstName}/>
                    </div>

                    <div className="textContainer">
                        <p>{data.firstName} {data.lastName}</p>
                        <p>{data.age}</p>
                    </div>
                </div>
    )
}

export default BirthdayApp
