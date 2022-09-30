import './Email.css'
function Email1() {

    return (
        

        <article className="email">

        <div className="group">
        <h3>Script 1</h3>
            <label>Email</label>
            <input className="inputEmail" type="email" />
        </div>

        <div className="group">
            <label>Enter again</label>
            <input className="inputEmailAgain" type="email" />
        </div>

        <button>Ok</button>

        <div className="result hidden">
            You entered ....
        </div>

    </article>
    )
}

export default Email1