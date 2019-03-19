import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';


// use 'container' class wrap components with margin and center
class App extends React.Component {
    // pass 'onSearchSubmit' as a prop 'onSubmit' to child 'SearchBar',
    // argument 'term' is the value going to pass back from child
    async onSearchSubmit(term){
        // same as
        // https://api.unsplash.com/search/photos/?query=office&client_id=b6d57a92abdcfbd53072d71314a13ea29068024117573466a894bdddbc8e6e91
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            params: {
                query: term
            },
            headers: {
                Authorization: 'Client-ID b6d57a92abdcfbd53072d71314a13ea29068024117573466a894bdddbc8e6e91'
            }
        })
        // response from get request promise/call back
        // this return a list of objects represent images
        // .then((response) => {
        //     console.log(response.data.results);
        // });
        console.log(response.data.results);
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