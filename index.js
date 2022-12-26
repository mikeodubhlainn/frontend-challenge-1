class Like extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div><p>My first paragraph</p></div>
        )}
}

const domContainer = document.getElementById("app");
const root = ReactDOM.createRoot(domContainer);
ReactDOM.render(<Like />, domContainer);