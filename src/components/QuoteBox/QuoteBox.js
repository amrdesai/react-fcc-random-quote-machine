import React from 'react';
import { Component } from 'react';

import classes from './QuoteBox.module.scss';

// For testing
// style={{ border: '1px solid blue' }}

// API
// https://type.fit/api/quotes

class QuoteBox extends Component {
    state = {
        allQuotes: [],
        quote: '',
        author: '',
    };

    // Load quote on page load
    componentDidMount() {
        // Async get quote function
        (async () => {
            const fetchQuote = await fetch(
                'https://type.fit/api/quotes'
            ).then((res) => res.json());
            this.setState({ allQuotes: fetchQuote });
            console.log(this.state);

            this.displayQuote();
        })();
    }

    displayQuote = () => {
        const randomNum = Math.floor(Math.random() * Math.floor(1643));
        const randomQuote = this.state.allQuotes[randomNum];

        // setting quote on dispaly
        this.setState({ quote: randomQuote.text, author: randomQuote.author });
    };

    render() {
        return (
            <div id="quote-box" className={classes.QuoteBox}>
                <div className="row">
                    <h4 className="col-12 text-center text-success" id="text">
                        <span>&ldquo; </span>
                        {this.state.quote}
                        <span> &rdquo;</span>
                    </h4>
                </div>

                <div>
                    <h5 id="author" className="text-primary">
                        - {this.state.author}
                    </h5>
                </div>

                <div
                    style={{ width: '100%' }}
                    className="row justify-content-between"
                >
                    <div className="col-4">
                        <a
                            href="http://www.twitter.com/intent/tweet"
                            className="btn btn-lg btn-primary text-white"
                            id="tweet-quote"
                        >
                            <i className="fa fa-twitter"></i> Tweet
                        </a>
                    </div>
                    <div className="col-4">
                        <button
                            onClick={this.displayQuote}
                            className="btn btn-lg btn-info"
                            id="new-quote"
                        >
                            Random Quote
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuoteBox;
