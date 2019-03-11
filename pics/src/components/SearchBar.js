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
    // onInputChange(event){
    //     console.log(event.target.value);
    // }
    // onInputClick(){
    //     console.log('input was clicked');
    // }
    // onFormSubmit = event => {
    //     event.preventDefault();
    //     this.props.onSubmit(this.state.term);
    // };
    render(){
        return (
            <div className='ui segment'>
                <form className='ui form'>
                <div className='field'>
                <label>Inmage Search</label>
                    <input 
                        type='text' 
                        // onClick={this.onInputClick} 
                        // onChange={this.onInputChange}
                        // shorthand event handling use anonymous function
                        onChange={(event) => console.log(event.target.value)}
                    />
                </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;