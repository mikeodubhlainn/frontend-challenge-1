'use strict';

function InfoBox() {

  return (
    <div>
    <h1>App is working</h1>
    </div>
  )
}

const rootNode = document.getElementById('info-box-root');
const root = ReactDOM.createRoot(rootNode);
ReactDOM.render(<InfoBox />, rootNode);