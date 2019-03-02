import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

// import other component
import CommentDetail from './CommentDetail';

const App = () => {
    let name1 = 'Sam';
    let name2 = 'John';
    let name3 = 'Jose';
    return (
        <div className="ui container comments">
            {/* passing porp name author with literal value or variable inside {} */}
            <CommentDetail 
                author={name1} 
                timeAgo="Today at 4:45PM" 
                content="Nice" 
                avatar={faker.image.avatar()} />
            <CommentDetail 
                author={name2} 
                timeAgo="Today at 2:00PM" 
                content="Ok" 
                avatar={faker.image.avatar()} />
            <CommentDetail 
                author={name3} 
                timeAgo="Today at 12:59PM" 
                content="Wow" 
                avatar={faker.image.avatar()} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
