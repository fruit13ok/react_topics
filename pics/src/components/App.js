import React from 'react';
import SearchBar from './SearchBar';

// use 'container' class wrap components with margin and center
const App = () => {
    return (
        <div className='ui container' style={{marginTop: '10px'}}>
            <SearchBar />
        </div>
    );
};

export default App;