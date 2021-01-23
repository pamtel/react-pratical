import {useState}from 'react'

function ArrayState() {
    const [names, setNames] = useState(["John", "Jane", "Jude", "Joshua"]);
    return (
        <div>
            <p>{names[0]}</p>
            <p>{names[1]}</p>
            <p>{names[2]}</p>
            <p>{names[3]}</p>
            <p>{names[4]}</p>
            {/* use this function when its dynamic */}
            <button onClick={() => setNames((prevNames) => [...prevNames, "Shade"])}>Delete names</button>

            {/* use this function when its static
            <button onClick={() => setNames([...names,"Shade"])}>Delete names</button> */}

            {/* empty an array
            <button onClick={() => setNames([])}>Delete names</button> */}

        </div>
    )
}

export default ArrayState
