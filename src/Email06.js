import { useState } from 'react'
import './Email.css'
function Email6() {

    const [input, setInput] = useState("")
    const [inputAgain, setInputAgain] = useState("")

    const [message, setMessage] = useState("")
    const [messageState, setMessageState] = useState("hidden")

    const inputChange = (event) => {
        setInput(event.target.value)
    }

    const inputAgainChange = (event) => {
        setInputAgain(event.target.value)
    }



    const sendForm = () => {
        if (input === "") {
            setMessage("Empty email")
            setMessageState("error")
            return
        }

        if (!isValidEmailAddress(input)) {
            setMessage("Invalid email adress")
            setMessageState("error")
            return
        }

        if (input !== inputAgain) {
            setMessage("Not the same")
            setMessageState("error")
            return
        }

        setMessageState("Success!!")
        setMessage("The email adresses are the same")
    }

    const displayMessage = () => {
        const classNames = messageState === "error" ? "result sad" : "result happy"

        return (
            <div className={classNames}>
                {message}
            </div>
        )
    }

    return (

        <article className="email">

            <div className="group">
                <h3>Script 6</h3>
                <label>Email</label>
                <input className="inputEmail" type="email" value={input} onChange={inputChange} />
            </div>

            <p><b>Here:</b>{input}</p>

            <div className="group">
                <label>Enter again</label>
                <input className="inputEmail" type="email" value={inputAgain} onChange={inputAgainChange} />
            </div>

            <button onClick={sendForm}>Ok </button>

            {displayMessage()}



        </article>
    )
}
function isValidEmailAddress(email) {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ) != null
}

export default Email6