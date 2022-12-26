'use strict';

class InfoBox extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick() {
        alert("Button clicked!");
    }

  render() {
    return (
        <div className="infobox">
        <h1>Personal info</h1>
        <h2>Please provide your name, email address, and phone number.</h2>
        <form>
            <h3>Name</h3>
            <input type="text"></input>
            <h3>Email Address</h3>
            <input type="text"></input>
            <h3>Phone Number</h3>
            <input type="text"></input>
            <br/>
            <button type="submit" onClick={handleClick()}>Next Step</button>
        </form>
        </div>
  )}
}

const rootNode = document.getElementById('info-box-root');
const root = ReactDOM.createRoot(rootNode);
ReactDOM.render(<InfoBox />, rootNode);