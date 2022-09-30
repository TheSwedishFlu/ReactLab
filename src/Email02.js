import './Email.css'
function Email2() {

   /*  function buttonclicked(event){
        console.log("test")
        console.log("test")
        console.log("event.target", event.target)

    } */

    const buttonclicked = (event) => {
        console.log("event.target", event.target)
    }

    return (

        <article className="email">

        <div className="group">
        <h3>Script 2</h3>
            <label>Email</label>
            <input className="inputEmail" type="email" />
        </div>

        <div className="group">
            <label>Enter again</label>
            <input className="inputEmailAgain" type="email" />
        </div>

        <button onClick={()=> {console.log('hej')}}>Ok1</button>
        <button onClick={(event)=> {console.log(event)}}>Ok2</button>
        <button onClick={buttonclicked}>Ok3</button>

        <div className="result hidden">
            You entered ....
        </div>
        

    </article>
    )
}

export default Email2