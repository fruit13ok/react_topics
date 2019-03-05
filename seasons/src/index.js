import React from 'react';
import ReactDOM from 'react-dom';

// from function component to class component

// App.js will pass location and month props to SeasonDisplay.js,
// SeasonDisplay.js will show text base on props
// const App = () => {
//     // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
//     window.navigator.geolocation.getCurrentPosition(
//         // success callback
//         (position) => {
//             console.log(position);
//         },
//         // fail callback
//         (err) => {
//             console.log(err);
//         }
//     );
//     return <div>Latitude: </div>;
// };

// class component can add logic and control,
// React.Component class has alot of functions
class App extends React.Component {
    render(){
        // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
        window.navigator.geolocation.getCurrentPosition(
            // success callback
            (position) => {
                console.log(position);
            },
            // fail callback
            (err) => {
                console.log(err);
            }
        );
        return <div>Latitude: </div>;
    }
}

ReactDOM.render(
    <App />,
    // same
    // document.getElementById('root')
    document.querySelector('#root')
);