class Like extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div><h1>My first paragraph</h1></div>
        )}
}

const domContainer = document.getElementById("app");
const root = ReactDOM.createRoot(domContainer);
ReactDOM.render(<Like />, domContainer);
