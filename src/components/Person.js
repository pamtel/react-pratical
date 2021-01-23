import {useState} from 'react';
const Person = (props) => {
    const [btnText, setBtnText] = useState("Hide");
 const {name} = props;
 let h3Style = {
 }
 const changeBtnText = () => {
     setBtnText("Show");
 }
 if (btnText === 'Show') {
     h3Style.display = 'none';
 } else {
     h3Style.display = 'block';
 }
    return (
        <div>
            <h3 style={h3Style}>{name}</h3>
            <button onClick={changeBtnText}>{btnText}</button>
        </div>
    )
}

export default Person;