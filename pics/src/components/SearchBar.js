import React from 'react';
// semantic-ui 'form' class will take up the width, 
// so use 'container' class in parent component to give margin and center
class SearchBar extends React.Component{
    render(){
        return (
            <div className='ui segment'>
                <form className='ui form'>
                <div className='field'>
                <label>Inmage Search</label>
                    <input type='text'/>
                </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;