import React from 'react';
// semantic-ui 'form' class will take up the width, 
// so use 'container' class in parent component to give margin and center
class SearchBar extends React.Component{
    // special property for event:
    // onClick, onChange, onSubmit
    //      most html tag can be have onClick, but not other 2,
    // 
    // onInputChange() handle keypress, argument is a given JS object 'event',
    // event has info about the event just occurred.
    //      event.target.value is what user typed in
    // 
    // use function to handle event like click or keypress,
    // it will be pass as callback function as a props,
    // so when pass just use the name, don't put () at the end
    // 
    // use state to store those changing value (VDOM), so we don't need to store in DOM
    state = { term: ''};
    // to handle form submit
    // use ES6 function to auto bind 'this'
    onFormSubmit = (event) =>{
        // preventDefault() will disable default form feature,
        // so when hit enter, will not submit the form, nor refresh the page
        event.preventDefault();
        // console.log(this.state.term);
        // this.props.onSubmit contain a function passed in,
        // when onFormSubmit execute, onSubmit will trigger the parent,
        // this.state.term will pass back to parent
        this.props.onSubmit(this.state.term);
      };
    render(){
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                <div className='field'>
                <label>Image Search</label>
                    <input 
                        type='text' 
                        // use value property to display state value
                        value={this.state.term}
                        // shorthand event handling use anonymous function
                        // each keypress event will update the state, rerender the component
                        onChange={(event) => this.setState({term: event.target.value})}
                    />
                </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;