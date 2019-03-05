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
    // our constructor overwriting constructor inside React.Component,
    // use super(props) to reference parent React.Component and pass in props,
    // initialize state object
    constructor(props){
        super(props);
        this.state = {lat: null, errorMessage: ''};
        // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
        window.navigator.geolocation.getCurrentPosition(
            // success callback
            (position) => {
                this.setState({lat: position.coords.latitude});
            },
            // fail callback
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );
    }
    render(){
        // return (
        //     <div>
        //         Latitude: {this.state.lat}
        //         <br />
        //         Error: {this.state.errorMessage}
        //     </div>
        // );
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        }
        // when popup question ask user to allow gps location, before user give answer
        return <div>Loading...</div>;
    }
}

ReactDOM.render(
    <App />,
    // same
    // document.getElementById('root')
    document.querySelector('#root')
);