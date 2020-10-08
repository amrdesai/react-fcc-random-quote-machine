import React from 'react';

import classes from './App.module.scss';
import QuoteBox from './components/QuoteBox/QuoteBox';

const App = () => {
    return (
        <div className={classes.App}>
            <QuoteBox />
        </div>
    );
};

export default App;
