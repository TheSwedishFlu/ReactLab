import { useState } from 'react'
import './Email.css'
function Email4() {

    const [input, setInput] = useState("")
    const [inputAgain, setInputAgain] = useState("")

    const inputChange = (event) => {
        setInput(event.target.value)
    }

    const inputAgainChange = (event) => {
        setInputAgain(event.target.value)
    }

    //const doStuff = () => {
    //    return "Hello"
    //}

    const compareText = () => {
        if (input === inputAgain) {
            return "same"
        } else {
            return "Not the same"
        }
    }

    return (

        <article className="email">

            <div className="group">
            <h3>Script 4</h3>
                <label>Email</label>
                <input className="inputEmail" type="email" value={input} onChange={inputChange} />
            </div>

            <p><b>Here:</b>{input}</p>

            <div className="group">
                <label>Enter again</label>
                <input className="inputEmail" type="email" value={inputAgain} onChange={inputAgainChange} />
            </div>

            <button onClick={() => { console.log('hej') }}>Ok1</button>

            {/* <p>{doStuff()}</p> */}

            <p>{compareText()}</p>

            <p>{input === inputAgain ? "Same" : "Not the same" }</p>


            <div className="result hidden">
                You entered ....
            </div>

        </article>
    )
}

export default Email4