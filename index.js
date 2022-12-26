'use strict';

class InfoBox extends React.Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <div className="infobox">
        <div class="row">
            <button class="btn btn-primary">Add task</button>
        </div>
        </div>
  )}
}

const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<InfoBox />);