import {useState} from 'react'
import './styles.css'
import {data} from './data';

function Sample() {
    console.log(data);
    
    return (
        <div className="container">
             <h3>Questions And Answers About Login</h3>
             {data.map(accordion => {
                 return (
                   <Accordion  key={accordion.id} accordion={accordion} />
                 )
             })}
        </div>
    )
}

const Accordion = ({accordion}) => {
    const [answerIsShown, setAnswerIsShown] = useState(false);
    const toggleAnswer = () => {
        setAnswerIsShown(!answerIsShown);
    }
    return (
        <div className="card">
        <div className="flex">
            <h4>{accordion.question}</h4>
            <button onClick={toggleAnswer}>{answerIsShown ? "-": "+"}</button>
        </div>
       {/* {answerIsShown ? <p>{accordion.answer}</p> : null} */}
       {answerIsShown && <p>{accordion.answer}</p>}
    </div>
    )
}

export default Sample
