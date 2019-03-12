import React from 'react';
import SearchBar from './SearchBar';

// use 'container' class wrap components with margin and center
class App extends React.Component {
    // pass 'onSearchSubmit' as a prop 'onSubmit' to child 'SearchBar',
    // argument 'term' is the value going to pass back from child
    onSearchSubmit(term){
        console.log(term);
    };
    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;