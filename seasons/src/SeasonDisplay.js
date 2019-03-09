import React from 'react';
import './SeasonDisplay.css';

// use object is beeter than ternary operator
const seasonConfig = {
    summer: {
      text: "Let's hit the beach!",
      iconName: 'sun'
    },
    winter: {
      text: 'Burr it is cold!',
      iconName: 'snowflake'
    }
};

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
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;