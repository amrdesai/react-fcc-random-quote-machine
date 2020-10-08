import React from 'react';
import { Component } from 'react';

import classes from './QuoteBox.module.scss';

// For testing
// style={{ border: '1px solid blue' }}

// API
// https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?

class QuoteBox extends Component {
    state = {
        quote: '',
        author: '',
    };

    // Load quote on page load
    componentDidMount() {
        this.getQuote();
    }

    // Async get quote function
    getQuote = async () => {
        const fetchQuote = await fetch(
            'http://quotes.stormconsultancy.co.uk/random.json'
        ).then((res) => res.json());
        this.setState({ quote: fetchQuote.quote, author: fetchQuote.author });
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
                            onClick={this.getQuote}
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
