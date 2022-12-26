'use strict';

function InfoBox() {

  return (
    <>
    <h1>App is working</h1>
    </>
  )
}

const rootNode = document.getElementById('info-box-root');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(InfoBox));