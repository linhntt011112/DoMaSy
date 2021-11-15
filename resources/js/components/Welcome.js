import ReactDOM from "react-dom";
import React from "react";

function Welcome() {
    return (
            <h1>DoMaSystem</h1>
    );
}

export default Welcome;

if (document.getElementById('welcome')) {
    ReactDOM.render(<Welcome />, document.getElementById('welcome'));
}
