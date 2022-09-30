import { useState } from 'react'
import './Email.css'
function Email3() {

   const [input, setInput] = useState("")


    const inputChange = (event) => {
        setInput(event.target.value)
    }

    return (

        <article className="email">

        <div className="group">
        <h3>Script 3</h3>
            <label>Email</label>
            <input className="inputEmail" type="email" value={input} onChange= {inputChange}/>
        </div>

        <p><b>Here:</b>{input}</p>

        <div className="group">
            <label>Enter again</label>
            <input className="inputEmailAgain" type="email" />
        </div>

        <button onClick={()=> {console.log('hej')}}>Ok1</button>
        

        <div className="result hidden">
            You entered ....
        </div>

    </article>
    )
}

export default Email3