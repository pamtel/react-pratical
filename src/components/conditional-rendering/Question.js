import {useState} from 'react'
import './styles.css'

function Question() {
    const data =[
        {id: 1, question: "Do i have to allow the use of cookes?", answer: "No, you don't. If a cookie can identify you, you can decline the cookie completely. Websites that use these cookies have to get your permission – or risk huge fines under various laws."},
        {id: 2, question: "How do i change my page password?", answer: "No, you cannot change the password for that particular page. Only thing that you can do is, change the password associated with that page. At one point facebook had “master admins” which could not be deleted as they were the creator of a page."},
        {id: 3, question: "What is BankID?", answer: "The BIN (short for bank identification number) consists of the first six digits of a credit card number. It indicates the bank that has issued the card. It is also commonly referred to as the “issuer identification number” (IIN), since banks aren't the only institutions that issue credit cards."},
        {id: 4, question: "Whose birth number can i use?", answer: "The numbers used in Numerology to indicate one's Life Path Number run from ... to have a great wife or husband, with whose help they can make lots of money."},
        {id: 5, question: "When do i recieve a password ordered by letter?", answer: "The correct answers are: Passwords with 1 letter and 3 digits: 26 (letters of the ... have any of the same numbers and you can enter the code in whatever order."}
    ]
    return (
        <div className = "container">
            <h3>Questions And Answers About Login</h3>
            {data.map((content) => {
                return <Card key={content.id} content={content}/>
            })}
        </div>
    )
}

const Card = ({content}) => {
    const [click, setClick] = useState(true)
    const switchContent = () => {
        setClick(!click)
    }
    return (
        <div className="card">
            <div className="flex">
                <h4>{content.question}</h4>
                <button onClick={switchContent}>{click ? "-" : "+"}</button>
            </div>
            {click ? <p>{content.answer}</p> : null}
        </div>
    )
}

export default Question
