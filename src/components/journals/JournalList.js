import React, { Component } from "react";

import { JournalEntry } from "./JournalEntry";

const rawJournalData = [
    { title: "Post One", content: "Post Content 1", status: "draft" },
    {
        title: "Post Two",
        content: "Post Content 2",
        status: "published",
    },
    {
        title: "Post Three",
        content: "Post Content 3",
        status: "published",
    },
    {
        title: "Post Four",
        content: "Post Content 4",
        status: "published",
    },
];

// Class Components save state
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journalData: rawJournalData,
            isOpen: true,
        };
    }

    showAllEntries = () => {
        this.setState({ journalData: rawJournalData, isOpen: true });
    };

    clearEntries = () => {
        this.setState({ journalData: [], isOpen: false });
    };

    toggleStatus = () => {
        this.state.isOpen
            ? this.setState({ journalData: [], isOpen: false })
            : this.setState({
                  journalData: rawJournalData,
                  isOpen: true,
              });
    };

    render() {
        const journalEntries = this.state.journalData.map((entry) => {
            return (
                <div key={entry.title}>
                    <JournalEntry
                        title={entry.title}
                        content={entry.content}
                    />
                </div>
            );
        });
        return (
            <div>
                <h2>{this.props.heading}:</h2>
                {journalEntries}

                <button onClick={this.clearEntries}>
                    Clear Entries
                </button>
                <button onClick={this.showAllEntries}>
                    Show Entries
                </button>
                <button onClick={this.toggleStatus}>
                    Toggle Entries
                </button>
            </div>
        );
    }
}
