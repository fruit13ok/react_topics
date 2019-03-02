import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
// import other component
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    let name1 = 'Sam';
    let name2 = 'John';
    let name3 = 'Jose';
    return (
        <div className="ui container comments">
            {/* ApprovalCard component use for styling, 
            wraping the content, which is CommentDetail,
            use open and close tags instead of self close tag */}
            <ApprovalCard>
                <div>
                <h4>Warning!</h4>
                Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={name1} 
                    timeAgo="Today at 4:45PM" 
                    content="Nice" 
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            {/* passing porp name author with literal value or variable inside {} */}
            <ApprovalCard>
                <CommentDetail 
                    author={name2} 
                    timeAgo="Today at 2:00PM" 
                    content="Ok" 
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author={name3} 
                    timeAgo="Today at 12:59PM" 
                    content="Wow" 
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
