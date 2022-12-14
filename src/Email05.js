import { useState } from 'react'
import './Email.css'
function Email5() {

    const [input, setInput] = useState("")
    const [inputAgain, setInputAgain] = useState("")

    const inputChange = (event) => {
        setInput(event.target.value)
    }

    const inputAgainChange = (event) => {
        setInputAgain(event.target.value)
    }



    const sendForm = () => {
        if (input === ""){
            console.log("empty email")
            return
        }

        if (!isValidEmailAddress(input)) {
            console.log("Invalid email adress")
            return
        }

        if (input !== inputAgain){
            console.log("Not the same")
            return
        }

        console.log("Success!!")
    }

    return (

        <article className="email">

            <div className="group">
                <h3>Script 5</h3>
                <label>Email</label>
                <input className="inputEmail" type="email" value={input} onChange={inputChange} />
            </div>

            <p><b>Here:</b>{input}</p>

            <div className="group">
                <label>Enter again</label>
                <input className="inputEmail" type="email" value={inputAgain} onChange={inputAgainChange} />
            </div>

            <button onClick={sendForm}>Ok Banana</button>

           


            <div className="result hidden">
                You entered ....
            </div>

        </article>
    )
}
function isValidEmailAddress(email){
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null
}

export default Email5