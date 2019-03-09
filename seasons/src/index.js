import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// from function component to class component

// App.js will pass location and month props to SeasonDisplay.js,
// SeasonDisplay.js will show text base on props

// class component can add logic and control,
// React.Component class has alot of functions
class App extends React.Component {
    // our constructor overwriting constructor inside React.Component,
    // use super(props) to reference parent React.Component and pass in props,
    // initialize state object

    // init state outside of constructor is the shorthand, Babel will build default constructor with your state
    // no 'this' keyword
    state = {lat: null, errorMessage: ''};

    componentDidMount(){
        // console.log('my component was rendered to the screen');
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

    componentDidUpdate(){
        console.log('my component just updated - rerendered');
    }

    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat){
            // pass state as a props
            // when state change, parent and children receive the state will rerender
            // create a props 'lat' to pass the state 'this.state.lat'
            return <SeasonDisplay lat={this.state.lat} />;
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

