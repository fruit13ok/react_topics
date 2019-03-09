import React from 'react';
import ReactDOM from 'react-dom';

// new Date().getMonth() start from 0 is January
// northern hemisphere, lat > 0
//      winter=j,f,m,o,n,d
//      summer=a,m,j,j,a,s
// southern hemisphere, lat < 0
//      summer=j,f,m,o,n,d
//      winter=a,m,j,j,a,s
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

// App.js will pass location and month props to SeasonDisplay.js,
// SeasonDisplay.js will show text base on props
const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    // https://semantic-ui.com/elements/icon.html#/icon
    const icon = season === 'winter' ? 'snowflake' : 'sun';
    // <i className={`${icon} icon`} /> means evaluate ${icon} to get its vale 'winter'
    // it became <i className="winter icon" />
    return (
        <div>
            <i className={`${icon} icon`} />
            <h1>{text}</h1>
            <i className={`${icon} icon`} />
        </div>
    );
};

export default SeasonDisplay;