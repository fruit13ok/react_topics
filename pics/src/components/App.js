import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';

// use 'container' class wrap components with margin and center
class App extends React.Component {
    state = {images: []};
    // pass 'onSearchSubmit' as a prop 'onSubmit' to child 'SearchBar',
    // argument 'term' is the value going to pass back from child
    // async onSearchSubmit(term){
    // ES6 arrow function with async
    onSearchSubmit = async (term) =>{
        // same as
        // https://api.unsplash.com/search/photos/?query=office&client_id=b6d57a92abdcfbd53072d71314a13ea29068024117573466a894bdddbc8e6e91
        // const response = await axios.get('https://api.unsplash.com/search/photos',{
        // using axios refactor in unsplash.js,
        // move root url, and headers to unsplash.js
        // use unsplash.get instead of axios.get
        const response = await unsplash.get('/search/photos',{
            params: {
                query: term
            },
            // headers: {
            //     Authorization: 'Client-ID b6d57a92abdcfbd53072d71314a13ea29068024117573466a894bdddbc8e6e91'
            // }
        })
        // response from get request promise/call back
        // this return a list of objects represent images
        // .then((response) => {
        //     console.log(response.data.results);
        // });
        // console.log(response.data.results);
        this.setState({images: response.data.results});
    };
    render() {
        return (
            <div className='ui container' style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {/* pass images array to ImageList */}
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;