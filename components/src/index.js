import React from 'react';
import ReactDOM from 'react-dom';

// import other component
import CommentDetail from './CommentDetail';

const App = () => {
    let name1 = 'Sam1';
    return (
        <div className="ui container comments">
            {/* passing porp name author with literal value or variable inside {} */}
            <CommentDetail author={name1} />
            <CommentDetail author='Sam2' />
            <CommentDetail author='Sam3' />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
