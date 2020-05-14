import React, { Component } from "react";

import JournalList from "./journals/JournalList";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>React, Props, and State</h1>
                <JournalList heading='List 1' />
            </div>
        );
    }
}
